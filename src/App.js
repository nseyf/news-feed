import React, { Component } from 'react';
import ShowHeadlines from './containers/ShowHeadlines';
import SelectSource from './containers/SelectSource';
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Switch>
        <Route path='/headlines' component={ShowHeadlines} />
        <Route path='/' component={SelectSource} />
        </Switch>
      </div>
    </HashRouter>
    );
  }
}

export default App;
