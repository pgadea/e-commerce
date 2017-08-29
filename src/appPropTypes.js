import PropTypes from 'prop-types'

export const data = PropTypes.shape({
  cart: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  addProductToCart: PropTypes.func.isRequired
}).isRequired
