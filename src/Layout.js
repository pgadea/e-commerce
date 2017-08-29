import React, { Component } from 'react'
import * as AppPropTypes from './appPropTypes'
import NavBar from './NavBar'
import Routes from './Routes'

class Layout extends Component {
  static propTypes = {
    data: AppPropTypes.data
  }
  state = {
    options: []
  }
  componentDidMount = () => this.setState({ options: ['home', 'about', 'products'] })
  render () {
    return (
      <div>
        <NavBar options={this.state.options} />
        <Routes
          data={ this.props.data }
        />
      </div>
    )
  }
}

export default Layout
