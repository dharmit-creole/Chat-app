import React from 'react'
import { auth } from '../firebase';
import { GoogleAuthProvider,signInWithPopup, signInWithRedirect, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from './Chat'
import SendMessage from './SendMessage';

function SignIn() {
  const [user] = useAuthState(auth);
  const image = user ? user.photoURL : 'https://peterchu.com/wp-content/uploads/2020/10/user-dummy-pic.png';
  const name = user ? user.displayName : 'Your Name';
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
      }).catch(error => console.log(error))
    }

    const logOut = () => {
      signOut(auth);
    }
  return (
    <div>
        <div>
          <img src= { image } alt='user photo' />
          <p>{ name }</p>

          { user ? 
            <button onClick={ logOut }> Logout </button> :
            <button onClick={ signInWithGoogle }>Signin with google</button>
          }
        </div>
        { user ? <><Chat />
        <SendMessage /></> : "" }
    </div>
  )
}

export default SignIn