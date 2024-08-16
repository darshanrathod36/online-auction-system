import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from './GenderCheckBox';
import useSignup from '../../hooks/useSignup.js';

function SignUp() {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        gender: ''
    });
    const { loading, signup } = useSignup();

    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);

        // setInputs('')
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-zinc-900 bg-clip-padding backdrop-blur-lg backdrop-filter'>
                <div className='flex items-center justify-center space-x-2 text-3xl text-center text-gray-100 m-2'>
                    <img src="../../../public/favicon.ico" alt="logo" className='w-11' />
                    <h1>Online-Auction</h1>
                </div>

                <p className='mt-7 text-center font-thin text-gray-100'>
                    Create a new account
                </p>

                <form onSubmit={handleSubmit} className='mt-6'>
                    <div className='mb-4'>
                        <input
                            id='fullName'
                            type='text'
                            placeholder='Full Name'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            id='userName'
                            type='text'
                            placeholder='Email Address'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            id='phone'
                            type='text'
                            placeholder='Phone Number'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.phone}
                            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            id='address'
                            type='text'
                            placeholder='Address'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.address}
                            onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            id='password'
                            type='password'
                            placeholder='Password'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <input
                            id='confirmPassword'
                            type='password'
                            placeholder='Confirm Password'
                            className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckBox onChackboxChange={handleGenderChange} selectedGender={inputs.gender} />

                    <Link to={'/login'} className='text-sm font-medium text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            type='submit'
                            className='btn btn-block mt-4 p-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-500'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
