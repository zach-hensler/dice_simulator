import {ApplicationState, SavedSetting} from "./types.ts";

export const assertUnreachable = (_: never): never => {
    throw new Error("Didn't expect to get here");
}

export const modifierPlaintextMap = (modifier: ApplicationState["modifiers"]): string => {
    switch (modifier) {
        case "none":
            return ""
        case "chooseHighest":
            return "CH"
        case "chooseLowest":
            return "CL"
        default:
            return assertUnreachable(modifier)
    }
}

export const areSavedSettingsEqual = (settingOne: SavedSetting, settingTwo: SavedSetting): boolean => {
    const settingOneEntries = Object.entries(settingOne);
    const settingTwoEntries = Object.entries(settingTwo);

    if (settingOneEntries.length !== settingTwoEntries.length) return false;
    return !settingOneEntries.find(([key, value]) => {
        const secondSetting = settingTwoEntries.find(([key2, _]) => key === key2)
        return !secondSetting || secondSetting[1] !== value
    });
}

export const stateToSavedSettings = (state: ApplicationState): SavedSetting => {
    const { savedSettings, diceValues, ...settings} = state;
    return settings
}
