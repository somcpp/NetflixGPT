import React from 'react'
import Header from './Header'
import background from "../assets/background.png"
export const Login = () => {
  return (
    <div>
        <Header/>
        <img src={background} alt="" />
        <h1 className=' text-green-800 font-bold'>Login</h1>
    </div>
  )
}
