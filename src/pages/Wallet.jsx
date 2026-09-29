import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { BsGift, BsTruck, BsStar, BsController, BsCalendarCheck, BsPeople } from 'react-icons/bs';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Wallet() {
    // Total 10 transactions, jisme se random 3-4 show honge
    const allTransactions = [
        { date: 'Dec 28, 2024', action: 'Game Completed', points: '+150', notes: 'Space Shooter Level 5' },
        { date: 'Dec 27, 2024', action: 'Daily Login', points: '+25', notes: 'Daily reward claimed' },
        { date: 'Dec 26, 2024', action: 'Gift Card Redeemed', points: '-5,000', notes: 'Steam $50 Gift Card' },
        { date: 'Dec 25, 2024', action: 'Achievement Unlocked', points: '+1,000', notes: 'First Victory' },
        { date: 'Dec 24, 2024', action: 'Friend Referral', points: '+500', notes: 'Referred @player123' },
        { date: 'Dec 22, 2024', action: 'Game Completed', points: '+200', notes: 'Cyber Quest Mission 3' },
        { date: 'Dec 20, 2024', action: 'Daily Login', points: '+25', notes: 'Daily reward claimed' },
        { date: 'Dec 18, 2024', action: 'Store Discount Used', points: '-500', notes: 'Coupon Discount Applied' },
        { date: 'Dec 15, 2024', action: 'Game Completed', points: '+100', notes: 'Speed Storm 2 Win' },
        { date: 'Dec 12, 2024', action: 'Welcome Bonus', points: '+1,000', notes: 'Account Registration' },
    ];

    // Randomly select 4 transactions on load
    const [displayedTransactions] = useState(() => {
        const shuffled = [...allTransactions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    });

    const handleDummyClick = (actionName) => {
        alert(`${actionName} feature is currently for display only.`);
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
                    <span className='text-white font-medium'>Wallet</span>
                </div>

                <div className='w-[90%] lg:w-[85%] mx-auto space-y-8'>
                    
                    {/* Total Points Balance Section */}
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                        <h2 className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Total Points Balance</h2>
                        <div className='flex items-baseline gap-3'>
                            <span className='text-3xl sm:text-4xl font-extrabold text-white'>12,450</span>
                            <span className='text-xs sm:text-sm font-bold text-[rgba(255,105,22,1)]'>+1,250 points this week</span>
                        </div>
                    </div>

                    {/* How to Earn Points & How to Use Points Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        
                        {/* How to Earn Points */}
                        <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                            <h3 className='text-base font-bold text-white mb-4'>How to Earn Points</h3>
                            <div className='space-y-3'>
                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center gap-3'>
                                    <div className='w-9 h-9 rounded-lg bg-[rgba(255,105,22,0.1)] text-[rgba(255,105,22,1)] flex items-center justify-center text-lg shrink-0'>
                                        <BsController />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <h4 className='text-xs font-bold text-white'>Complete Games</h4>
                                        <p className='text-[11px] text-gray-400'>Earn 50-200 points per game</p>
                                    </div>
                                </div>

                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center gap-3'>
                                    <div className='w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg shrink-0'>
                                        <BsCalendarCheck />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <h4 className='text-xs font-bold text-white'>Daily Login</h4>
                                        <p className='text-[11px] text-gray-400'>Get 25 points daily</p>
                                    </div>
                                </div>

                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center gap-3'>
                                    <div className='w-9 h-9 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center text-lg shrink-0'>
                                        <BsPeople />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <h4 className='text-xs font-bold text-white'>Refer Friends</h4>
                                        <p className='text-[11px] text-gray-400'>Earn 500 points per referral</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How to Use Points */}
                        <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                            <h3 className='text-base font-bold text-white mb-4'>How to Use Points</h3>
                            <div className='space-y-3'>
                                
                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center justify-between gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-9 h-9 rounded-lg bg-[rgba(255,105,22,0.1)] text-[rgba(255,105,22,1)] flex items-center justify-center text-lg shrink-0'>
                                            <BsGift />
                                        </div>
                                        <div>
                                            <h4 className='text-xs font-bold text-white'>Discount Coupons</h4>
                                            <p className='text-[11px] text-gray-400'>Starting from 500 points</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleDummyClick('Redeem')}
                                        className='hover:opacity-90 text-[rgba(255,105,22,1)] font-bold px-4 py-1.5 rounded-lg text-[10px] cursor-pointer shrink-0'
                                    >
                                        Redeem
                                    </button>
                                </div>

                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center justify-between gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg shrink-0'>
                                            <BsTruck />
                                        </div>
                                        <div>
                                            <h4 className='text-xs font-bold text-white'>Free Shipping</h4>
                                            <p className='text-[11px] text-gray-400'>200 points per order</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleDummyClick('Redeem')}
                                        className=' hover:opacity-90 text-[rgba(255,105,22,1)] font-bold px-4 py-1.5 rounded-lg text-[10px] cursor-pointer shrink-0'
                                    >
                                        Redeem
                                    </button>
                                </div>

                                <div className='bg-[rgba(45,50,56,0.6)] border border-gray-700/60 p-3.5 rounded-xl flex items-center justify-between gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-9 h-9 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center text-lg shrink-0'>
                                            <BsStar />
                                        </div>
                                        <div>
                                            <h4 className='text-xs font-bold text-white'>Exclusive Products</h4>
                                            <p className='text-[11px] text-gray-400'>Premium items available</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleDummyClick('Browse')}
                                        className=' hover:opacity-90 text-[rgba(255,105,22,1)] font-bold px-4 py-1.5 rounded-lg text-[10px] cursor-pointer shrink-0'
                                    >
                                        Browse
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Transaction History Section */}
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                        <h3 className='text-base font-bold text-white mb-4'>Transaction History</h3>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-left text-xs text-gray-300'>
                                <thead className='border-b border-gray-700 text-gray-400 uppercase text-[10px]'>
                                    <tr>
                                        <th className='py-3 px-4'>Date</th>
                                        <th className='py-3 px-4'>Action</th>
                                        <th className='py-3 px-4'>Points</th>
                                        <th className='py-3 px-4'>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedTransactions.map((tx, index) => (
                                        <tr key={index} className='border-b border-gray-800 hover:bg-gray-800/40'>
                                            <td className='py-3.5 px-4 font-mono text-gray-400'>{tx.date}</td>
                                            <td className='py-3.5 px-4 font-semibold text-white'>{tx.action}</td>
                                            <td className={`py-3.5 px-4 font-mono font-bold ${tx.points.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                                {tx.points}
                                            </td>
                                            <td className='py-3.5 px-4 text-gray-400'>{tx.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

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