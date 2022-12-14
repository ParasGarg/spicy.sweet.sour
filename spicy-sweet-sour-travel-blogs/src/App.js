import React from 'react';
// import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <div>Welcome Spicy Sweet Sour</div>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/dynamic" component={DynamicPage} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;