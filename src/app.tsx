import {FunctionalComponent} from "preact";
import {useMemo, useReducer} from "preact/hooks";

import {ApplicationState, ApplicationActions, Value, Count, Histogram} from './types.ts';
import {assertUnreachable} from "./utilities.ts";

const generateDiceValues = (state: ApplicationState): ApplicationState["diceValues"] => {
    if ([state.numberOfDice, state.numberOfDice].some(isNaN)) {
        return null;
    }

    const getNewCount = (oldCount: number, newValue: number, modifier: ApplicationState["modifiers"]): number => {
        console.log('old: ', oldCount, '\nnew: ', newValue)
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

const buildHistogram = (state: ApplicationState): Histogram => {
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

const initialState: ApplicationState = {
    modifiers: 'none',
    numberOfRolls: 100,
    numberOfDice: 1,
    sidesPerDice: 6,
    diceValues: null,
};

export const App: FunctionalComponent = () => {
    const reducer = (prevState: ApplicationState, action: ApplicationActions[number]): ApplicationState => {
        const [type, payload] = action;
        switch (type) {
            case "updateModifiers":
                return { ...prevState, modifiers: payload.modifiers, diceValues: null }
            case "updateNumberOfRolls":
                return { ...prevState, numberOfRolls: payload.numberOfRolls, diceValues: null }
            case "updateNumberOfDice":
                return { ...prevState, numberOfDice: payload.numberOfDice, diceValues: null }
            case "updateSidesPerDice":
                return { ...prevState, sidesPerDice: payload.sidesPerDice, diceValues: null }
            case "generateDiceValues":
                return { ...prevState, diceValues:  generateDiceValues(prevState)}
            default:
                return assertUnreachable(type)
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const histogram = useMemo(() => buildHistogram(state), [state]);
    const expectedValue = useMemo(() => getExpectedValue(state), [state]);

    const spacer = <br style={{ margin: '10px' }} />
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label>Number of Rolls</label>
            <input
                type="number"
                value={state.numberOfRolls}
                onChange={(event) =>
                    dispatch(['updateNumberOfRolls', {numberOfRolls: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <label>Number of Dice</label>
            <input
                type="number"
                value={state.numberOfDice}
                onChange={(event) =>
                    dispatch(['updateNumberOfDice', {numberOfDice: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <label>Sides per Dice</label>
            <input
                type="number"
                value={state.sidesPerDice}
                onChange={(event) =>
                    dispatch(['updateSidesPerDice', {sidesPerDice: event.currentTarget.valueAsNumber}])}/>
            {spacer}
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <span>
                    <label>Choose Highest</label>
                    <input
                        type="checkbox"
                        checked={state.modifiers == 'chooseHighest'}
                        onChange={(event) =>
                            dispatch(['updateModifiers', {modifiers: event.currentTarget.checked ? 'chooseHighest' : 'none'}])}/>
                </span>
                {spacer}
                <span>
                    <label>Choose Lowest</label>
                    <input
                        type="checkbox"
                        checked={state.modifiers == 'chooseLowest'}
                        onChange={(event) =>
                            dispatch(['updateModifiers', {modifiers: event.currentTarget.checked ? 'chooseLowest' : 'none'}])}/>
                </span>
            </div>
            {spacer}
            <button onClick={() => dispatch(['generateDiceValues'])}>Roll Dice</button>
            {spacer}
            <hr style={{ width: '50%' }}/>
            {spacer}
            <div style={{display: 'flex'}}>
                {histogram.map(([value, count]) =>
                    <div style={{
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
                    </div>)}
            </div>
            <div>Expected Value: {expectedValue}</div>
        </div>
    )
}
