import PropTypes from 'prop-types'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = (props) => {
  console.log(props)
  return <div>
    {
      props.products.map((product, index) =>
        <div key={index}>
          <ProductCard
            product={product}
            addProductToCart={props.addProductToCart}
          />
        </div>
      )
    }
  </div>
}
export default ProductList
