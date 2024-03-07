type Modifiers = 'none'|'chooseHighest'|'chooseLowest'
type HistogramView = 'horizontal' | 'vertical'
export type SavedSetting = Omit<ApplicationState, "diceValues"|"savedSettings"|"histogramView">

export interface ApplicationState {
    histogramView: HistogramView
    modifiers: Modifiers
    numberOfRolls: number
    numberOfDice: number
    sidesPerDice: number
    diceValues: Array<number>
    savedSettings: SavedSetting[]
}

export type ApplicationActions = [
    ['loadSetting', payload: { settingToLoad: SavedSetting }],
    ['saveSetting'],
    ['deleteSetting', payload: { settingToDelete: SavedSetting }],
    ['updateHistogramView', payload: { histogramView: HistogramView }],
    ['updateModifiers', payload: { modifiers: Modifiers }],
    ['updateNumberOfRolls', payload: { numberOfRolls: number }],
    ['updateNumberOfDice', payload: { numberOfDice: number }],
    ['updateSidesPerDice', payload: { sidesPerDice: number }],
    ['generateDiceValues']
]

export type Value = number
export type Count = number
export type Histogram = [Value, Count][]
