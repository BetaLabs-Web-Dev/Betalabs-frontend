import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='p-[150px]'>
      <div className="flex flex-col items-center font-poppins text-[18px] text-[#01dede]">
        <form className='login-form flex flex-col gap-[50px] items-center'>
          <div className='flex flex-col w-[300px]'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' />
          </div>
          <div className='flex flex-col w-[300px]'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className='flex flex-col w-[300px]'>
            <label htmlFor="Phnno">Whatsapp No.</label>
            <input type="text" id="Phnno" />
          </div>
          <button type="submit" className='join-btn bg-[#01dede] text-black font-bold px-10 py-1 rounded-md'>Join</button>
        </form>
      </div>
    </div>
  )
}

export default Login;