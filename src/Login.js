import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    // const [{user}, dispatch]=useStateValue(); -->Also run on this
const [state, dispatch]=useStateValue();

    const signIn = () => {
      auth
      .signInWithPopup(provider)
      .then(result =>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user, // --> push in datalayer
          })
      })
      .catch(error =>{
          alert(error.message)
      })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='/images/slack.jpeg' alt='Slack Logo'></img>
                <h1>Sign in to Clever Programmer HQ</h1>
                <p>cleverprogrammer.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login