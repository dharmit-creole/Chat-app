import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../firebase';

function SendMessage() {

    const[ input, setInput ] = useState('');

    const messageSent = async event => {
        event.preventDefault();

        const { uid, displayName, photoURL } = auth.currentUser;

        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput('');
    }
  return (
    <form onSubmit={messageSent}>
        <input type="text" placeholder='Enter Message ..!' onChange={e => setInput(e.target.value)} />

        <button type='submit'>Send</button>
    </form>
  )
}

export default SendMessage