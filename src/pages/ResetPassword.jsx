import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import forgot from '../assets/forgot.png';
import { FaLock } from "react-icons/fa";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match!');
            return;
        }

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long!');
            return;
        }

        const resetEmail = localStorage.getItem('resetEmail');
        let usersDb = JSON.parse(localStorage.getItem('users_database')) || [];

        // Update password in database
        usersDb = usersDb.map(u => {
            if (u.email.toLowerCase() === resetEmail?.toLowerCase()) {
                return { ...u, password: newPassword };
            }
            return u;
        });

        localStorage.setItem('users_database', JSON.stringify(usersDb));
        localStorage.removeItem('resetEmail');

        alert('Password updated successfully! Please login with your new password.');
        navigate('/SignIn');
    };

    return (
        <div className='flex min-h-screen'>
            <div className='w-[50%] h-screen bg-no-repeat bg-center bg-cover bg-[rgba(45,50,56,1)] hidden lg:block'
                 style={{ backgroundImage: `url(${forgot})` }}>
            </div>

            <div className='bg-[rgba(45,50,56,1)] h-screen w-full lg:w-[50%] flex items-center justify-center px-6'>
                <div className='w-full max-w-[380px]'>
                    <div className='bg-white w-fit rounded-full p-3 shadow-md mb-2'>
                        <FaLock className='text-[24px] text-[rgba(255,105,22,1)]' />
                    </div>

                    <h1 className='text-[26px] text-white font-bold pt-2'>
                        Set New Password
                    </h1>
                    <p className='text-gray-400 text-xs mb-6'>
                        Enter your new password below.
                    </p>

                    {error && (
                        <div className='w-full bg-red-500/20 border border-red-500 text-red-300 text-xs p-2 rounded mb-4 text-center'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handlePasswordReset} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-xs text-white font-medium'>New Password</label>
                            <input 
                                type="password" 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder='Enter new password'
                                className='w-full bg-[rgba(35,40,46,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)]'
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-xs text-white font-medium'>Confirm New Password</label>
                            <input 
                                type="password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Confirm new password'
                                className='w-full bg-[rgba(35,40,46,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)]'
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className='bg-[rgba(255,105,22,1)] hover:opacity-90 w-full text-white font-semibold py-3 rounded-lg mt-2 text-sm transition-all cursor-pointer shadow-lg'
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}