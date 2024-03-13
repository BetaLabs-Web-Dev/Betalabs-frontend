import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='p-[150px]'>
      <div className="flex flex-col items-center font-global text-[18px] text-[#01dede]">
        <form className='login-form flex flex-col gap-[50px] items-center' onSubmit={handleSubmit}>
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
          <button type="submit" className='join-btn font-inter text-[#01dede] text-[20px] font-semibold px-10 py-1 rounded-md'>Join</button>
        </form>
      </div>
    </div>
  )
}

export default Login;