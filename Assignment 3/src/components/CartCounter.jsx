import React, { Component } from "react";

export default class CartCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCart = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="cart-counter">
        <h4>🛒 Cart Items: {this.state.count}</h4>
        <button onClick={this.incrementCart}>Add Random Item</button>
      </div>
    );
  }
}
