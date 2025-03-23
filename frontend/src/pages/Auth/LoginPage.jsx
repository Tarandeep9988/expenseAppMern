import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', formData);
            alert('Login success');
            navigate('/');
        } catch (error) {
            console.log(error);
            alert('Login failed');
        }
    }
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <form onSubmit={handleSubmit} className='flex flex-col w-200'>
            <h1 className='text-center font-bold text-5xl'>Login</h1>
            <label htmlFor="email">Email address</label>
            <input type="text" placeholder='Enter Email' id='email' name='email' className='bg-white text-black p-1'/>
            <label htmlFor="password" className='mt-5' >Password</label>
            <input type="password" placeholder='Enter Password' id='password' name='password' className='bg-white text-black p-1'/>
            <Link to="/forgot-password" className='text-center m-5'>Forgot Password?</Link>
            <button type='submit' className='cursor-pointer bg-blue-500 rounded-lg my-5 p-1'>Login</button>
            <p>
                Don't Have an Account? <Link to="/register">Register</Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage