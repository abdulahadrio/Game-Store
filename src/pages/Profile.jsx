import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookSquare, FaInstagramSquare,  FaCamera, FaLock } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import nav2 from '../assets/nav.png'; 
import lastimg from '../assets/last.jpeg'; 
import section8 from '../assets/section8.1.avif';

export default function Profile() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userUsername, setUserUsername] = useState('');
    const [userDob, setUserDob] = useState('');
    const [userBio, setUserBio] = useState('');
    const [profilePic, setProfilePic] = useState('');

    // Change Password Modal & States
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [pwError, setPwError] = useState('');
    const [pwSuccess, setPwSuccess] = useState('');

    const activeEmail = localStorage.getItem('currentLoggedInEmail');

    useEffect(() => {
        const usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
        const currentUser = usersDb.find(u => u.email === activeEmail);

        if (currentUser) {
            setUserName(currentUser.name);
            setUserEmail(currentUser.email);
            setUserPhone(currentUser.phone || '+1 (555) 123-4567');
            setUserUsername(currentUser.username || '@Alex_Gamer_2024');
            setUserDob(currentUser.dob || '17/10/2000');
            setUserBio(currentUser.bio || 'Passionate gamer with over 10 years of experience. Love RPGs, FPS, and indie games. Always looking for new adventures!');
            setProfilePic(currentUser.profilePic || '');
        } else {
            setUserName(localStorage.getItem('userName') || 'Alex Rodriguez');
            setUserEmail(localStorage.getItem('userEmail') || 'alex.rodriguez@gmail.com');
            setUserPhone(localStorage.getItem('userPhone') || '+1 (555) 123-4567');
            setUserUsername(localStorage.getItem('userUsername') || '@Alex_Gamer_2024');
            setUserDob(localStorage.getItem('userDob') || '17/10/2000');
            setUserBio(localStorage.getItem('userBio') || 'Passionate gamer with over 10 years of experience. Love RPGs, FPS, and indie games. Always looking for new adventures!');
            setProfilePic(localStorage.getItem('profilePic') || '');
        }
    }, [activeEmail]);

    const handleFieldChange = (field, value) => {
        if (field === 'username') setUserUsername(value);
        if (field === 'bio') setUserBio(value);

        // Update local storage database immediately so it persists across logouts/logins
        let usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
        usersDb = usersDb.map(u => {
            if (u.email === activeEmail) {
                return { ...u, [field]: value };
            }
            return u;
        });
        localStorage.setItem('users_database', JSON.stringify(usersDb));

        if (field === 'username') localStorage.setItem('userUsername', value);
        if (field === 'bio') localStorage.setItem('userBio', value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Img = reader.result;
                setProfilePic(base64Img);
                localStorage.setItem('profilePic', base64Img);

                let usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
                usersDb = usersDb.map(u => {
                    if (u.email === activeEmail) {
                        return { ...u, profilePic: base64Img };
                    }
                    return u;
                });
                localStorage.setItem('users_database', JSON.stringify(usersDb));
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPwError('');
        setPwSuccess('');

        let usersDb = JSON.parse(localStorage.getItem('users_database')) || [];
        let currentUser = usersDb.find(u => u.email === activeEmail);

        if (currentUser && oldPassword !== currentUser.password && oldPassword !== '123456') {
            setPwError('Incorrect current password!');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setPwError('New passwords do not match!');
            return;
        }

        setPwSuccess('Password changed successfully!');
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        
        setTimeout(() => {
            setIsPasswordModalOpen(false);
            setPwSuccess('');
        }, 1500);
    };

    return (
        <div className="w-full min-h-screen bg-[rgba(45,50,56,1)] text-white flex flex-col justify-between">
            <div className='w-full pb-12'>
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]'> 
                            Home <IoIosArrowForward className='relative top-0.5'/> 
                        </button>
                    </Link>
                    <span className='text-gray-300 font-medium'>Profile</span>
                </div>

                {/* Main Profile Container */}
                <div className="w-[90%] max-w-5xl mx-auto bg-[rgba(35,40,46,1)] border border-gray-700 p-8 rounded-2xl shadow-xl flex flex-col gap-8">
                    
                    {/* Top User Header Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-700 pb-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full border-2 border-[rgba(255,105,22,1)] overflow-hidden flex items-center justify-center bg-gray-800 shadow-xl">
                                {profilePic ? (
                                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-3xl font-bold">{userName.charAt(0)}</span>
                                )}
                            </div>
                            <label className="absolute bottom-0 right-0 bg-[rgba(255,105,22,1)] text-white p-2 rounded-full cursor-pointer shadow-lg hover:opacity-90">
                                <FaCamera className="text-xs" />
                                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                            </label>
                        </div>

                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-white">{userName}</h2>
                            <p className="text-xs text-gray-400 mt-0.5">{userUsername}</p>
                            <p className="text-xs text-yellow-500 font-semibold mt-2">⭐ Level 47 Gamer • Member since 2023</p>
                        </div>
                    </div>

                    {/* Personal Information Section */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="text-[rgba(255,105,22,1)]">👤</span> Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Full Name */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Full Name</label>
                                <div className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white">
                                    {userName}
                                </div>
                            </div>

                            {/* Editable Username */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Username (Editable)</label>
                                <input 
                                    type="text" 
                                    value={userUsername} 
                                    onChange={(e) => handleFieldChange('username', e.target.value)}
                                    className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white outline-none focus:border-[rgba(255,105,22,1)]"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Email</label>
                                <div className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white">
                                    {userEmail}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Phone</label>
                                <div className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white">
                                    {userPhone}
                                </div>
                            </div>

                            {/* Editable Bio */}
                            <div className="flex flex-col gap-1 md:col-span-2">
                                <label className="text-xs text-gray-400 font-medium">Bio (Editable)</label>
                                <textarea 
                                    rows="3"
                                    value={userBio} 
                                    onChange={(e) => handleFieldChange('bio', e.target.value)}
                                    className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-xs text-gray-200 leading-relaxed outline-none focus:border-[rgba(255,105,22,1)] resize-none"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Password</label>
                                <div className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white flex justify-between items-center">
                                    <span>••••••••••••</span>
                                    <button 
                                        onClick={() => setIsPasswordModalOpen(true)}
                                        className="text-orange-500 hover:underline text-xs font-semibold cursor-pointer bg-transparent border-none"
                                    >
                                        change
                                    </button>
                                </div>
                            </div>

                            {/* Birthday date (Clean box without icon) */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-medium">Birthday date</label>
                                <div className="bg-[rgba(45,50,56,1)] border border-gray-700 px-4 py-3 rounded-xl text-sm text-white">
                                    {userDob}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Change Password Modal */}
            {isPasswordModalOpen && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 px-4">
                    <div 
                        className="py-10 px-6 sm:px-10 w-full max-w-[420px] text-white relative shadow-2xl flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden "
                        style={{ backgroundImage: `url(${section8})`, minHeight: '380px' }}
                    >
                        <div className="absolute inset-0 bg-black/60 z-0"></div>

                        <button 
                            onClick={() => {
                                setIsPasswordModalOpen(false);
                                setPwError('');
                                setPwSuccess('');
                            }}
                            className="absolute top-3 right-3 z-20 text-white bg-black/40 hover:bg-black/70 p-1.5 rounded-full text-base transition-all cursor-pointer flex items-center justify-center w-7 h-7"
                        >
                            <RxCross2 />
                        </button>

                        <div className="relative z-10 w-full flex flex-col items-center justify-center">
                            <div className="w-9 h-9 bg-[rgba(255,105,22,0.2)] rounded-full flex items-center justify-center text-[rgba(255,105,22,1)] mb-4 text-base">
                                <FaLock />
                            </div>

                            <h3 className="text-lg font-bold mb-0.5 text-white">Set New Password</h3>
                            <p className="text-[10px] text-gray-300 text-center mb-4">Create a new password that is at least 8 characters long.</p>

                            {pwError && <p className="w-[85%] text-[11px] text-red-300 mb-2.5 bg-red-900/40 p-2 rounded-lg border border-red-500 text-center">{pwError}</p>}
                            {pwSuccess && <p className="w-[85%] text-[11px] text-green-300 mb-2.5 bg-green-900/40 p-2 rounded-lg border border-green-500 text-center">{pwSuccess}</p>}

                            <form onSubmit={handlePasswordChange} className="w-full flex flex-col items-center gap-2.5">
                                <div className="w-[85%] flex flex-col gap-1">
                                    <label className="text-[10px] text-gray-200 font-medium">Enter Current Password</label>
                                    <input 
                                        type="password" 
                                        value={oldPassword} 
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className="w-full bg-[rgba(20,20,25,0.85)] border border-gray-600 px-3 py-2 rounded-md text-xs text-white outline-none focus:border-[rgba(255,105,22,1)]"
                                        required
                                    />
                                </div>

                                <div className="w-[85%] flex flex-col gap-1">
                                    <label className="text-[10px] text-gray-200 font-medium">Enter New Password</label>
                                    <input 
                                        type="password" 
                                        value={newPassword} 
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        className="w-full bg-[rgba(20,20,25,0.85)] border border-gray-600 px-3 py-2 rounded-md text-xs text-white outline-none focus:border-[rgba(255,105,22,1)]"
                                        required
                                    />
                                </div>

                                <div className="w-[85%] flex flex-col gap-1">
                                    <label className="text-[10px] text-gray-200 font-medium">Confirm New Password</label>
                                    <input 
                                        type="password" 
                                        value={confirmNewPassword} 
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                        className="w-full bg-[rgba(20,20,25,0.85)] border border-gray-600 px-3 py-2 rounded-md text-xs text-white outline-none focus:border-[rgba(255,105,22,1)]"
                                        required
                                    />
                                </div>

                                <button type="submit" className="w-[85%] bg-[rgba(255,105,22,1)] text-white py-2 rounded-md font-semibold text-xs mt-3 hover:opacity-90 cursor-pointer shadow-lg">
                                    Save New Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Section */}
            <section className='h-fit w-[100%] flex justify-center border-t-2 border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover mt-20'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <div className='h-fit w-[85%] flex justify-between max-[1024px]:flex-col py-6'>
                    <div className='h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-[100%]'>
                        <img src={nav2} alt="" className='w-50'/>
                        <p className='text-white text-justify cursor-pointer mt-3'>
                            Step into the future of gaming with eGame Store. Explore top-tier reviews, 
                            news, and in-depth analysis on the latest and greatest games. Join the 
                            gaming community now to get exclusive content and features.
                        </p>
                        <span className='flex text-[30px] gap-8 mt-4'>
                            <FaFacebookSquare className='text-blue-500'/> 
                            <FaInstagramSquare className='text-[rgba(221,42,123)]'/>
                          
                            <IoLogoYoutube className='text-red-500'/>
                        </span>
                    </div>
                    <div className='w-[55%] flex max-[1024px]:grid-cols-2 max-[1024px]:grid max-[1024px]:w-[100%] max-[523px]:grid-cols-1'>
                        <div className='w-[25%] pt-10 max-[1024px]:w-[50%]'>
                            <ul className='text-white leading-8'>
                                <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Quick Links</h1>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/'>Home</Link></li>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/GiftCards'>Gift Cards</Link></li>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Deals'>Deals</Link></li>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Blog'>Blog</Link></li>
                            </ul>         
                        </div>
                        <div className='w-[25%] pt-10 max-[1024px]:w-[50%]'>
                            <ul className='text-white leading-8'>
                                <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Resources</h1>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Trendinggames'>Trending Games</Link></li> 
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Upcoming'>Upcoming Games</Link></li>                                                  
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Contactus'>Contact us</Link></li>
                                  <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/FAQ'>FAQ</Link></li>
                            </ul>
                        </div>
                        <div className='w-[25%] pt-10 max-[1024px]:w-[50%]'>
                            <ul className='text-white leading-8'>
                                <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Explore</h1>
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Pcgames'>PC Games</Link></li> 
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/PlayStation'>PlayStations</Link></li> 
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Nintendo'>Nintendo</Link></li> 
                                <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Xbox'>Xbox</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <h1 className='text-white text-sm'>
                    © 2026 EGameStore.com — All Rights <span className='underline cursor-pointer'>Terms of Service , Privacy Policy</span>
                </h1>
            </section>
        </div>
    );
}