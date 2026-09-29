import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { FaLongArrowAltRight } from 'react-icons/fa';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

// Upcoming images imports
import upcoming1 from '../assets/upcoming1.png';
import upcoming2 from '../assets/upcoming2.png';
import upcoming3 from '../assets/upcoming3.png';
import upcoming4 from '../assets/upcoming4.png';
import upcoming5 from '../assets/upcoming5.png';
import upcoming6 from '../assets/upcoming6.avif';
import upcoming7 from '../assets/upcoming7.avif';
import upcoming8 from '../assets/upcoming8.avif';
import upcoming9 from '../assets/upcoming9.avif';
import upcoming10 from '../assets/upcoming10.avif';

const upcomingData = [
    { id: 1, image: upcoming1, title: 'Cyber Quest', date: 'Oct 15, 2026', price: '60$', genre: 'action' },
    { id: 2, image: upcoming2, title: 'Galaxy Odyssey', date: 'Nov 02, 2026', price: '70$', genre: 'adventure' },
    { id: 3, image: upcoming3, title: 'Speed Storm 2', date: 'Dec 10, 2026', price: '50$', genre: 'racing' },
    { id: 4, image: upcoming4, title: 'Realm of Magic', date: 'Jan 20, 2027', price: '65$', genre: 'adventure' },
    { id: 5, image: upcoming5, title: 'Farm Life 3D', date: 'Feb 14, 2027', price: '40$', genre: 'simulation' },
    { id: 6, image: upcoming6, title: 'Shadow Blade', date: 'Mar 05, 2027', price: '55$', genre: 'action' },
    { id: 7, image: upcoming7, title: 'Mystery Puzzle', date: 'Apr 12, 2027', price: '30$', genre: 'puzzle' },
    { id: 8, image: upcoming8, title: 'City Architect', date: 'May 22, 2027', price: '45$', genre: 'simulation' },
    { id: 9, image: upcoming9, title: 'Apex Horizon', date: 'Jun 30, 2027', price: '60$', genre: 'racing' },
    { id: 10, image: upcoming10, title: 'Titan Fallback', date: 'Jul 19, 2027', price: '70$', genre: 'action' },
];

export default function Upcoming() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const [isGenreOpen, setIsGenreOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);

    const [genres, setGenres] = useState({
        all: true,
        action: false,
        adventure: false,
        racing: false,
        puzzle: false,
        simulation: false,
    });
    
    const [priceVal, setPriceVal] = useState(100);

    const handleClearAll = () => {
        setGenres({
            all: true,
            action: false,
            adventure: false,
            racing: false,
            puzzle: false,
            simulation: false,
        });
        setPriceVal(100);
        setCurrentPage(1);
    };

    const handleCheckboxChange = (key) => {
        setCurrentPage(1);
        if (key === 'all') {
            setGenres({
                all: true,
                action: false,
                adventure: false,
                racing: false,
                puzzle: false,
                simulation: false,
            });
        } else {
            setGenres(prev => ({
                ...prev,
                all: false,
                [key]: !prev[key]
            }));
        }
    };

    const handleCardClick = (item) => {
        navigate('/PreOrders');
    };

    const handlePreOrder = (item, e) => {
        e.stopPropagation();
        let existingOrders = JSON.parse(localStorage.getItem('userPreOrders')) || [];
        const exists = existingOrders.some((order) => order.id === item.id);

        if (!exists) {
            existingOrders.push({ ...item, price: item.price || '50$' });
            localStorage.setItem('userPreOrders', JSON.stringify(existingOrders));
        }
        navigate('/PreOrders');
    };

    // Filter Logic
    const filteredGames = upcomingData.filter(game => {
        const numericPrice = parseFloat(game.price.replace('$', '')) || 0;
        if (numericPrice > priceVal) return false;

        if (genres.all) return true;
        
        const activeGenres = Object.keys(genres).filter(k => k !== 'all' && genres[k]);
        if (activeGenres.length === 0) return true;

        return activeGenres.includes(game.genre);
    });

    const totalPages = Math.ceil(filteredGames.length / itemsPerPage) || 1;
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    const currentItems = filteredGames.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (safeCurrentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (safeCurrentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <section className='w-full pb-12'>
                
                {/* Breadcrumbs matching Home > Upcoming games */}
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]'> 
                            Home <IoIosArrowForward className='relative top-0.5'/> 
                        </button>
                    </Link>
                    <span className='text-gray-300 font-medium'>Upcoming games</span>
                </div>

                <div className='w-[95%] lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-6'>
                    
                    {/* Left Sidebar Filter */}
                    <div className="w-full lg:w-[28%] bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-xl p-5 h-fit shadow-lg">
                        <div className='flex justify-between items-center mb-6 pb-3 border-b border-gray-700'>
                            <h2 className='text-xl font-bold'>Filters</h2>
                            <button 
                                onClick={handleClearAll}
                                className='border border-[rgba(255,105,22,1)] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[rgba(255,105,22,1)] transition-all cursor-pointer'
                            >
                                Clear All
                            </button>
                        </div>

                        {/* Genre Section */}
                        <div className='mb-6'>
                            <div 
                                onClick={() => setIsGenreOpen(!isGenreOpen)}
                                className='flex justify-between items-center mb-3 cursor-pointer select-none'
                            >
                                <span className='font-semibold text-base'>Genre</span>
                                {isGenreOpen ? (
                                    <IoIosArrowUp className='text-[rgba(255,105,22,1)] text-lg' />
                                ) : (
                                    <IoIosArrowDown className='text-[rgba(255,105,22,1)] text-lg' />
                                )}
                            </div>

                            {isGenreOpen && (
                                <div className='flex flex-col gap-2.5 text-sm transition-all'>
                                    {[
                                        { key: 'all', label: 'All Genre', count: `(${upcomingData.length})` },
                                        { key: 'action', label: 'Action', count: '(3)' },
                                        { key: 'adventure', label: 'Adventure', count: '(2)' },
                                        { key: 'racing', label: 'Racing', count: '(2)' },
                                        { key: 'puzzle', label: 'Puzzle', count: '(1)' },
                                        { key: 'simulation', label: 'Simulation', count: '(2)' },
                                    ].map((item) => (
                                        <label key={item.key} className='flex justify-between items-center cursor-pointer hover:text-[rgba(255,105,22,1)]'>
                                            <div className='flex items-center gap-2'>
                                                <input 
                                                    type='checkbox' 
                                                    checked={genres[item.key]} 
                                                    onChange={() => handleCheckboxChange(item.key)}
                                                    className='accent-[rgba(255,105,22,1)] w-4 h-4 cursor-pointer'
                                                />
                                                <span>{item.label}</span>
                                            </div>
                                            <span className='text-gray-400 text-xs'>{item.count}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Price Range Section */}
                        <div className='pt-4 border-t border-gray-700'>
                            <div 
                                onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className='flex justify-between items-center mb-3 cursor-pointer select-none'
                            >
                                <span className='font-semibold text-base'>Price</span>
                                {isPriceOpen ? (
                                    <IoIosArrowUp className='text-[rgba(255,105,22,1)] text-lg' />
                                ) : (
                                    <IoIosArrowDown className='text-[rgba(255,105,22,1)] text-lg' />
                                )}
                            </div>

                            {isPriceOpen && (
                                <div className='transition-all'>
                                    <input 
                                        type='range' 
                                        min='0' 
                                        max='100' 
                                        value={priceVal}
                                        onChange={(e) => {
                                            setPriceVal(Number(e.target.value));
                                            setCurrentPage(1);
                                        }}
                                        className='w-full accent-[rgba(255,105,22,1)] cursor-pointer mb-4' 
                                    />
                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono'>
                                            $0
                                        </div>
                                        <span className='text-gray-400'>-</span>
                                        <div className='bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono'>
                                            ${priceVal}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Cards Grid */}
                    <div className='w-full lg:w-[72%] flex flex-col'>
                        {currentItems.length === 0 ? (
                            <div className='bg-[rgba(35,40,46,1)] border border-white/10 rounded-lg p-12 text-center text-gray-400'>
                                No upcoming games found matching your active filter criteria.
                            </div>
                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {currentItems.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => handleCardClick(item)}
                                        className='border border-[rgba(255,105,22,1)] bg-[rgba(35,40,46,1)] p-4 rounded-lg transition-transform duration-300 shadow-md flex flex-col justify-between cursor-pointer' 
                                    >
                                        <div>
                                            <div 
                                                style={{ backgroundImage: `url(${item.image})` }} 
                                                className='w-full h-[140px] sm:h-[160px] bg-cover bg-no-repeat bg-center rounded-md relative' 
                                            />
                                            
                                            <div className='h-fit mt-2'>
                                                <div className='font-medium text-white text-sm flex justify-between items-center'>
                                                    <span className='truncate'>{item.title}</span>
                                                </div>
                                                <div className='flex items-center justify-between mt-1'>
                                                    <div className='flex items-center gap-1'>
                                                        <del className='text-[11px] text-gray-500'>60$</del> 
                                                        <span className='text-white text-xs font-bold'>{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                          
                                        <div className='flex justify-between items-center gap-1 pt-3 mt-auto'>
                                            <h1 className='text-white h-7 w-[48%] gap-0.5 rounded-md text-[9.5px] max-[1000px]:text-[8.5px] font-semibold flex items-center overflow-hidden'>
                                                <SlCalender className='shrink-0'/> 
                                                <span className='truncate'>{item.date}</span>
                                            </h1>
                                            <button 
                                                onClick={(e) => handlePreOrder(item, e)}
                                                className='text-white h-7 w-[48%] gap-0.5 rounded-md text-[9.5px] max-[1000px]:text-[8.5px] font-semibold flex items-center justify-center shrink-0 cursor-pointer hover:text-[rgba(255,105,22,1)]'
                                            >
                                                Pre-Order <FaLongArrowAltRight className='text-[rgba(255,105,22,1)] relative top-[1px] text-[15px]'/>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className='flex items-center justify-between px-6 mt-8 py-3 bg-[rgba(35,40,46,1)] rounded-lg border border-white/10'>
                                <button 
                                    onClick={handlePrev} 
                                    disabled={safeCurrentPage === 1}
                                    className={`px-4 py-1.5 rounded-md text-sm font-semibold text-white transition-all ${
                                        safeCurrentPage === 1 
                                            ? 'bg-gray-700 opacity-40 cursor-not-allowed' 
                                            : 'bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer'
                                    }`}
                                >
                                    Previous
                                </button>

                                <div className='flex items-center gap-1.5'>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                                                safeCurrentPage === index + 1 
                                                    ? 'bg-[rgba(255,105,22,1)] text-white font-bold shadow' 
                                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button 
                                    onClick={handleNext} 
                                    disabled={safeCurrentPage === totalPages}
                                    className={`px-4 py-1.5 rounded-md text-sm font-semibold text-white transition-all ${
                                        safeCurrentPage === totalPages 
                                            ? 'bg-gray-700 opacity-40 cursor-not-allowed' 
                                            : 'bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer'
                                    }`}
                                >
                                    Next
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className='h-fit w-[100%] flex justify-center border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <div className='h-fit w-[85%] flex justify-between max-[1024px]:flex-col py-6'>
                    <div className='h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-[100%]'>
                        <img src={nav2} alt="" className='w-50'/>
                        <p className='text-white text-justify cursor-pointer' >
                            Step into the future of gaming with eGame Store. Explore top-tier reviews, 
                            news, and in-depth analysis on the latest and greatest games. Join the 
                            gaming community now to get exclusive content and features.
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
                                          <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/'>Home</Link></li>
                                          <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/GiftCards'>Gift Cards </Link></li>
                                          <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/Deals'>Deals</Link></li>
                                          <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Blog'>Blog</Link></li>
                                        </ul>
                                  </div>
                      
                                  <div className=' w-[25%] pt-10 max-[1024px]:w-[50%]' >
                                    <ul className='text-white leading-8'>
                                      <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Resources</h1>
                                    <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/Trendinggames'> Trending Games</Link></li> 
                                    <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Upcoming'>Upcoming Games</Link></li>
                                     <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Contactus'>Contact us</Link></li>
                                       <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/FAQ'>FAQ</Link></li>
                                    </ul>
                                  </div>
                      
                                  <div className=' w-[25%] pt-10 max-[1024px]:w-[50%]'>
                                    <ul className='text-white leading-8'>
                                      <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Explore</h1>
                                     <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/Pcgames'>PC Games</Link></li> 
                                     <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/PlayStation'> PlayStations </Link></li> 
                                      <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Nintendo'>Nintendo </Link></li> 
                                      <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/Xbox'>Xbox </Link> </li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright Section */}
            <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <h1 className='text-white text-sm'>
                    © 2026 EGameStore.com — All Rights <span className='underline cursor-pointer'>Terms of Service , Privacy Policy</span>
                </h1>
            </section>
        </div>
    );
}