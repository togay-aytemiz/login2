import React from 'react'
import LoginForm from './LoginForm'
import Image from 'next/image'

const App = () => {
  return (
    <div className='flex flex-row mx-auto items-center gap-20 justify-between max-w-[1600px]'>
        <LoginForm />
        <Image src="/image_3.png" width={800} height={931} className='rounded-tl-[200px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[200px]'/>
    </div>
  )
}

export default App