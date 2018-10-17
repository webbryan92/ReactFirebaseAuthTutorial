import React, { Component } from 'react';

import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>

//test the auth status of the user
const authCondition = (authUser) => !!authUser;

//if user is authorized render homepage
export default withAuthorization(authCondition)(HomePage);