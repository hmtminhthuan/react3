import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    const { product, handleModal, handleCart } = this.props;
    // console.log(this.props);
    return (
      <div>
        <div className="card shadow p-3 mb-5 bg-white rounded" key={product.id}>
          <img
            className="w-75 mx-auto"
            src={product.image}
            alt="..."
            onClick={() => {
              handleModal(product, true);
            }}
          />
          <div className="card-body">
            <p className="shoe_name fs-5">{product.name}</p>
            <p className="shoe_price fs-4">{product.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                handleCart(product);
              }}
            >
              <span>add to carts </span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
