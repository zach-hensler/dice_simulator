import {describe, expect, test} from 'vitest'
import {ApplicationState} from "../src/types";
import {buildHistogram} from "../src/app";

describe('buildHistogram function from src/app.tsx', () => {
    const baseState: ApplicationState = {
        modifiers: 'none',
        numberOfRolls: 1,
        numberOfDice: 1,
        sidesPerDice: 1,
        diceValues: [],
        savedSettings: []
    }
    test('Should handle no dice values', () => {
        const histogram = buildHistogram({ ...baseState, diceValues: [] });
        expect(histogram.length).toBe(0);
    })

    test('Should build a histogram with no modifiers', () => {
        const numberOfRolls = 10;
        const numberOfDice = 2;
        const sidesPerDice = 6;
        const diceValues = [2, 12, 4, 3, 6, 8, 10, 7, 8, 4];
        const histogram = buildHistogram({ ...baseState, numberOfRolls, numberOfDice, sidesPerDice, diceValues });
        expect(histogram[0][0]).toBe(2);
        expect(histogram[histogram.length - 1][0]).toBe(12)
        expect(histogram).toEqual([
            [2,1],
            [3,1],
            [4,2],
            [5,0],
            [6,1],
            [7,1],
            [8,2],
            [9,0],
            [10,1],
            [11,0],
            [12,1],
        ])
    })

    test('Should build a histogram with "chooseHighest" modifiers', () => {
        const numberOfRolls = 5;
        const numberOfDice = 2;
        const sidesPerDice = 4;
        const diceValues = [1, 2, 1, 4, 2];
        const histogram = buildHistogram({ ...baseState, numberOfRolls, numberOfDice, sidesPerDice, diceValues, modifiers: "chooseHighest" });

        expect(histogram).toEqual([
            [1, 2],
            [2, 2],
            [3, 0],
            [4, 1]
        ])
    })

    test('Should build a histogram with "lowest" modifiers', () => {
        const numberOfRolls = 5;
        const numberOfDice = 2;
        const sidesPerDice = 4;
        const diceValues = [1, 2, 1, 4, 2];
        const histogram = buildHistogram({ ...baseState, numberOfRolls, numberOfDice, sidesPerDice, diceValues, modifiers: "chooseLowest" });

        expect(histogram).toEqual([
            [1, 2],
            [2, 2],
            [3, 0],
            [4, 1]
        ])
    })
})
