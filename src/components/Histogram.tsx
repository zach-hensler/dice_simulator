import {FunctionalComponent} from "preact";
import {ApplicationState, Histogram} from "../types.ts";

interface HistogramProps {
    state: ApplicationState
    histogram: Histogram
}

export const HistogramView: FunctionalComponent<HistogramProps> = ({ state, histogram }) => {
    return state.histogramView === 'horizontal'
        ? <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', maxWidth: '80%', overflow: 'scroll' }}>
        {histogram.map(([value, count]) => {
            if ([value, count].some(isNaN)) return <></>
            return <div style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <div>{count}</div>
                <div style={{
                    backgroundColor: 'gray',
                    width: '15px',
                    height: `${200 * count / state.numberOfRolls}px`
                }}></div>
                <div style={{width: '15px', margin: '0 5px'}}><b>{value}</b></div>
            </div>
        })}
    </div>
    : <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {histogram.map(([value, count]) => {
                if ([value, count].some(isNaN)) return <></>
                return <div style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <div>{count}</div>
                    <div style={{
                        backgroundColor: 'gray',
                        height: '20px',
                        width: `${300 * count / state.numberOfRolls}px`
                    }}></div>
                    <div style={{width: '20px', margin: '0 5px', borderRight: 'solid rgba(105, 105, 105, 0.4) 3px'}}><b>{value}</b></div>
                </div>
            })}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {[...histogram].reverse().map(([value, count]) => {
                if ([value, count].some(isNaN)) return <></>
                return <div style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <div style={{width: '20px', margin: '0 5px', borderLeft: 'solid rgba(105, 105, 105, 0.4) 3px'}}><b>{value}</b></div>
                    <div style={{
                        backgroundColor: 'gray',
                        height: '20px',
                        width: `${300 * count / state.numberOfRolls}px`
                    }}></div>
                    <div>{count}</div>
                </div>
            })}
        </div>
    </div>
}
