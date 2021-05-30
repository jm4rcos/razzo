import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import BusinessScreen from '../components/BusinessScreen'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:_id" component={BusinessScreen}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes