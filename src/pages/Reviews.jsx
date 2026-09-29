import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


import sec8p1 from '../assets/section8.p1.png';
import sec8p2 from '../assets/section8p2.png';
import sec8p3 from '../assets/section8p3.png';

const reviewsData = [
    { id: 1, title: 'Cyber Quest Action', rating: 5, user: 'CyberGamer_X', comment: 'Absolute masterpiece! The gameplay mechanics and graphics are next-level.', pic: sec8p1 },
    { id: 2, title: 'Galaxy Odyssey', rating: 4, user: 'SpaceCadet99', comment: 'Incredible space exploration elements. Highly recommended for sci-fi fans.', pic: sec8p2 },
    { id: 3, title: 'Speed Storm 2', rating: 5, user: 'TurboRacer', comment: 'The best racing physics I have experienced in years. Super smooth!', pic: sec8p3 },
    { id: 4, title: 'Realm of Magic', rating: 4.5, user: 'WizardKing', comment: 'Spellcasting and open-world quests are extremely engaging.', pic: sec8p1 },
    { id: 5, title: 'Farm Life 3D', rating: 4, user: 'GreenThumb', comment: 'Very relaxing and immersive simulation game. Loved the graphics.', pic: sec8p2 },
    { id: 6, title: 'Shadow Blade', rating: 5, user: 'NinjaAssassins', comment: 'Fast-paced combat and stealth missions keep you on the edge of your seat.', pic: sec8p3 },
    { id: 7, title: 'Mystery Puzzle', rating: 4.5, user: 'SherlockHolmes', comment: 'Challenging puzzles that genuinely test your logic and problem-solving.', pic: sec8p1 },
    { id: 8, title: 'City Architect', rating: 4, user: 'UrbanPlanner', comment: 'Great depth in management and city building controls.', pic: sec8p2 },
    { id: 9, title: 'Apex Horizon', rating: 5, user: 'ApexPredator', comment: 'Stunning open roads and thrilling multiplayer events.', pic: sec8p3 },
    { id: 10, title: 'Titan Fallback', rating: 4.8, user: 'MechaPilot', comment: 'Epic mech battles and incredible sound design.', pic: sec8p1 }
];

export default function Reviews() {
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
                    <span className='text-white font-medium'>Customer Reviews</span>
                </div>

                <div className='w-[90%] lg:w-[85%] mx-auto'>
                    
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl mb-8'>
                        <h1 className='text-2xl font-extrabold text-[rgba(255,105,22,1)] mb-1'>Customer Feedback</h1>
                        <p className='text-xs text-gray-300'>Line-wise user reviews with profile pictures and ratings.</p>
                    </div>

                    {/* Line-wise Reviews List with Profile Pictures */}
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl space-y-6'>
                        {reviewsData.map((item, index) => (
                            <div 
                                key={item.id} 
                                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 ${
                                    index !== reviewsData.length - 1 ? 'border-b border-gray-800' : ''
                                }`}
                            >
                                <div className='flex items-center gap-4'>
                                    <img 
                                        src={item.pic} 
                                        alt={item.user} 
                                        className='w-12 h-12 rounded-full object-cover border-2 border-[rgba(255,105,22,1)] shrink-0 shadow-md' 
                                    />
                                    <div>
                                        <div className='flex items-center gap-3'>
                                            <h4 className='font-bold text-sm text-[rgba(255,105,22,1)]'>@{item.user}</h4>
                                            <span className='text-[10px] bg-gray-800 text-gray-300 px-2.5 py-0.5 rounded-full border border-gray-700'>{item.title}</span>
                                        </div>
                                        <p className='text-xs text-gray-300 mt-1 leading-relaxed'>{item.comment}</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-1 text-yellow-400 text-xs sm:self-center shrink-0'>
                                    {[...Array(Math.floor(item.rating))].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <span className='text-gray-400 ml-1 font-mono'>({item.rating})</span>
                                </div>
                            </div>
                        ))}
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