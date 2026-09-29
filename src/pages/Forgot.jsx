import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import forgot from '../assets/forgot.png';
import { MdLockOutline } from "react-icons/md";

export default function Forgot() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleForgotSubmit = (e) => {
        e.preventDefault();
        setError('');

        const usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
        const foundUser = usersDb.find(u => u.email.toLowerCase() === email.trim().toLowerCase());

        if (!foundUser) {
            setError('This email is not registered in our database!');
            return;
        }

      
        localStorage.setItem('resetEmail', foundUser.email);
        navigate('/otp-verification');
    };

    return(
        <div className='flex min-h-screen'>
            <div className='w-[50%] h-screen bg-no-repeat bg-center bg-cover bg-[rgba(45,50,56,1)] hidden lg:block'
                 style={{ backgroundImage: `url(${forgot})` }}>
            </div>

            <div className='bg-[rgba(45,50,56,1)] h-screen w-full lg:w-[50%] flex items-center justify-center px-6'>
                <div className='w-full max-w-[360px]'>
                    <div className='bg-white w-fit rounded-4xl p-2.5 shadow-md'>
                        <MdLockOutline className='text-[30px] text-[rgba(255,105,22,1)]' />
                    </div>
                    <h1 className='text-[28px] text-white font-bold pt-4'>
                        Forgot password?
                    </h1>
                    <h3 className='text-gray-400 text-xs mb-6'>
                        Enter your email to reset password!
                    </h3>

                    {error && (
                        <div className='w-full bg-red-500/20 border border-red-500 text-red-300 text-xs p-2 rounded mb-4 text-center'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleForgotSubmit} className='flex flex-col gap-3'>
                        <label htmlFor="email" className='text-white text-xs font-medium'>Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Your Email' 
                            className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                            required
                        />
                        <button type="submit" className='bg-[rgba(255,105,22,1)] hover:opacity-90 w-full text-white font-semibold py-2.5 rounded-lg mt-2 text-sm transition-all cursor-pointer shadow-md'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}