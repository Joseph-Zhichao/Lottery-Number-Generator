import React from 'react'
import classes from './NumberBlock.module.css'

function NumberBlock(props) {
       return <li className = {classes.NumberBlock}>{props.number}</li>;
}

export default NumberBlock