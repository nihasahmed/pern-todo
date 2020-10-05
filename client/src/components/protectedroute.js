import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

class ProtectedRoute extends React.Component {
  _isMounted = false;
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };

    // Your axios call here
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      auth.isAuthenticated().then((returnValue) => {
        this.setState(() => ({ isLoading: false, isLoggedIn: returnValue }));
      });
    }
  }

  render() {
    return this.state.isLoading ? null : this.state.isLoggedIn ? (
      <Route
        path={this.props.path}
        component={this.props.component}
        exact={this.props.exact}
      />
    ) : (
      <Redirect
        to={{ pathname: "/login", state: { from: this.props.location } }}
      />
    );
  }
}

export default ProtectedRoute;
