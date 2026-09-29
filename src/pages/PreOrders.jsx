import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { BsController, BsShieldCheck, BsCalendarEvent } from 'react-icons/bs';
import { MdOutlineNewReleases, MdCheckCircle, MdOutlineGamepad } from 'react-icons/md';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function PreOrders() {
    const navigate = useNavigate();
    const [preOrders, setPreOrders] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const savedOrders = JSON.parse(localStorage.getItem('userPreOrders')) || [];
        setPreOrders(savedOrders);
    }, []);

    const handleRemoveOrder = (id, e) => {
        e.stopPropagation();
        const updated = preOrders.filter(item => item.id !== id);
        setPreOrders(updated);
        localStorage.setItem('userPreOrders', JSON.stringify(updated));
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <div className="w-full pb-16">
                
                {/* Breadcrumbs */}
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline text-gray-300'> 
                            Home <IoIosArrowForward className='relative top-0.5 ml-1'/> 
                        </button>
                    </Link>
                    <span className='text-white font-medium'>My Pre-Orders</span>
                </div>

                <div className='w-[90%] lg:w-[85%] mx-auto'>
                    <div className='flex items-center justify-between mb-8 pb-4 border-b border-gray-700'>
                        <div>
                            <h1 className='text-3xl font-extrabold text-[rgba(255,105,22,1)] flex items-center gap-3'>
                                <MdOutlineNewReleases className='text-4xl'/> Pre-Order Dashboard
                            </h1>
                            <p className='text-xs text-gray-400 mt-1'>Manage your upcoming game pre-orders and track official release status.</p>
                        </div>
                    </div>

                    {preOrders.length === 0 ? (
                        <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-16 text-center text-gray-400 shadow-xl'>
                            <MdOutlineGamepad className='mx-auto text-6xl text-gray-600 mb-4'/>
                            <p className='text-lg font-semibold text-white mb-2'>No Pre-Orders Registered Yet</p>
                            <p className='text-xs text-gray-400 mb-6'>Explore our upcoming games collection and secure your pre-order today!</p>
                            <Link to='/Upcoming'>
                                <button className='bg-[rgba(255,105,22,1)] hover:opacity-90 text-white px-8 py-3 rounded-xl text-xs font-bold cursor-pointer transition-all shadow-lg'>
                                    Browse Upcoming Games
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-6'>
                            {preOrders.map((item) => (
                                <div 
                                    key={item.id} 
                                    className='bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-2xl p-6 shadow-2xl flex flex-col lg:flex-row gap-6 relative overflow-hidden'
                                >
                                    {/* Decorative gradient glowing effect */}
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-[rgba(255,105,22,0.1)] rounded-full blur-2xl pointer-events-none'></div>

                                    {/* Game Image */}
                                    <div className='w-full lg:w-[28%] h-[220px] lg:h-auto rounded-xl bg-cover bg-center border border-gray-700 shrink-0 shadow-inner'
                                         style={{ backgroundImage: `url(${item.image})` }} 
                                    />

                                    {/* Game Details Info */}
                                    <div className='w-full lg:w-[72%] flex flex-col justify-between'>
                                        <div>
                                            <div className='flex flex-wrap justify-between items-start gap-4'>
                                                <div>
                                                    <span className='text-[10px] uppercase tracking-widest text-[rgba(255,105,22,1)] font-bold'>Verified Pre-Order</span>
                                                    <h2 className='text-2xl font-black text-white mt-0.5'>{item.title}</h2>
                                                </div>
                                                <div className='bg-green-900/40 border border-green-500/50 text-green-400 text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-md'>
                                                    <MdCheckCircle className='text-sm'/> Pre-Order Confirmed
                                                </div>
                                            </div>

                                            {/* Prominent Release Date Box */}
                                            <div className='mt-4 inline-flex items-center gap-3 bg-[rgba(45,50,56,1)] border border-[rgba(255,105,22,0.4)] px-4 py-2.5 rounded-xl shadow-md'>
                                                <BsCalendarEvent className='text-[rgba(255,105,22,1)] text-xl shrink-0'/>
                                                <div>
                                                    <span className='block text-[10px] uppercase font-bold text-gray-400'>Official Release Date</span>
                                                    <span className='text-sm font-extrabold text-white tracking-wide'>{item.date}</span>
                                                </div>
                                            </div>

                                            {/* Game Feature Details */}
                                            <div className='mt-4 bg-[rgba(45,50,56,1)] border border-gray-700 p-4 rounded-xl'>
                                                <h4 className='text-xs font-bold text-[rgba(255,105,22,1)] mb-1 uppercase tracking-wider flex items-center gap-1.5'>
                                                    <MdOutlineNewReleases className='text-sm'/> Exclusive Pre-Order Perks & Details
                                                </h4>
                                                <p className='text-xs text-gray-300 leading-relaxed'>
                                                    Your pre-order guarantees day-one digital key delivery, exclusive in-game cosmetic packs, early server access, and fully verified activation support straight to your account dashboard upon release.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Price & Action */}
                                        <div className='flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-700 gap-4'>
                                            <div className='flex items-baseline gap-2'>
                                                <span className='text-xs text-gray-400'>Total Price:</span>
                                                <span className='text-xl font-black text-[rgba(255,105,22,1)]'>{item.price || '50$'}</span>
                                            </div>

                                            <div className='flex items-center gap-4'>
                                                <span className='text-[11px] text-gray-400 flex items-center gap-1 bg-black/30 px-3 py-1 rounded-lg border border-gray-800'>
                                                    <BsShieldCheck className='text-green-400 text-sm'/> 100% Secure Guarantee
                                                </span>
                                                <button 
                                                    onClick={(e) => handleRemoveOrder(item.id, e)}
                                                    className='bg-red-600/90 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer shadow-lg transition-all'
                                                >
                                                    Cancel Pre-Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <section className='h-fit w-[100%] flex justify-center border-t-2 border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover mt-12'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <div className='h-fit w-[85%] flex justify-between max-[1024px]:flex-col py-6'>
                    <div className='h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-[100%]'>
                        <img src={nav2} alt="" className='w-50'/>
                        <p className='text-white text-justify cursor-pointer mt-3'>
                            Step into the future of gaming with eGame Store. Explore top-tier reviews, 
                            news, and in-depth analysis on the latest and greatest games.
                        </p>
                        <span className='flex text-[30px] gap-8 mt-4'>
                            <FaFacebookSquare className='text-blue-500'/> 
                            <FaInstagramSquare className='text-[rgba(221,42,123)]'/>
                            <FaSquareXTwitter className='text-white'/>
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