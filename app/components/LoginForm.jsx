import Image from 'next/image'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='max-w-[527px] flex flex-col ml-[128px] mt-[191px]'>
        <main className='text-[100px] font-[600]'>LOGIN</main>
        <div className='flex flex-col gap-5'>
            <input placeholder='Username' className=' p-3 border rounded-lg text-[20px]'/>
            <input placeholder='Password' className=' p-3 border rounded-lg text-[20px]'/>
            <button className='p-4 rounded-lg bg-black text-white w-[222px] text-[25px] mt-3'>LOGIN</button>
        </div>
        <div className='mt-10 flex gap-2 items-center'>
            <div className='h-[1px] bg-black w-full'></div>
            <p className='text-[25px] mx-2'>OR</p>
            <div className='h-[1px] bg-black w-full'></div>
        </div>
        <div className='flex gap-10 justify-center mt-10'>
            <Image src='/image_1.png' width={30} height={30} />
            <Image src='/image_2.png' width={30} height={30} />
        </div>

        <div>
            <p className='text-[25px] font-[600] opacity-[64%] mt-12'>Not yet registered , Click here to sign up</p>
        </div>
    </div>
  )
}

export default LoginForm