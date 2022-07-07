import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const {user}=useMoralis();
  return (
    <div className='sticky top-0 p-5 z-50  bg-black shadow-sm border-b-2 border-pink-700'>
        <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center' >
            <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                <Image
                layout="fill"
                className="rounded-full "
                 src="https://links.papareact.com/3pi"/>
            </div>
<div className='lg:text-center col-span-4'>


            <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8
            rounded-full '>
                <Avatar logoutOnPress/>
            </div>
            <h1 className='text-3xl text-pink-500 '>Welcome to the Chatting Application</h1>
            <h2 className='text-2xl text-pink-500 truncate font-bold'>{user.getUsername()}</h2>
            </div>
            <ChangeUsername/>
        </div>
    </div>
  )
}

export default Header