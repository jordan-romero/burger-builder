import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/button/Button';

export default class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummart] willUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Prices: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType='Success'>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
