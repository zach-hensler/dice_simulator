import {describe, expect, test} from 'vitest'
import {ApplicationState} from "../src/types";
import {buildHistogram} from "../src/app";

describe('buildHistogram function from src/app.tsx', () => {
    const baseState: ApplicationState = {
        modifiers: 'none',
        numberOfRolls: 1,
        numberOfDice: 1,
        sidesPerDice: 1,
        diceValues: null
    }
    test('Should handle null values', () => {
        const histogram = buildHistogram({ ...baseState, diceValues: null });
        expect(histogram.length).toBe(0);
    })
})
