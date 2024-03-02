import {FunctionalComponent} from "preact";
import {useMemo, useReducer} from "preact/hooks";

import {ApplicationState, ApplicationActions, Value, Count, Histogram} from './types.ts';
import {
    areSavedSettingsEqual,
    assertUnreachable,
    modifierPlaintextMap,
    stateToSavedSettings
} from "./utilities.ts";
import {useLocalStorage} from "./hooks/useLocalStorage.ts";

const generateDiceValues = (state: ApplicationState): ApplicationState["diceValues"] => {
    if ([state.numberOfDice, state.numberOfDice].some(isNaN)) {
        return [];
    }

    const getNewCount = (oldCount: number, newValue: number, modifier: ApplicationState["modifiers"]): number => {
        switch (modifier) {
            case "none":
                return oldCount + newValue
            case "chooseHighest":
                return oldCount > newValue ? oldCount : newValue
            case "chooseLowest":
                return oldCount > newValue || oldCount === 0 ? newValue : oldCount
            default:
                return assertUnreachable(modifier)
        }
    }

    const diceValues: ApplicationState["diceValues"] = [];
    for (let rollCount = 0; rollCount < state.numberOfRolls; rollCount++) {
        let count = 0;
        for (let diceCount = 0; diceCount < state.numberOfDice; diceCount++) {
            count = getNewCount(count, Math.floor(Math.random() * state.sidesPerDice) + 1, state.modifiers);
        }
        diceValues.push(count)
    }

    return diceValues
}

const getMinValue = (state: ApplicationState): number => {
    switch (state.modifiers) {
        case "none":
            return state.numberOfDice
        case "chooseLowest":
        case "chooseHighest":
            return 1
        default:
            return assertUnreachable(state.modifiers)
    }
}

const getMaxValue = (state: ApplicationState): number => {
    switch (state.modifiers) {
        case "none":
            return state.numberOfDice * state.sidesPerDice
        case "chooseLowest":
        case "chooseHighest":
            return state.sidesPerDice
        default:
            return assertUnreachable(state.modifiers)
    }
}

export const buildHistogram = (state: ApplicationState): Histogram => {
    if (!state.diceValues.length) {
        return [];
    }
    const histogram: Record<Value, Count> = {}
    const minValue = getMinValue(state);
    const maxValue = getMaxValue(state);
    for (let i = minValue; i <= maxValue; i++) {
        histogram[i] = 0;
    }
    state.diceValues?.forEach(value => histogram[value] += 1)
    return Object.entries(histogram).map(item => [parseInt(item[0]), item[1]]);
}

const getExpectedValue = (state: ApplicationState): number => {
    return buildHistogram(state).reduce((previous, current) => {
        const value = current[0]
        const count = current[1]
        return previous + value * count / state.numberOfRolls
    }, 0);
};

const initialState = (savedSettings: ApplicationState["savedSettings"]): ApplicationState => ({
    modifiers: 'none',
    numberOfRolls: 100,
    numberOfDice: 2,
    sidesPerDice: 6,
    diceValues: [],
    savedSettings
});

export const App: FunctionalComponent = () => {
    const {getLocalStorage, setLocalStorage} = useLocalStorage<ApplicationState["savedSettings"]>('savedSettings', []);
    const reducer = (prevState: ApplicationState, action: ApplicationActions[number]): ApplicationState => {
        const [type, payload] = action;
        switch (type) {
            case "loadSetting":
                return {...prevState, ...payload.settingToLoad, diceValues: []}
            case "saveSetting": {
                const newSetting = stateToSavedSettings(prevState)
                if (prevState.savedSettings.find(s => areSavedSettingsEqual(s, newSetting))) return prevState
                const newSettings = [...prevState.savedSettings, newSetting];
                setLocalStorage(newSettings)
                return {...prevState, savedSettings: newSettings}
            }
            case "deleteSetting": {
                const newSettings = prevState.savedSettings.filter(s => !areSavedSettingsEqual(s, payload.settingToDelete))
                setLocalStorage(newSettings)
                return { ...prevState, savedSettings: newSettings }
            }
            case "updateModifiers":
                return {...prevState, modifiers: payload.modifiers, diceValues: []}
            case "updateNumberOfRolls":
                return {...prevState, numberOfRolls: payload.numberOfRolls, diceValues: []}
            case "updateNumberOfDice":
                return {...prevState, numberOfDice: payload.numberOfDice, diceValues: []}
            case "updateSidesPerDice":
                return {...prevState, sidesPerDice: payload.sidesPerDice, diceValues: []}
            case "generateDiceValues":
                return {...prevState, diceValues: generateDiceValues(prevState)}
            default:
                return assertUnreachable(type)
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState(getLocalStorage()));
    const histogram = useMemo(() => buildHistogram(state), [state]);
    const expectedValue = useMemo(() => getExpectedValue(state), [state]);

    const divider = <hr style={{width: '50%'}}/>
    const spacer = <br style={{margin: '10px'}}/>
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {state.savedSettings.length
                ? <>
                    {spacer}
                    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                        <div>Saved Settings: </div>
                        {state.savedSettings.map(setting => {
                            const modifierText = modifierPlaintextMap(setting.modifiers)
                            return <button onClick={() => {
                                dispatch(['loadSetting', {settingToLoad: setting}])
                                dispatch(['generateDiceValues'])
                            }}>
                                {setting.numberOfRolls} rolls, {setting.numberOfDice} dice, d{setting.sidesPerDice} {modifierText && "("+modifierText+")"}
                                <span style={{
                                    marginLeft: '10px',
                                    padding: '5px',
                                    borderRadius: '10px',
                                    backgroundColor: 'gray'
                                }} onClick={() => dispatch(['deleteSetting', {settingToDelete: setting}])}>X</span>
                            </button>})}
                    </div>
                    {divider}
                </> : <></>}
            {spacer}
            <label for="numberOfRolls">Number of Rolls</label>
            <input
                id="numberOfRolls"
                type="number"
                value={state.numberOfRolls}
                onChange={(event) =>
                    dispatch(['updateNumberOfRolls', {numberOfRolls: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <label for="numberOfDice">Number of Dice</label>
            <input
                id="numberOfDice"
                type="number"
                value={state.numberOfDice}
                onChange={(event) =>
                    dispatch(['updateNumberOfDice', {numberOfDice: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <label for="sidesPerDice">Sides per Dice</label>
            <input
                id="sidesPerDice"
                type="number"
                value={state.sidesPerDice}
                onChange={(event) =>
                    dispatch(['updateSidesPerDice', {sidesPerDice: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <span>
                    <label for="chooseHighest">Choose Highest</label>
                    <input
                        id="chooseHighest"
                        type="checkbox"
                        checked={state.modifiers == 'chooseHighest'}
                        onChange={(event) =>
                            dispatch(['updateModifiers', {modifiers: event.currentTarget.checked ? 'chooseHighest' : 'none'}])}/>
                </span>
                {spacer}
                <span>
                    <label for="chooseLowest">Choose Lowest</label>
                    <input
                        id="chooseLowest"
                        type="checkbox"
                        checked={state.modifiers == 'chooseLowest'}
                        onChange={(event) =>
                            dispatch(['updateModifiers', {modifiers: event.currentTarget.checked ? 'chooseLowest' : 'none'}])}/>
                </span>
            </div>
            {spacer}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={() => dispatch(['saveSetting'])}>Save</button>
                {spacer}
                <button onClick={() => dispatch(['generateDiceValues'])}>Roll Dice</button>
            </div>
            {spacer}
            {divider}
            {spacer}
            <div style={{display: 'flex'}}>
                {histogram.map(([value, count]) => {
                    if ([value, count].some(isNaN)) return <></>
                    return <div style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}>
                        <div>{count}</div>
                        <div style={{
                            backgroundColor: 'gray',
                            width: '20px',
                            height: `${200 * count / state.numberOfRolls}px`
                        }}></div>
                        <div style={{width: '20px'}}>{value}</div>
                    </div>
                })}
            </div>
            {isNaN(expectedValue)
                ? <></>
                : <div>Expected Value: {expectedValue}</div>}
        </div>
    )
}