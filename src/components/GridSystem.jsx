import React from 'react'
import Grid from './Grid';

function GridSystem(props) {
  return (
    <div className={props.gridOpts}>
        {props.gridState.map((props) => (
            <Grid className={props.className} title={props.title} list={props.list} key={props.title} />
        ))}
    </div>
  )
}

export default GridSystem;