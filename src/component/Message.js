import React from 'react'
import { auth } from '../firebase';

function message({message}) {
    let newStyles = '';
    if (auth.currentUser) {
        if (message.data.uid === auth.currentUser.uid ) {
            newStyles = 'my-message';
        } else {
            newStyles = 'message';
        }
    } else {
        newStyles = 'message';
    }
    console.log(message.data)
    
    const date = new Date(message.data.timestamp?.seconds*1000);
    const options = { 
        month: 'long', 
        day: 'numeric' 
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;

    const newDate = date.toLocaleDateString('en-US', options);
  return (
    <div>
         <article className={newStyles}>
            <div>
                <div className='text-message'>
                    <p className="text">{ message.data.text }</p>
                </div>
                <p className="user">{`${newDate} - ${time}`}</p>
            </div>
            {/* <img src={message.photo} alt="user photo" /> */}
        </article>
    </div>
  )
}

export default message