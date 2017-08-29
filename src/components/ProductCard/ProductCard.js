import React from 'react'

const ProductCard = (props) =>
  <div>
    <h1>{props.product.name}</h1>
    <p>{props.product.price}</p>
    <img src={props.product.image}
      alt={props.product.name}
    />
    <p><button onClick={() => props.addProductToCart(props.product.id)}>Add to Cart</button></p>
  </div>

export default ProductCard
