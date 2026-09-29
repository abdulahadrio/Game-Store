
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import card1 from '../assets/game23.avif';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/nin6.jpg';
import card5 from '../assets/game10.avif';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';
import card9 from '../assets/card9.avif';
import card10 from '../assets/card10.avif';
import card11 from '../assets/card11.avif';
import card12 from '../assets/card12.avif';
import card13 from '../assets/card13.avif';
import card14 from '../assets/card14.avif';
import card15 from '../assets/card15.avif';
import card16 from '../assets/card16.avif';
import card17 from '../assets/card17.avif';
import card18 from '../assets/card18.avif';
import card19 from '../assets/card19.avif';
import card20 from '../assets/card20.avif';

const cardsData = [
    { id: 1, image: card1, title: 'Fortnite', discount:'15%', stars: '★★★★☆', rating:'81', discounte:'60$', price:'51$', genre: 'action' },
    { id: 2, image: card2, title: 'Cyberpunk', discount:'soon', stars: '★★★☆☆', rating:'60' , discounte:'70$', price:'70$', genre: 'action' },
    { id: 3, image: card3, title: 'Elden Ring', discount:'5%' , stars: '★★★★☆', rating:'81', discounte:'100$', price:'95$', genre: 'adventure' },
    { id: 4, image: card4, title: 'FIFA 24', discount:'soon' , stars: '★★★★☆', rating:'81', discounte:'100$', price:'100$', genre: 'racing' },
    { id: 5, image: card5, title: 'HumanKind', discount:'30%' , stars: '★★★☆☆', rating:'40', discounte:'100$', price:'70$', genre: 'simulation' },
    { id: 6, image: card6, title: 'Valorant', discount:'15%', stars: '★★★★☆', rating:'81', discounte:'63$', price:'52$', genre: 'action' },
    { id: 7, image: card7, title: 'Call of Duty', discount:'soon', stars: '★★★★☆', rating:'81' , discounte:'90$', price:'90$', genre: 'action' },
    { id: 8, image: card8, title: 'GTA V', discount:'5%', stars: '★★★★☆', rating:'81', discounte:'85$', price:'81$', genre: 'action' },
    { id: 9, image: card9, title: 'The Crew' , discount:'ended', stars: '★★★☆☆', rating:'62', discounte: null, price:'95$', genre: 'racing' },
    { id: 10, image: card10, title: 'Chef Life', discount:'ended' , stars: '★☆☆☆☆', rating:'16', discounte: null, price:'105$', genre: 'simulation' },
    { id: 11, image: card11, title: 'Garden Life', discount:'15%', stars: '★★★★★', rating:'100', discounte:'68$', price:'53$', genre: 'simulation' },
    { id: 12, image: card12, title: 'Tenis World', discount:'15%', stars: '★★★★☆', rating:'80', discounte:'60$', price:'51$', genre: 'simulation' },
    { id: 13, image: card13, title: 'TT 3', discount:'8%', stars: '★★★☆☆', rating:'67', discounte:'98$', price:'91$', genre: 'racing' },
    { id: 14, image: card14, title: 'Chronobyl', discount:'soon', stars: '★★★★☆', rating:'78', discounte:'70$', price:'70$', genre: 'adventure' },
    { id: 15, image: card15, title: 'Sucide', discount:'15%', stars: '★★★★☆', rating:'81' , discounte:'76$', price:'64$', genre: 'action' },
    { id: 16, image: card16, title: 'SuperMarket' , discount:'15%', stars: '★★★☆☆', rating:'61', discounte:'120$', price:'108$', genre: 'simulation' },
    { id: 17, image: card17, title: 'The Dice', discount:'15%' , stars: '★★★☆☆', rating:'59', discounte:'60$', price:'51$', genre: 'puzzle' },
    { id: 18, image: card18, title: 'Dying Light', discount:'ended', stars: '★★☆☆☆', rating:'31', discounte: null, price:'100$', genre: 'adventure' },
    { id: 19, image: card19, title: 'Lunacid', discount:'15%', stars: '★★★★☆', rating:'87', discounte:'55$', price:'42$', genre: 'adventure' },
    { id: 20, image: card20, title: 'Forgotten Sea', discount:'12%', stars: '★★★☆☆', rating:'76', discounte:'92$', price:'83$', genre: 'adventure' },
];

export default function Trendinggames() {
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
    
    const [priceVal, setPriceVal] = useState(150);
    const navigate = useNavigate(); 

    const handleClearAll = () => {
        setGenres({
            all: true,
            action: false,
            adventure: false,
            racing: false,
            puzzle: false,
            simulation: false,
        });
        setPriceVal(150);
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
    
    const filteredGames = cardsData.filter(game => {
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

    const handleCardClick = (item) => {
        const formattedProduct = {
            ...item,
            price: parseFloat(item.price.replace('$', '')) || 0
        };
        navigate('/ProductDetails', { state: { product: formattedProduct, allGames: cardsData } });
    };

    const handleAddToCart = (item, e) => {
        e.stopPropagation();
        let existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex > -1) {
          existingCart[itemIndex].quantity += 1;
        } else {
          existingCart.push({ ...item, price: parseFloat(item.price.replace('$', '')) || 0, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(existingCart));
        navigate('/Cart'); 
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <section className='w-full pb-12'>
                
                {/* Breadcrumbs */}
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]'> 
                            Home <IoIosArrowForward className='relative top-0.5'/> 
                        </button>
                    </Link>
                    <span className='text-gray-300 font-medium'>Trending Games</span>
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
                                        { key: 'all', label: 'All Genre', count: `(${cardsData.length})` },
                                        { key: 'action', label: 'Action', count: '(5)' },
                                        { key: 'adventure', label: 'Adventure', count: '(5)' },
                                        { key: 'racing', label: 'Racing', count: '(3)' },
                                        { key: 'puzzle', label: 'Puzzle', count: '(1)' },
                                        { key: 'simulation', label: 'Simulation', count: '(6)' },
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
                                className='flex justify-between items-center mb-3 cursor-pointer select-none'  >
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
                                        max='150' 
                                        value={priceVal}
                                        onChange={(e) => {
                                            setPriceVal(Number(e.target.value));
                                            setCurrentPage(1);
                                        }}
                                        className='w-full accent-[rgba(255,105,22,1)] cursor-pointer mb-4'  />
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
                                No trending games found matching your active filter criteria.
                            </div>
                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {currentItems.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => handleCardClick(item)}
                                        className='bg-[rgba(35,40,46,1)] p-3.5 sm:p-4 rounded-lg transition-transform duration-300 shadow-md flex flex-col justify-between hover:border-[rgba(255,105,22,1)] border border-transparent cursor-pointer'   >
                                        <div>
                                            <div 
                                                style={{ backgroundImage: `url(${item.image})` }} 
                                                className='w-full h-[140px] sm:h-[160px] bg-cover bg-no-repeat bg-center rounded-md relative'     >
                                                <button className='absolute top-2 left-2 bg-[rgba(255,105,22,1)] text-white w-9 h-5 rounded-[5px] text-[10px] font-bold'>
                                                    {item.discount}
                                                </button>
                                            </div>

                                            <div className='h-fit mt-2'>
                                                <div className='font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden'>
                                                    <span className='truncate'>{item.title}</span>
                                                    <span className='text-[rgba(255,105,22,1)] flex text-[10px] shrink-0'> 
                                                        {item.stars} 
                                                    </span>
                                                </div>

                                                <div className='flex items-center justify-between mt-1.5'>
                                                    <div className='flex items-center gap-1 overflow-hidden'>
                                                        {item.discounte ? (
                                                            <del className='text-[11px] text-gray-500 truncate'>{item.discounte}</del>
                                                        ) : (
                                                            <span className='text-[11px] text-transparent select-none'>-</span>
                                                        )}
                                                        <span className='text-white text-xs font-bold truncate'>{item.price}</span>
                                                    </div>
                                                    <div className='flex items-center shrink-0'>
                                                        <GiConsoleController className='text-[15px] text-[rgba(255,105,22,1)]' /> 
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
                                                        navigate('/BuyNow', { state: { name: item.title, price: parseFloat(item.price.replace('$', '')) || 0, image: item.image } });
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
                                    }`} >
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
                                            }`}    >
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
                                    }`} >
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

            <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${lastimg})` }}>
                <h1 className='text-white text-sm'>
                    © 2026 EGameStore.com — All Rights <span className='underline cursor-pointer'>Terms of Service , Privacy Policy</span>
                </h1>
            </section>
        </div>
    );
}