import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', formData);
            alert('Login success');
            navigate('/login');
        } catch (error) {
            alert('Login failed');
            console.log(error);
        }
    }
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <form className='flex flex-col w-200' onSubmit={handleSubmit}>
            <h1 className='text-center font-bold text-5xl'>Register</h1>
            <label htmlFor="name">Name</label>
            <input required type="text" placeholder='Enter name' id='name' name='name' className='bg-white text-black p-1'/>
            <label htmlFor="email" className='mt-5'>Email address</label>
            <input required type="text" placeholder='Enter Email' id='email' name='email' className='bg-white text-black p-1'/>
            <label htmlFor="password" className='mt-5' >Password</label>
            <input required type="password" placeholder='Enter Password' id='password' name='password' className='bg-white text-black p-1'/>
            <button type='submit' className='cursor-pointer bg-blue-500 rounded-lg my-5 p-1'>Sign Up</button>
            <p>
                Already registered? <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
  )
}

export default RegisterPage