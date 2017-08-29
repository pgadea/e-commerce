import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import DataProvider from './containers/DataProvider/DataProvider'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <DataProvider />
      </BrowserRouter>
    )
  }
}

export default App
