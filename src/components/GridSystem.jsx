import React from 'react'
import Grid from './Grid';

function GridSystem(props) {
  return (
    <div className={props.gridOpts}>
        {props.gridState.map((props) => (
            <Grid className={props.className} title={props.title} list={props.list} initial={props.initial} animate={props.animate} variants={props.variants} item={props.item} key={props.title} />
        ))}
    </div>
  )
}

export default GridSystem;