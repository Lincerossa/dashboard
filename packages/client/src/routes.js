import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import {
  Data
} from "./views"




export default props => (
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        component={Data} 
        exact 
      />
    </Switch>
  </BrowserRouter>
)
