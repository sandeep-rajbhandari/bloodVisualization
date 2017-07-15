import React from 'react'
import PropTypes from 'prop-types'
import './login.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import GoogleLogin from 'react-google-login';

import {
  blue500, blue700, blue900, orange500,
  grey100, grey500, darkBlack, white, grey300
} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey300,
    textColor: '#d9241b',
  }
})


const success = (response) => {
  console.log(response);
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading');

};

export const Login = () => (
  <div className="test">
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className='bg'>
        <GoogleLogin
          clientId='107381913090-uhoi7mr2td3ghe1aso594fq9dscd9v2u.apps.googleusercontent.com'
          scope='profile email'
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          approvalPrompt="force"
        >
          <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Login using google"
            className="margin-tb-20-10"
            icon={<FontIcon className="fa fa-google" />}
          />
        </GoogleLogin>
      </div>
    </MuiThemeProvider>
  </div>
)

export default Login;
