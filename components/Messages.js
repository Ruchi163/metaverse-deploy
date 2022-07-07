import React, { useRef } from 'react'
import {ByMoralis, useMoralis,useMoralisQuery} from 'react-moralis';
import SendMessage from './SendMessage';

function Messages() {
    const{user}=useMoralis();
    const endOfMessagesRef=useRef(null);
  return (
    <div className='pb-56'>
        <div className='my-5'>
            <ByMoralis 
            variant='dark' 
            style={{marginLeft:"auto", marginRight:"auto"}}/>
        </div>
        <div>
            {/* Messages */}
        </div>

        <div className='flex justify-center'>
            {/* Send Messages */}
            <SendMessage/>
        </div>
        <div ref={endOfMessagesRef} className='text-center text-gray-300 mt-5'>
            <p>
                You Are Up-To-Date {user.getUsername()}
            </p>
        </div>
    </div>
  )
}
//1:17
export default Messages