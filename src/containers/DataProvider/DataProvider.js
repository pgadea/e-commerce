import React, { Component } from 'react'
import faker from 'faker'
import Layout from '../../Layout'

class DataProvider extends Component {
  state = {
    cart: [],
    products: [],
  }
  componentDidMount = () => {
    const tempProducts = this.state.products

    for(let i = 0; i < 10; i +=1) {
      const fakeProduct = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
      }

      tempProducts.push(fakeProduct)
    }
    tempProducts.push("I work!")
    this.setState({products: tempProducts})

    console.log("I set the state of products!", this.state.products)
  }

  addProductToCart = productId => {
    const cart = this.state.cart
    cart.push(productId)
    this.setState({ cart: cart  })
    console.log(`Product added: ${productId}`)
  }

  render () {
    const data = {
      cart: this.state.cart,
      products: this.state.products,
      addProductToCart: this.addProductToCart
    }
    return (
      <div>
        <Layout data={data}/>
      </div>
    )
  }
}

export default DataProvider
