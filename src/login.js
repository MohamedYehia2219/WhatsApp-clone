import React from 'react'
import './login.css'
import { Button } from '@mui/material'
import {auth,provider} from './firebase';
import { useSetValue } from "./StateProvider";
import { actionTypes } from "./reducer";


function Login() {
    const [{user}, dispatch] = useSetValue();

    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) =>
            dispatch({ type: actionTypes.SET_User, user: result.user })
          )
          .catch((error) => alert(error.message));
      };

  return (
    <div className='login'>
        <div className='login_container'>
            <div>{user}</div>
            <img src={require(`./img/app.png`)} alt='WhatsApp'/>
            <h1>Sign in to whatsApp</h1>
            <Button onClick={signIn}> Sign In with Google </Button>
        </div>
    </div>
  )
}
export default Login
