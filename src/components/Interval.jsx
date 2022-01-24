import './Interval.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Interval(props) {
    const { min, max } = props;
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

export default connect(mapStateToProps)(Interval)