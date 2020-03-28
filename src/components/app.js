import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Board from './board'
import PageNotFound from './page-not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Board} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
