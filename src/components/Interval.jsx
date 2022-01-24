import './Interval.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { changeMinValue, changeMaxValue } from '../store/actions/numbersActions'

function Interval(props) {
    const { min, max } = props;

    return (
        <Card title="Number Range" color='red'>
            <div className="Interval">

                <span>
                    <strong>Minimal</strong>
                    <input type="number" value={min}
                        onChange={e => props.changeMinimal(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={max}
                        onChange={e => props.changeMax(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}
// onChange={e => props.changeMaximus(+e.target.value)} 

//Mapping states of applications and sending to props
function mapStateToProps(state) {
    return { //Calling reducer's states
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

//Mapping AC of applications and sending to props
function mapDispatchToProps(dispatch) {
    return { //Calling reducer's states
        changeMinimal(newValue) {
            //Action Creator returning an action
            const action = changeMinValue(newValue)
            dispatch(action) //Evolve state of application
        }, changeMax(newValue) {
            //Action Creator returning an action
            const action = changeMaxValue(newValue)
            dispatch(action) //Evolve state of application
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interval)