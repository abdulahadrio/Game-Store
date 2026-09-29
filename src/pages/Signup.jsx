
import { useState } from 'react';
import { FaSteam } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('+92');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 14) {
                alert('You must be at least 14 years old to sign up.');
                return;
            }
        }

        if (!agreeTerms) {
            setError('You must agree to the Terms of Service.');
            return;
        }

        const cleanPhone = phone.trim();
        const fullPhoneWithCode = `${countryCode} ${cleanPhone}`.trim();

        const usersDb = JSON.parse(localStorage.getItem('users_database')) || [];

        const existingUser = usersDb.find(u => 
            u.email.toLowerCase() === email.toLowerCase() || 
            u.phone === fullPhoneWithCode || 
            u.rawPhone === cleanPhone
        );

        if (existingUser) {
            setError('An account with this email or phone already exists!');
            return;
        }

        const newUser = {
            name,
            phone: fullPhoneWithCode,
            rawPhone: cleanPhone,
            dob,
            email: email.toLowerCase(),
            password,
            profilePic: ''
        };

        usersDb.push(newUser);
        localStorage.setItem('users_database', JSON.stringify(usersDb));

        alert('Signup Successfully! Please login with your credentials.');
        navigate('/SignIn');
    };

    return (
        <div className='w-full min-h-screen bg-[rgba(45,50,56,1)] flex items-center justify-center text-white py-10 px-4'>
           <div className='w-full max-w-[440px] flex flex-col items-center bg-[rgba(35,40,46,1)] border border-gray-700 p-8 rounded-xl shadow-xl'>
            
            <div className='text-center mb-6'>
                <h1 className='text-3xl font-bold tracking-wide mb-2'>
                    Create Account
                </h1>
                <p className='text-gray-400 text-sm'>
                    Sign up to get started with eGame Store
                </p>
            </div>

            {error && (
                <div className='w-full bg-red-500/20 border border-red-500 text-red-300 text-xs p-2 rounded mb-4 text-center'>
                    {error}
                </div>
            )}

            <form onSubmit={handleSignUp} className="w-full flex flex-col gap-3.5">
                
                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Full Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Phone Number</label>
                    <div className='flex gap-2'>
                        <select 
                            value={countryCode} 
                            onChange={(e) => setCountryCode(e.target.value)}
                            className='bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-2 py-2.5 rounded-lg text-xs outline-none focus:border-[rgba(255,105,22,1)] cursor-pointer'
                        >
                            <option value="+92">PK (+92)</option>
                            <option value="+1">US (+1)</option>
                            <option value="+44">UK (+44)</option>
                            <option value="+91">IN (+91)</option>
                            <option value="+971">AE (+971)</option>
                        </select>
                        <input 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            placeholder="Phone number"
                            required
                            className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Date of Birth</label>
                    <input 
                        type="date" 
                        value={dob} 
                        onChange={(e) => setDob(e.target.value)} 
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Email Address</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Create a password"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xs text-gray-300 font-medium'>Confirm Password</label>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Re-enter password"
                        required
                        className='w-full bg-[rgba(45,50,56,1)] border border-gray-700 text-white px-3.5 py-2.5 rounded-lg text-sm outline-none focus:border-[rgba(255,105,22,1)] transition-colors' 
                    />
                </div>

                <div className='flex items-start gap-2 mt-1'>
                    <input 
                        type="checkbox" 
                        id="terms"
                        checked={agreeTerms} 
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className='mt-1 w-4 h-4 accent-[rgba(255,105,22,1)] cursor-pointer rounded' 
                    />
                    <label htmlFor="terms" className='text-xs text-gray-400 cursor-pointer select-none leading-tight'>
                        I agree to the <span className='text-[rgba(255,105,22,1)] hover:underline'>Terms of Service</span> and <span className='text-[rgba(255,105,22,1)] hover:underline'>Privacy Policy</span>
                    </label>
                </div>
            
                <button 
                    type="submit"
                    className='w-full bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer shadow-lg mt-2'
                >
                    Sign Up
                </button>

                <div className='flex items-center my-3 text-gray-500'>
                    <div className='flex-grow border-t border-gray-700'></div>
                    <span className='px-3 text-xs uppercase tracking-wider text-gray-400'>Or</span>
                    <div className='flex-grow border-t border-gray-700'></div>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    <div className='w-9 h-9 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-lg text-blue-400 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <FaSteam />
                    </div>
                    <div className='w-9 h-9 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-lg text-indigo-400 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <BsDiscord />
                    </div>
                    <div className='w-9 h-9 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-lg text-blue-600 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <FaFacebook />
                    </div>
                    <div className='w-9 h-9 rounded-full bg-[rgba(45,50,56,1)] border border-gray-700 flex items-center justify-center text-lg text-red-600 hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all'>
                        <IoLogoGoogle />
                    </div>
                </div>

                <div className='text-center text-xs text-gray-400 mt-3'>
                    Already have an account? <Link to="/SignIn" className='text-[rgba(255,105,22,1)] font-medium hover:underline ml-1'>Sign In</Link>
                </div>

            </form>
         </div>
        </div>
    );
}