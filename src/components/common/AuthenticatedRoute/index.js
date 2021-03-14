import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../../store/Auth';

const AuthenticatedRoute = ({ currentUser, ...props }) => {
  if (currentUser) {
    return (
      <Route { ...props } />
    );
  } else {
    return <Redirect to="/login" />
  }
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state.auth)
});

export default connect(mapStateToProps, null)(AuthenticatedRoute);
