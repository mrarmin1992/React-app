import React, { Component } from 'react';          // U ovom dijelu koda kucamo ono sta ce sadrziti neki nas burger cisto da bi bilo razdvojeno i ne bi bio kod natrpan, 
                                    //    korsitimo switch case, a csss document smo unaprijed kopirali 
import PropTypes from 'prop-types';
import classes from './Burgeringredient.css';

    class BurgerIngredient extends Component {
        render () {
        
            let ingredient = null;
            switch(this.props.type){
            
                case ('bread-bottom'): 
                    ingredient = <div className = {classes.BreadBottom}></div>
                    break;
                case ('bread-top') : 
                ingredient = (
                    <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
                case ('meat') : 
                    ingredient = <div className={classes.Meat}></div>;
                    break;
                case ('cheese') : 
                    ingredient = <div className={classes.Cheese}></div>;
                    break;
                case ('salad') : 
                    ingredient = <div className={classes.Salad}></div>;
                    break;
                case ('bacon') : 
                    ingredient = <div className={classes.Bacon}></div>;
                    break;
                default: 
                    ingredient= null;
                       
            }
            return ingredient;
    }
        }
        BurgerIngredient.PropTypes = {
            type: PropTypes.string.isRequired
        };
 export default BurgerIngredient;