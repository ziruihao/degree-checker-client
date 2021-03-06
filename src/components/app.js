import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Main from '../containers/main';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
