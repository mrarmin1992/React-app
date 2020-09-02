import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {

        componentWillUpdate() {
            console.log('[OrderSummary] WillUpdate');
        }
        render () {
            const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
                return ( 
                    <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
                });
            return (
                <Aux >

                <h3>Vaša narudžba </h3>
                <p>Ukusan burger sa prilozima: </p>  
                <ul>
                      {ingredientSummary}
  
                </ul>
                      <p><strong>Ukupno za platiti: {this.props.price.toFixed(2)}</strong> KM</p>
                    <p>Nastavi sa narudžbom ?</p> 
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> 
          </Aux>
            );
        }



};

export default OrderSummary;