import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import forgot from '../assets/forgot.png';
import { MdOutlineEmail } from "react-icons/md";

export default function OtpVerification() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setError('');
        const enteredOtp = otp.join('');

        // Default OTP is "000000" as requested
        if (enteredOtp === '000000') {
            navigate('/reset-password');
        } else {
            setError('Invalid OTP! Please enter 000000');
        }
    };

    return (
        <div className='flex min-h-screen'>
            <div className='w-[50%] h-screen bg-no-repeat bg-center bg-cover bg-[rgba(45,50,56,1)] hidden lg:block'
                 style={{ backgroundImage: `url(${forgot})` }}>
            </div>

            <div className='bg-[rgba(45,50,56,1)] h-screen w-full lg:w-[50%] flex items-center justify-center px-6'>
                <div className='w-full max-w-[380px] flex flex-col items-center text-center'>
                    
                    <div className='bg-white w-fit rounded-full p-3 shadow-md mb-2'>
                        <MdOutlineEmail className='text-[28px] text-[rgba(255,105,22,1)]' />
                    </div>

                    <h1 className='text-[26px] text-white font-bold pt-2'>
                        OTP Verification
                    </h1>
                    <p className='text-gray-400 text-xs mb-6'>
                        Check your email to see the verification code <br/><span className='text-[rgba(255,105,22,1)] font-medium'>(Hint: Use 000000)</span>
                    </p>

                    {error && (
                        <div className='w-full bg-red-500/20 border border-red-500 text-red-300 text-xs p-2 rounded mb-4 text-center'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleVerify} className='w-full flex flex-col items-center'>
                        {/* 6 Circular OTP Inputs matching your reference image */}
                        <div className='flex justify-center gap-2.5 sm:gap-3 mb-6'>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type='text'
                                    maxLength='1'
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className='w-11 h-11 sm:w-12 sm:h-12 bg-[rgba(35,40,46,1)] border border-gray-600 text-white text-center text-lg font-bold rounded-full outline-none focus:border-[rgba(255,105,22,1)] shadow-inner transition-all'
                                />
                            ))}
                        </div>

                        <button 
                            type='submit'
                            className='bg-[rgba(255,105,22,1)] hover:opacity-90 w-full text-white font-semibold py-3 rounded-lg text-sm transition-all cursor-pointer shadow-lg mb-4'
                        >
                            Verify
                        </button>
                    </form>

                    <p className='text-gray-400 text-xs'>
                        Resend code in <span className='text-white font-medium'>00:59</span>
                    </p>
                </div>
            </div>
        </div>
    );
}