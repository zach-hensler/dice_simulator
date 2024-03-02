type Modifiers = 'none'|'chooseHighest'|'chooseLowest'
export interface ApplicationState {
    modifiers: Modifiers
    numberOfRolls: number
    numberOfDice: number
    sidesPerDice: number
    diceValues: Array<number>|null
}

export type ApplicationActions = [
    ['updateModifiers', payload: { modifiers: Modifiers }],
    ['updateNumberOfRolls', payload: { numberOfRolls: number }],
    ['updateNumberOfDice', payload: { numberOfDice: number }],
    ['updateSidesPerDice', payload: { sidesPerDice: number }],
    ['generateDiceValues']
]

export type Value = number
export type Count = number
export type Histogram = [Value, Count][]