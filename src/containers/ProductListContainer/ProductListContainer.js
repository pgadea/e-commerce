import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ProductList from '../../components/ProductList/ProductList'

class ProductListContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    addProductToCart: PropTypes.func.isRequired
  }
  render () {
    return (
      <div>
        <ProductList products={this.props.products} addProductToCart={this.props.addProductToCart} />
      </div>
    )
  }
}

export default ProductListContainer
