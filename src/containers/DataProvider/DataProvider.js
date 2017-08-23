import React, { Component } from 'react'
import faker from 'faker'
import Layout from '../../Layout'

class DataProvider extends Component {
  state = {
    products: []
  }
  componentDidMount = () => {
    const tempProducts = this.state.products

    for(let i = 0; i < 10; i +=1) {
      const fakeProduct = {
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

  render () {
    return (
      <div>
        <Layout products={this.state.products}/>
      </div>
    )
  }
}

export default DataProvider
