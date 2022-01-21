import './Interval.css'
import React from 'react'
import Card from './Card'

export default props=>{
    return (
<Card title="Number Range" color='red'>
    <div className="Interval">

    <span>
        <strong>Minimal</strong>
        <input type="number" value={0} />
    </span>
    <span>
        <strong>Maximum</strong>
        <input type="number" value={0} />
    </span>
    </div>
</Card>
    )
}