import React from 'react'
import { connect } from 'react-redux' //Connect component to state of application
import Card from './Card'

function Sorteio(props) {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min))
    return (
        <Card title="Numbers Raffle" color='purple'>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{random}</strong>
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

export default connect(mapStateToProps)(Sorteio)