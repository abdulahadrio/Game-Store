
import { useState } from 'react';
import { FaSteam } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [identifier, setIdentifier] = useState(''); // Email or Phone
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        const usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
        const cleanInput = identifier.trim().toLowerCase();
        
       
        const foundUser = usersDb.find(u => {
            const matchEmail = u.email.toLowerCase() === cleanInput;
            const matchPhone = u.phone && u.phone.toLowerCase().includes(cleanInput);
            const matchRawPhone = u.rawPhone && u.rawPhone === cleanInput;
            
            return (matchEmail || matchPhone || matchRawPhone) && u.password === password;
        });
        
        if (foundUser) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentLoggedInEmail', foundUser.email); 
            localStorage.setItem('userName', foundUser.name);
            localStorage.setItem('userEmail', foundUser.email);
            localStorage.setItem('userPhone', foundUser.phone);
            localStorage.setItem('profilePic', foundUser.profilePic || '');
            
            const now = new Date();
            const dateStr = now.toLocaleDateString();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem('lastLogin', `${dateStr} at ${timeStr}`);

            navigate('/');
        } else {
            setError('Invalid email/phone or password!');
        }
    };

    return(
        <div className='w-full h-screen bg-[rgba(45,50,56,1)] flex items-center justify-center text-white px-4'>
           <div className='w-full max-w-[420px] flex flex-col items-center bg-[rgba(35,40,46,1)] border border-gray-700 p-8 rounded-xl shadow-xl'>
            
            <div className='text-center mb-6'>
                <h1 className='text-3xl font-bold tracking-wide mb-2'>
                    Welcome back
                </h1>
                <p className='text-gray-400 text-sm'>
                    Enter your credentials to access your account
                </p>
            </div>

            {error && (
                <div className='w-full bg-red-500/20 border border-red-500 text-red-300 text-xs p-2 rounded mb-4 text-center'>
                    {error}
                </div>
            )}

            <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            
                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs text-gray-300 font-medium' htmlFor="identifier">Email or Phone</label>
                    <input 
                        type="text" 
                        id="identifier" 
                        value={identifier} 
                        onChange={(e) => setIdentifier(e.target.value)} 
                        placeholder="Enter your email or phone"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-4 py-3 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs text-gray-300 font-medium' htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-4 py-3 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>
            
                <div className='flex justify-between items-center text-sm my-1'>
                    <label className='flex items-center gap-2 cursor-pointer select-none text-gray-300 text-xs'>
                        <input 
                            type="checkbox" 
                            checked={remember} 
                            onChange={(e) => setRemember(e.target.checked)}
                            className='w-4 h-4 accent-[rgba(255,105,22,1)] cursor-pointer rounded' 
                        />
                        <span>Remember</span>
                    </label>
                    <Link to="/Forgot" className='text-[rgba(255,105,22,1)] hover:underline text-xs font-medium'>
                        Forgot password?
                    </Link>
                </div>

                <button 
                    type="submit"
                    className='w-full bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer shadow-lg mt-2'
                >
                    Login
                </button>

                <div className='flex items-center my-4 text-gray-500'>
                    <div className='flex-grow border-t border-gray-700'></div>
                    <span className='px-4 text-xs uppercase tracking-wider text-gray-400'>Or</span>
                    <div className='flex-grow border-t border-gray-700'></div>
                </div>

                <div className='flex justify-center items-center gap-4 my-2'>
                    <div className='w-10 h-10 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-xl text-blue-400 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <FaSteam />
                    </div>
                    <div className='w-10 h-10 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-xl text-indigo-400 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <BsDiscord />
                    </div>
                    <div className='w-10 h-10 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-xl text-blue-600 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <FaFacebook />
                    </div>
                    <div className='w-10 h-10 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-xl text-red-600 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <IoLogoGoogle />
                    </div>
                </div>

                <div className='text-center text-xs text-gray-400 mt-4'>
                    Don't have an account? <Link to="/Signup" className='text-[rgba(255,105,22,1)] font-medium hover:underline ml-1'>Sign Up</Link>
                </div>

            </form>
         </div>
        </div>
    );
}