type Modifiers = 'none'|'chooseHighest'|'chooseLowest'
export interface ApplicationState {
    modifiers: Modifiers
    numberOfRolls: number
    numberOfDice: number
    sidesPerDice: number
    diceValues: Array<number>
    savedSettings: SavedSetting[]
}

export type SavedSetting = Omit<ApplicationState, "diceValues"|"savedSettings">

export type ApplicationActions = [
    ['loadSetting', payload: { settingToLoad: SavedSetting }],
    ['saveSetting'],
    ['deleteSetting', payload: { settingToDelete: SavedSetting }],
    ['updateModifiers', payload: { modifiers: Modifiers }],
    ['updateNumberOfRolls', payload: { numberOfRolls: number }],
    ['updateNumberOfDice', payload: { numberOfDice: number }],
    ['updateSidesPerDice', payload: { sidesPerDice: number }],
    ['generateDiceValues']
]

export type Value = number
export type Count = number
export type Histogram = [Value, Count][]
