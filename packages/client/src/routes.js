import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import {
  Data,
  Home,
  Graphs,
  Segments,
} from "./views"

export default props => (
  <BrowserRouter>
    <Switch>
      <Route 
        path=":area(/)" 
        component={Home} 
        exact 
      />
      <Route 
        path=":area(/data)" 
        component={Data}
      />
      <Route 
        path=":area(/graphs)" 
        component={Graphs}
      />
      <Route 
        path=":area(/segments)" 
        component={Segments}
      />
    </Switch>
  </BrowserRouter>
)
