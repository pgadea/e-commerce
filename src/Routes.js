import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as AppPropTypes from './appPropTypes'
import ProductListContainer from './containers/ProductListContainer/ProductListContainer'
import HomeContainer from './containers/HomeContainer/HomeContainer'
import AboutContainer from './containers/AboutContainer/AboutContainer'

const Routes = (props) =>
  <Switch>
    <Route exact path='/home' component={HomeContainer} />
    <Route path='/about' component={AboutContainer} />
    <Route
      path='/products'
      render={() =>
        <ProductListContainer
          products={props.data.products}
          addProductToCart={props.data.addProductToCart}
        />
      }
    />
  </Switch>

Routes.propTypes = {
  data: AppPropTypes.data
}

export default Routes
