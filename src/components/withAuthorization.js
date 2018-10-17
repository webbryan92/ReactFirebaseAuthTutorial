import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';
import * as routes from '../constants/routes';

//higher order component to handle auth

//pass auth condition to the component as a parameter
const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
        //check the authorization state of the user on mount
        firebase.auth.onAuthStateChanged(authUser => {
            //if not signed in ask user to sign in
            if(!authCondition(authUser)) {
                this.props.history.push(routes.SIGN_IN)
            }
        });
    }
    //Render the page if authorized or nothing
    render() {
      return (
          <AuthUserContext.Consumer>
              {authUser = authUser ? <Component {...this.props} /> : null}
          </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;