import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userName, password);
    }

    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900 bg-clip-padding backdrop-blur-lg backdrop-filter'>
                
                <div className='flex items-center justify-center space-x-2 text-3xl text-center text-gray-100 m-2'>
                    <img src="../../../public/favicon.ico" alt="logo" className='w-11' />
                    <h1>Online-Auction</h1>
                </div>

                <p className=' mt-7 text-center font-thin text-gray-100'>
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className='mt-6'>
                    <div className='mb-4'>
                        <label htmlFor='username' className='label pb-2 block text-sm font-medium text-gray-600'>
                            <span className=''>Email Address</span>
                        </label>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Enter email address'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='password' className='label pb-2 block text-sm font-medium text-gray-600'>
                            <span className=''>Password</span>
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to={'/signup'} className='text-sm font-medium text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block mt-4 p-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-500'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
