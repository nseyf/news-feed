import React, { Component } from 'react';
import ShowHeadlines from './containers/ShowHeadlines';
import SelectSource from './containers/SelectSource';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
        <Route path='/headlines' component={ShowHeadlines} />
        <Route path='/' component={SelectSource} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
