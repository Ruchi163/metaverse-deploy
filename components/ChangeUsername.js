import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
    const{setUserData,isUserUpdating,userError,user}=useMoralis();

    const setUsername=()=>{
        const username=prompt(`Enter your Username(current:${user.getUsername()})`);
        if(!username)return;
        setUserData({
          username,
        });
    };
  return (
    <div className='text-sm absolute top-5 right-5 text-pink-500'>
        <button disabled={isUserUpdating}
        onClick={setUsername}
        className='hover:opacity-70'>
            Change Username
        </button>
</div>
  )
}

export default ChangeUsername