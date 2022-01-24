import React from 'react'
import { connect } from 'react-redux' //Connect component to state of application
import Card from './Card'

function Media(props) {
    const { min, max } = props
    return (
        <Card title="Average of the Numbers" color='green'>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media)