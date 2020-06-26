import React from 'react'
import classes from './NumberBlocks.module.css'
import NumberBlock from '../NumberBlock/NumberBlock'

const NumberBlocks = (props) => {

    let blocks = Object.keys(props.newnumbers).map(index =>{
        return (<NumberBlock number = {props.newnumbers[index]} />)
    })

    return (
        <div className = {classes.NumberBlocks}>
            {blocks}
        </div>
       ); 
    }


export default NumberBlocks