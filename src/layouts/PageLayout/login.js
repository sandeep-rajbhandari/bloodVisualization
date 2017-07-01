import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const success = (response) => {
  console.log(response );
};

const error = (response) => {
  console.error(response);
};

const loading = () => {
  console.log('loading'); 
  
};


export const Login =() => (
 <div>
    <GoogleLogin
        clientId='107381913090-uhoi7mr2td3ghe1aso594fq9dscd9v2u.apps.googleusercontent.com'
        scope='profile'
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        offline={true}
        approvalPrompt="force"
    >
      <span>Login</span>
    </GoogleLogin>
  </div>
)

export default Login;
