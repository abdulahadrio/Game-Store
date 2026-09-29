import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import nav2 from '../assets/nav2.avif';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import game1 from '../assets/game1.avif';
import game2 from '../assets/game2.avif';
import game3 from '../assets/game3.avif';
import game4 from '../assets/game4.avif';
import game5 from '../assets/game5.avif';
import game6 from '../assets/game6.avif';
import game7 from '../assets/game7.avif';
import game8 from '../assets/game8.avif';
import game9 from '../assets/game9.avif';
import game10 from '../assets/game10.avif';
import game11 from '../assets/game11.avif';
import game12 from '../assets/game12.avif';
import game13 from '../assets/game13.avif';
import game14 from '../assets/game14.avif';
import game15 from '../assets/game15.avif';
import game16 from '../assets/game16.avif';
import game17 from '../assets/game17.avif';
import game18 from '../assets/game18.avif';
import game19 from '../assets/game19.avif';
import game20 from '../assets/game20.avif';
import game21 from '../assets/game21.avif';
import game22 from '../assets/game22.avif';
import game23 from '../assets/game23.avif';
import game24 from '../assets/game24.avif';
import game25 from '../assets/game25.avif';
import game26 from '../assets/game26.avif';
import game27 from '../assets/game27.avif';
import game28 from '../assets/game28.avif';
import game29 from '../assets/game29.avif';
import game30 from '../assets/game30.avif';
import game31 from '../assets/game31.avif';
import game32 from '../assets/game32.avif';

import lastimg from '../assets/last.jpeg';

const gamesData = [
    { id: 1, title: 'Mafia 3', price: 59.99, rating: '95', stars: '★★★★★', image: game1, genre: 'action' },
    { id: 2, title: 'Totall war', price: 49.99, rating: '90', stars: '★★★★☆', image: game2, genre: 'strategy' },
    { id: 3, title: 'Football', price: 39.99, rating: '88', stars: '★★★★☆', image: game3, genre: 'simulation' },
    { id: 4, title: 'Endless', price: 19.99, rating: '85', stars: '★★★★☆', image: game4, genre: 'puzzle' },
    { id: 5, title: 'Endless s2', price: 29.99, rating: '92', stars: '★★★★★', image: game5, genre: 'puzzle' },
    { id: 6, title: 'Endless s3', price: 69.99, rating: '96', stars: '★★★★★', image: game6, genre: 'puzzle' },
    { id: 7, title: 'Endless s4', price: 15.99, rating: '80', stars: '★★★☆☆', image: game7, genre: 'puzzle' },
    { id: 8, title: 'Demons', price: 45.99, rating: '89', stars: '★★★★☆', image: game8, genre: 'action' },
    { id: 9, title: 'Endless s5', price: 25.99, rating: '82', stars: '★★★★☆', image: game9, genre: 'puzzle' },
    { id: 10, title: 'Humakind', price: 54.99, rating: '94', stars: '★★★★★', image: game10, genre: 'simulation' },
    { id: 11, title: 'BorderLand', price: 34.99, rating: '87', stars: '★★★★☆', image: game11, genre: 'action' },
    { id: 12, title: 'Totall war 2', price: 9.99, rating: '75', stars: '★★★☆☆', image: game12, genre: 'strategy' },
    { id: 13, title: 'Batman', price: 39.99, rating: '86', stars: '★★★★☆', image: game13, genre: 'action' },
    { id: 14, title: 'Two Points', price: 49.99, rating: '91', stars: '★★★★★', image: game14, genre: 'simulation' },
    { id: 15, title: 'Metro', price: 19.99, rating: '83', stars: '★★★★☆', image: game15, genre: 'action' },
    { id: 16, title: 'Thief', price: 59.99, rating: '93', stars: '★★★★★', image: game16, genre: 'adventure' },
    { id: 17, title: 'Fishing', price: 24.99, rating: '79', stars: '★★★☆☆', image: game17, genre: 'simulation' },
    { id: 18, title: 'Kind', price: 64.99, rating: '97', stars: '★★★★★', image: game18, genre: 'adventure' },
    { id: 19, title: 'Ometra', price: 44.99, rating: '88', stars: '★★★★☆', image: game19, genre: 'racing' },
    { id: 20, title: 'Blacksad', price: 29.99, rating: '84', stars: '★★★★☆', image: game20, genre: 'adventure' },
    { id: 21, title: 'Storm', price: 34.99, rating: '85', stars: '★★★★☆', image: game21, genre: 'racing' },
    { id: 22, title: 'Deadly', price: 49.99, rating: '90', stars: '★★★★★', image: game22, genre: 'action' },
    { id: 23, title: 'Company', price: 14.99, rating: '78', stars: '★★★☆☆', image: game23, genre: 'strategy' },
    { id: 24, title: 'Shogun', price: 69.99, rating: '98', stars: '★★★★★', image: game24, genre: 'strategy' },
    { id: 25, title: 'Speedway', price: 39.99, rating: '86', stars: '★★★★☆', image: game25, genre: 'racing' },
    { id: 26, title: 'Apex Rush', price: 19.99, rating: '81', stars: '★★★☆☆', image: game26, genre: 'racing' },
    { id: 27, title: 'Mind Maze', price: 12.99, rating: '89', stars: '★★★★☆', image: game27, genre: 'puzzle' },
    { id: 28, title: 'City Builder', price: 39.99, rating: '91', stars: '★★★★★', image: game28, genre: 'simulation' },
    { id: 29, title: 'Wild Trek', price: 49.99, rating: '87', stars: '★★★★☆', image: game29, genre: 'adventure' },
    { id: 30, title: 'Shadow Run', price: 54.99, rating: '92', stars: '★★★★★', image: game30, genre: 'adventure' },
    { id: 31, title: 'Nitro Drift', price: 29.99, rating: '84', stars: '★★★★☆', image: game31, genre: 'racing' },
    { id: 32, title: 'Apex Hunter', price: 59.99, rating: '94', stars: '★★★★★', image: game32, genre: 'action' },
];

export default function Pcgames() {
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
    
    const filteredGames = gamesData.filter(game => {
        if (game.price > priceVal) return false;

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

    const handleCardClick = (item) => {
        navigate('/ProductDetails', { state: { product: item, allGames: gamesData } });
    };

    const handleAddToCart = (item, e) => {
        e.stopPropagation();
        let existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex > -1) {
            existingCart[itemIndex].quantity += 1;
        } else {
            existingCart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(existingCart));
        navigate('/Cart'); 
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <section className='w-full pb-12'>
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]'> 
                            Home <IoIosArrowForward className='relative top-0.5'/> 
                        </button>
                    </Link>
                    <span className='text-gray-300 font-medium'>PC Games</span>
                </div>

                <div className='w-[95%] lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-6'>
                    <div className="w-full lg:w-[28%] bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-xl p-5 h-fit shadow-lg">
                        <div className='flex justify-between items-center mb-6 pb-3 border-b border-gray-700'>
                            <h2 className='text-xl font-bold'>Filters</h2>
                            <button 
                                onClick={handleClearAll}
                                className='border border-[rgba(255,105,22,1)] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[rgba(255,105,22,1)] transition-all cursor-pointer'  >
                                Clear All
                            </button>
                        </div>

                        <div className='mb-6'>
                            <div 
                                onClick={() => setIsGenreOpen(!isGenreOpen)}
                                className='flex justify-between items-center mb-3 cursor-pointer select-none' >
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
                                        { key: 'all', label: 'All Genres', count: `(${gamesData.length})` },
                                        { key: 'action', label: 'Action', count: '(7)' },
                                        { key: 'adventure', label: 'Adventure', count: '(5)' },
                                        { key: 'racing', label: 'Racing', count: '(5)' },
                                        { key: 'puzzle', label: 'Puzzle', count: '(6)' },
                                        { key: 'simulation', label: 'Simulation', count: '(5)' },
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

                        <div className='pt-4 border-t border-gray-700'>
                            <div 
                                onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className='flex justify-between items-center mb-3 cursor-pointer select-none'>
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
                                        className='w-full accent-[rgba(255,105,22,1)] cursor-pointer mb-4' />
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

                    <div className='w-full lg:w-[72%] flex flex-col'>
                        {currentItems.length === 0 ? (
                            <div className='bg-[rgba(35,40,46,1)] border border-white/10 rounded-lg p-12 text-center text-gray-400'>
                                No games found matching your active filters. Try adjusting your search parameters.
                            </div>
                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {currentItems.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => handleCardClick(item)}
                                        className='border border-white/20 bg-[rgba(35,40,46,1)] p-3 rounded-lg transition-transform duration-300 shadow-md flex flex-col justify-between hover:border-[rgba(255,105,22,1)] cursor-pointer' >
                                        <div>
                                            <div 
                                                style={{ backgroundImage: `url(${item.image})` }} 
                                                className='w-full h-[140px] sm:h-[160px] bg-cover bg-no-repeat bg-center rounded-md relative' />
                               
                                            <div className='h-fit mt-2'>
                                                <div className='font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden'>
                                                    <span className='truncate'>{item.title}</span>
                                                    <span className='text-[rgba(255,105,22,1)] flex text-[10px] shrink-0'> 
                                                        {item.stars} 
                                                    </span>
                                                </div>
                                
                                                <div className='flex items-center justify-between mt-1.5'>
                                                    <div className='flex items-center gap-1 overflow-hidden'>
                                                        <span className='text-white text-xs font-bold truncate'>${item.price}</span>
                                                    </div>
                                                    <div className='flex items-center shrink-0'>
                                                        <span className='text-[rgba(255,204,0,1)] text-xs ml-1'>{item.rating}/</span>
                                                        <span className='text-[10px] text-gray-400'>100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        <div className='flex justify-between gap-1 pt-3 mt-auto'>
                                            <button 
                                                onClick={(e) => handleAddToCart(item, e)}
                                                className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold transition-colors truncate px-1 cursor-pointer">
                                                Add to Cart
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const isLoggedIn = localStorage.getItem('isLoggedIn');
                                                    if (isLoggedIn === 'true') {
                                                        navigate('/BuyNow', { state: { name: item.title, price: item.price, image: item.image } });
                                                    } else {
                                                        if (window.confirm("Please login your account first to proceed with checkout!")) {
                                                            navigate('/SignIn');
                                                        }
                                                    }
                                                }}
                                                className='bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold hover:opacity-90 truncate px-1 cursor-pointer'>
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

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
                        <div className=' w-[25%] pt-10 max-[1024px]:w-[50%] '>
                            <ul className='text-white leading-8'>
                               <h1 className='font-bold text-[rgba(255,105,22,1)] text-[20px]'>Quick Links</h1>
                               <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/'>Home</Link></li>
                               <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/GiftCards'>Gift Cards </Link></li>
                               <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'> <Link to='/Deals'>Deals</Link></li>
                               <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Blog'>Blog</Link></li>
                            </ul>                       
                        </div>
                     
                        <div className=' w-[25%] pt-10 max-[1024px]:w-[50%]'>
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

            <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <h1 className='text-white text-sm'>
                    © 2026 EGameStore.com — All Rights <span className='underline cursor-pointer'>Terms of Service , Privacy Policy</span>
                </h1>
            </section>
        </div>
    );
}