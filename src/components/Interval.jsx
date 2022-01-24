import './Interval.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { changeMinValue } from '../store/actions/numbers'

function Interval(props) {
    const { min, max } = props;
    props.minChange(10000)
    return (
        <Card title="Number Range" color='red'>
            <div className="Interval">

                <span>
                    <strong>Minimal</strong>
                    <input type="number" value={min} />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}

//Mapping states of applications and sending to props
function mapStateToProps(state) {
    return { //Calling reducer's states
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

//Mapping AC of applications and sending to props
function mapActionCreatorsToProps(dispatch) {
    return { //Calling reducer's states
        minChange(newValue) {
            //Action Creator returning an action
            const action = changeMinValue(newValue)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapActionCreatorsToProps
)(Interval)