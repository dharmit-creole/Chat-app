import React, { useEffect, useState } from 'react'
import Message from "./Message";
import {auth, db} from "../firebase"
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat() {
  const [messages, setMessage] = useState([]);

  const [user] = useAuthState(auth);
  useEffect(() => {
    const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsbscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessage = [];
      querySnapshot.forEach(item => {
        currentMessage.push({ data: item.data(), id: item.id })
      })
      setMessage(currentMessage);
    })

    return unsbscribe;
  }, [])

  return (
    <>
      <section className="chat-content">
          {
              messages && messages.map(item => (
                  <Message
                      key={item.id}
                      message={item}
                  />
              ))
          }
      </section>
    </>
  )
}

export default Chat