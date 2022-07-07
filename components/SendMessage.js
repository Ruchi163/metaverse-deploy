import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage() {
    const{user,Moralis}=useMoralis();
    const[message,setMessage]=useState("");
    const sendMessage = (e)=> {
      e.preventDefault();
      if(!message) return;
      const Messages=Moralis.Object.extend("Messages");
      const messages=new Messages();

      messages.save({
        message:message,
        username:user.getUsername(),
        ethAddress:user.get('ethAddress'),
      })
      .then(
        message=>{
        },
        (error)=>{
          console.log("Error Found");
        }
      );
   };
  return (
    <form className='flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-pink-700'>
        <input className='flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-200'
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder={`Enter the message ${user.getUsername()}...`}

        /> 
        <button
        type="submit"
       onClick={sendMessage}
         className='font-bold text-pink-500'>Send</button>
    </form>
  )
}

export default SendMessage