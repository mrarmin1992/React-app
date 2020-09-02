import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salata', type: 'salad' },
    { label: 'Pomfrit', type: 'bacon'},
    { label: 'Sir', type: 'cheese'},
    { label: 'Meso', type: 'meat'},
];

const buildControls = (props) => (

        <div className={classes.BuildControls}>
            <p>Trenutna cijena:<strong> {props.price.toFixed(2)}</strong> KM</p>

            {controls.map(ctrl => (
                
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                    />
                
                ))}
                <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>NARUČI</button>


        </div>

);


export default buildControls;