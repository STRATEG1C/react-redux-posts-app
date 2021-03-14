import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/screens/Login';
import AuthenticatedRoute from '../components/common/AuthenticatedRoute';
import PostsPage from '../components/screens/PostsPage';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <AuthenticatedRoute exact path="/posts" component={PostsPage} />
      </Switch>
    </Router>
  );
}

export default Routing;
