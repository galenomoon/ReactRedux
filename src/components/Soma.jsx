import React from 'react'
import { connect } from 'react-redux' //Connect component to state of application
import Card from './Card'

function Soma(props) {
    const { min, max } = props
    return (
        <Card title="Sum of Numbers" color='blue'>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{max + min}</strong>
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


export default connect(mapStateToProps)(Soma)