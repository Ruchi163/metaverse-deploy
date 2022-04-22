import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis';

function Login() {
    const { authenticate }=useMoralis();
  return (
    <div className='bg-black relative'>
         Login Screen
         <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4'>
         <Image className="object-cover rounded-full" src="https://links.papareact.com/3pi" height={200} width={200}/>
         <button
         onClick={()=>authenticate()}
          className="rounded-lg bg-yellow-500 p-5 animate-pulse font-bold">
              Login to METAVERSE</button>
         </div>
         <div className="w-full h-screen">
             <Image src="https://links.papareact.com/55n" layout="fill" objectFit='cover'/>
         </div>
    </div>
  )
}

export default Login