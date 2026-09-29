import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


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

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
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
import tcard1 from '../assets/tcard1.png';
import tcard2 from '../assets/tcard2.png';
import tcard3 from '../assets/tcard3.png';
import tcard4 from '../assets/tcard4.png';
import tcard5 from '../assets/tcard5.png';
import tcard6 from '../assets/tcard6.png';
import tcard7 from '../assets/tcard7.avif';
import tcard8 from '../assets/tcard8.avif';
import mincraft from '../assets/mincraft.avif';

import play1 from '../assets/play1.avif';
import play2 from '../assets/play2.avif';
import play3 from '../assets/play3.avif';
import play4 from '../assets/play4.avif';
import play6 from '../assets/play6.avif';
import play7 from '../assets/play7.avif';

import nin1 from '../assets/nin1.jpg';
import nin2 from '../assets/nin2.jpg';
import nin3 from '../assets/nin3.jpg';
import nin4 from '../assets/nin4.jpg';
import nin5 from '../assets/nin5.jpg';
import nin6 from '../assets/nin6.jpg';
import nin7 from '../assets/nin7.jpg';
import nin8 from '../assets/nin8.jpg';
import nin9 from '../assets/nin9.jpg';
import nin10 from '../assets/nin10.jpg';
import nin11 from '../assets/nin11.jpg';
import nin12 from '../assets/nin12.jpg';
import nin13 from '../assets/nin13.jpg';
import nin14 from '../assets/nin14.jpg';
import nin15 from '../assets/nin15.jpg';
import nin16 from '../assets/nin16.jpg';
import nin17 from '../assets/nin17.jpg';

const gamesData = [
    { id: 'pc-1', title: 'Mafia 3', price: 59.99, rating: '95', stars: '★★★★★', image: game1, platform: 'pc' },
    { id: 'pc-2', title: 'Totall War', price: 49.99, rating: '90', stars: '★★★★☆', image: game2, platform: 'pc' },
    { id: 'pc-3', title: 'Football', price: 39.99, rating: '88', stars: '★★★★☆', image: game3, platform: 'pc' },
    { id: 'pc-4', title: 'Endless', price: 19.99, rating: '85', stars: '★★★★☆', image: game4, platform: 'pc' },
    { id: 'pc-5', title: 'Endless s2', price: 29.99, rating: '92', stars: '★★★★★', image: game5, platform: 'pc' },
    { id: 'pc-6', title: 'Endless s3', price: 69.99, rating: '96', stars: '★★★★★', image: game6, platform: 'pc' },
    { id: 'pc-7', title: 'Endless s4', price: 15.99, rating: '80', stars: '★★★☆☆', image: game7, platform: 'pc' },
    { id: 'pc-8', title: 'Demons', price: 45.99, rating: '89', stars: '★★★★☆', image: game8, platform: 'pc' },
    { id: 'pc-9', title: 'Endless s5', price: 25.99, rating: '82', stars: '★★★★☆', image: game9, platform: 'pc' },
    { id: 'pc-10', title: 'Humakind', price: 54.99, rating: '94', stars: '★★★★★', image: game10, platform: 'pc' },
    { id: 'pc-11', title: 'BorderLand', price: 34.99, rating: '87', stars: '★★★★☆', image: game11, platform: 'pc' },
    { id: 'pc-12', title: 'Totall war 2', price: 9.99, rating: '75', stars: '★★★☆☆', image: game12, platform: 'pc' },
    { id: 'pc-13', title: 'Batman', price: 39.99, rating: '86', stars: '★★★★☆', image: game13, platform: 'pc' },
    { id: 'pc-14', title: 'Two Points', price: 49.99, rating: '91', stars: '★★★★★', image: game14, platform: 'pc' },
    { id: 'pc-15', title: 'Metro', price: 19.99, rating: '83', stars: '★★★★☆', image: game15, platform: 'pc' },
    { id: 'pc-16', title: 'Thief', price: 59.99, rating: '93', stars: '★★★★★', image: game16, platform: 'pc' },
    { id: 'pc-17', title: 'Fishing', price: 24.99, rating: '79', stars: '★★★☆☆', image: game17, platform: 'pc' },
    { id: 'pc-18', title: 'Kind', price: 64.99, rating: '97', stars: '★★★★★', image: game18, platform: 'pc' },
    { id: 'pc-19', title: 'Ometra', price: 44.99, rating: '88', stars: '★★★★☆', image: game19, platform: 'pc' },
    { id: 'pc-20', title: 'Blacksad', price: 29.99, rating: '84', stars: '★★★★☆', image: game20, platform: 'pc' },
    { id: 'pc-21', title: 'Storm', price: 34.99, rating: '85', stars: '★★★★☆', image: game21, platform: 'pc' },
    { id: 'pc-22', title: 'Deadly', price: 49.99, rating: '90', stars: '★★★★★', image: game22, platform: 'pc' },
    { id: 'pc-23', title: 'Company', price: 14.99, rating: '78', stars: '★★★☆☆', image: game23, platform: 'pc' },
    { id: 'pc-24', title: 'Shogun', price: 69.99, rating: '98', stars: '★★★★★', image: game24, platform: 'pc' },
    { id: 'pc-25', title: 'Speedway', price: 39.99, rating: '86', stars: '★★★★☆', image: game25, platform: 'pc' },
    { id: 'pc-26', title: 'Apex Rush', price: 19.99, rating: '81', stars: '★★★☆☆', image: game26, platform: 'pc' },
    { id: 'pc-27', title: 'Mind Maze', price: 12.99, rating: '89', stars: '★★★★☆', image: game27, platform: 'pc' },
    { id: 'pc-28', title: 'City Builder', price: 39.99, rating: '91', stars: '★★★★★', image: game28, platform: 'pc' },
    { id: 'pc-29', title: 'Wild Trek', price: 49.99, rating: '87', stars: '★★★★☆', image: game29, platform: 'pc' },
    { id: 'pc-30', title: 'Shadow Run', price: 54.99, rating: '92', stars: '★★★★★', image: game30, platform: 'pc' },
    { id: 'pc-31', title: 'Nitro Drift', price: 29.99, rating: '84', stars: '★★★★☆', image: game31, platform: 'pc' },
    { id: 'pc-32', title: 'Apex Hunter', price: 59.99, rating: '94', stars: '★★★★★', image: game32, platform: 'pc' },

    { id: 'xbox-1', title: 'Fortnite', price: 59.99, rating: '95', stars: '★★★★★', image: card1, platform: 'xbox' },
    { id: 'xbox-2', title: 'Cyber Punk', price: 49.99, rating: '90', stars: '★★★★☆', image: card2, platform: 'xbox' },
    { id: 'xbox-3', title: 'Spider Man', price: 39.99, rating: '88', stars: '★★★★☆', image: card3, platform: 'xbox' },
    { id: 'xbox-4', title: 'Witcher', price: 19.99, rating: '85', stars: '★★★★☆', image: card4, platform: 'xbox' },
    { id: 'xbox-5', title: 'GTA V', price: 29.99, rating: '92', stars: '★★★★★', image: card5, platform: 'xbox' },
    { id: 'xbox-6', title: 'OutLaws', price: 69.99, rating: '96', stars: '★★★★★', image: card6, platform: 'xbox' },
    { id: 'xbox-7', title: 'OutLaws 2', price: 15.99, rating: '80', stars: '★★★☆☆', image: card7, platform: 'xbox' },
    { id: 'xbox-8', title: 'GTA VI', price: 45.99, rating: '89', stars: '★★★★☆', image: card8, platform: 'xbox' },
    { id: 'xbox-9', title: 'The Crew', price: 25.99, rating: '82', stars: '★★★★☆', image: card9, platform: 'xbox' },
    { id: 'xbox-10', title: 'Chef Life', price: 54.99, rating: '94', stars: '★★★★★', image: card10, platform: 'xbox' },
    { id: 'xbox-11', title: 'Garden Life', price: 34.99, rating: '87', stars: '★★★★☆', image: card11, platform: 'xbox' },
    { id: 'xbox-12', title: 'Totall War Xbox', price: 9.99, rating: '75', stars: '★★★☆☆', image: card12, platform: 'xbox' },
    { id: 'xbox-13', title: 'TT3', price: 39.99, rating: '86', stars: '★★★★☆', image: card13, platform: 'xbox' },
    { id: 'xbox-14', title: 'Two Points Xbox', price: 49.99, rating: '91', stars: '★★★★★', image: card14, platform: 'xbox' },
    { id: 'xbox-15', title: 'Metro Xbox', price: 19.99, rating: '83', stars: '★★★★☆', image: card15, platform: 'xbox' },
    { id: 'xbox-16', title: 'Thief Xbox', price: 59.99, rating: '93', stars: '★★★★★', image: card16, platform: 'xbox' },
    { id: 'xbox-17', title: 'Fishing Xbox', price: 24.99, rating: '79', stars: '★★★☆☆', image: card17, platform: 'xbox' },
    { id: 'xbox-18', title: 'Kind Xbox', price: 64.99, rating: '97', stars: '★★★★★', image: card18, platform: 'xbox' },
    { id: 'xbox-19', title: 'Ometra Xbox', price: 44.99, rating: '88', stars: '★★★★☆', image: card19, platform: 'xbox' },
    { id: 'xbox-20', title: 'Blacksad Xbox', price: 29.99, rating: '84', stars: '★★★★☆', image: card20, platform: 'xbox' },
    { id: 'xbox-21', title: 'Storm Xbox', price: 34.99, rating: '85', stars: '★★★★☆', image: tcard1, platform: 'xbox' },
    { id: 'xbox-22', title: 'Deadly Xbox', price: 49.99, rating: '90', stars: '★★★★★', image: tcard2, platform: 'xbox' },
    { id: 'xbox-23', title: 'Company Xbox', price: 14.99, rating: '78', stars: '★★★☆☆', image: tcard3, platform: 'xbox' },
    { id: 'xbox-24', title: 'Shogun Xbox', price: 69.99, rating: '98', stars: '★★★★★', image: tcard4, platform: 'xbox' },
    { id: 'xbox-25', title: 'Speedway Xbox', price: 39.99, rating: '86', stars: '★★★★☆', image: tcard5, platform: 'xbox' },
    { id: 'xbox-26', title: 'Apex Rush Xbox', price: 19.99, rating: '81', stars: '★★★☆☆', image: tcard6, platform: 'xbox' },
    { id: 'xbox-27', title: 'Mind Maze Xbox', price: 12.99, rating: '89', stars: '★★★★☆', image: tcard7, platform: 'xbox' },
    { id: 'xbox-28', title: 'City Builder Xbox', price: 39.99, rating: '91', stars: '★★★★★', image: tcard8, platform: 'xbox' },
    { id: 'xbox-29', title: 'Wild Trek Xbox', price: 49.99, rating: '87', stars: '★★★★☆', image: mincraft, platform: 'xbox' },
    { id: 'xbox-30', title: 'Shadow Run Xbox', price: 54.99, rating: '92', stars: '★★★★★', image: card1, platform: 'xbox' },
    { id: 'xbox-31', title: 'Nitro Drift Xbox', price: 29.99, rating: '84', stars: '★★★★☆', image: card2, platform: 'xbox' },
    { id: 'xbox-32', title: 'Apex Hunter Xbox', price: 59.99, rating: '94', stars: '★★★★★', image: card3, platform: 'xbox' },
    { id: 'xbox-33', title: 'Minecraft Xbox', price: 29.99, rating: '98', stars: '★★★★★', image: mincraft, platform: 'xbox' },
    { id: 'xbox-34', title: 'Block Master Xbox', price: 14.99, rating: '82', stars: '★★★★☆', image: card4, platform: 'xbox' },

    { id: 'ps-1', title: 'God of War', price: 59.99, rating: '98', stars: '★★★★★', image: play1, platform: 'playstation' },
    { id: 'ps-2', title: 'Spider-Man PS', price: 49.99, rating: '95', stars: '★★★★★', image: play2, platform: 'playstation' },
    { id: 'ps-3', title: 'Horizon Zero', price: 39.99, rating: '90', stars: '★★★★☆', image: play3, platform: 'playstation' },
    { id: 'ps-4', title: 'Gran Turismo', price: 59.99, rating: '92', stars: '★★★★★', image: play4, platform: 'playstation' },
    { id: 'ps-5', title: 'Uncharted Legacy', price: 44.99, rating: '93', stars: '★★★★★', image: play6, platform: 'playstation' },
    { id: 'ps-6', title: 'The Last of Us', price: 69.99, rating: '99', stars: '★★★★★', image: play7, platform: 'playstation' },
    { id: 'ps-7', title: 'Ghost of Tsushima', price: 49.99, rating: '97', stars: '★★★★★', image: play1, platform: 'playstation' },

    { id: 'nin-1', title: 'Zelda Wild', price: 59.99, rating: '99', stars: '★★★★★', image: nin1, platform: 'nintendo' },
    { id: 'nin-2', title: 'Super Mario', price: 49.99, rating: '96', stars: '★★★★★', image: nin2, platform: 'nintendo' },
    { id: 'nin-3', title: 'Pokemon Arceus', price: 54.99, rating: '92', stars: '★★★★★', image: nin3, platform: 'nintendo' },
    { id: 'nin-4', title: 'Animal Crossing', price: 39.99, rating: '90', stars: '★★★★☆', image: nin4, platform: 'nintendo' },
    { id: 'nin-5', title: 'Mario Kart 8', price: 49.99, rating: '95', stars: '★★★★★', image: nin5, platform: 'nintendo' },
    { id: 'nin-6', title: 'Metroid Dread', price: 39.99, rating: '88', stars: '★★★★☆', image: nin6, platform: 'nintendo' },
    { id: 'nin-7', title: 'Super Smash Bros', price: 59.99, rating: '97', stars: '★★★★★', image: nin7, platform: 'nintendo' },
    { id: 'nin-8', title: 'Luigi Mansion 3', price: 34.99, rating: '89', stars: '★★★★☆', image: nin8, platform: 'nintendo' },
    { id: 'nin-9', title: 'Kirby Forgotten', price: 44.99, rating: '91', stars: '★★★★★', image: nin9, platform: 'nintendo' },
    { id: 'nin-10', title: 'Splatoon 3', price: 49.99, rating: '87', stars: '★★★★☆', image: nin10, platform: 'nintendo' },
    { id: 'nin-11', title: 'Fire Emblem', price: 59.99, rating: '94', stars: '★★★★★', image: nin11, platform: 'nintendo' },
    { id: 'nin-12', title: 'Pikmin 4', price: 39.99, rating: '86', stars: '★★★★☆', image: nin12, platform: 'nintendo' },
    { id: 'nin-13', title: 'Xenoblade 3', price: 49.99, rating: '93', stars: '★★★★★', image: nin13, platform: 'nintendo' },
    { id: 'nin-14', title: 'Bayonetta 3', price: 44.99, rating: '85', stars: '★★★★☆', image: nin14, platform: 'nintendo' },
    { id: 'nin-15', title: 'Mario Party', price: 39.99, rating: '82', stars: '★★★★☆', image: nin15, platform: 'nintendo' },
    { id: 'nin-16', title: 'Pokemon Violet', price: 54.99, rating: '84', stars: '★★★★☆', image: nin16, platform: 'nintendo' },
    { id: 'nin-17', title: 'Fast RMX', price: 19.99, rating: '79', stars: '★★★☆☆', image: nin17, platform: 'nintendo' },
];

export default function Allgames() {
    const navigate = useNavigate(); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; 

    const [isPlatformOpen, setIsPlatformOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);

    const [platforms, setPlatforms] = useState({
        all: true,
        pc: false,
        xbox: false,
        playstation: false,
        nintendo: false,
    });
    
    const [priceVal, setPriceVal] = useState(100);

    const handleClearAll = () => {
        setPlatforms({ all: true, pc: false, xbox: false, playstation: false, nintendo: false });
        setPriceVal(100);
        setCurrentPage(1);
    };

    const handleCheckboxChange = (key) => {
        setCurrentPage(1); 
        if (key === 'all') {
            setPlatforms({ all: true, pc: false, xbox: false, playstation: false, nintendo: false });
        } else {
            setPlatforms(prev => ({ ...prev, all: false, [key]: !prev[key] }));
        }
    };

    const filteredGames = gamesData.filter(game => {
        if (game.price > priceVal) return false;
        if (platforms.all) return true;
        const activePlatforms = Object.keys(platforms).filter(k => k !== 'all' && platforms[k]);
        if (activePlatforms.length === 0) return true;
        return activePlatforms.includes(game.platform);
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
                    <span className='text-gray-300 font-medium'>All games</span>
                </div>

                <div className='w-[95%] lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-6'>
                    
                    {/* Filter Sidebar */}
                    <div className="w-full lg:w-[28%] bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-xl p-5 h-fit shadow-lg">
                        <div className='flex justify-between items-center mb-6 pb-3 border-b border-gray-700'>
                            <h2 className='text-xl font-bold'>Filters</h2>
                            <button onClick={handleClearAll} className='border border-[rgba(255,105,22,1)] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[rgba(255,105,22,1)] cursor-pointer'>
                                Clear All
                            </button>
                        </div>

                        <div className='mb-6'>
                            <div onClick={() => setIsPlatformOpen(!isPlatformOpen)} className='flex justify-between items-center mb-3 cursor-pointer select-none'>
                                <span className='font-semibold text-base'>Platforms</span>
                                {isPlatformOpen ? <IoIosArrowUp className='text-[rgba(255,105,22,1)] text-lg' /> : <IoIosArrowDown className='text-[rgba(255,105,22,1)] text-lg' />}
                            </div>

                            {isPlatformOpen && (
                                <div className='flex flex-col gap-2.5 text-sm transition-all'>
                                    {[
                                        { key: 'all', label: 'All Platforms', count: `(${gamesData.length})` },
                                        { key: 'pc', label: 'PC Games', count: '(32)' },
                                        { key: 'xbox', label: 'Xbox', count: '(34)' },
                                        { key: 'playstation', label: 'PlayStation', count: '(7)' },
                                        { key: 'nintendo', label: 'Nintendo', count: '(17)' },
                                    ].map((item) => (
                                        <label key={item.key} className='flex justify-between items-center cursor-pointer hover:text-[rgba(255,105,22,1)]'>
                                            <div className='flex items-center gap-2'>
                                                <input 
                                                    type='checkbox' 
                                                    checked={platforms[item.key]} 
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
                            <div onClick={() => setIsPriceOpen(!isPriceOpen)} className='flex justify-between items-center mb-3 cursor-pointer select-none'>
                                <span className='font-semibold text-base'>Price</span>
                                {isPriceOpen ? <IoIosArrowUp className='text-[rgba(255,105,22,1)] text-lg' /> : <IoIosArrowDown className='text-[rgba(255,105,22,1)] text-lg' />}
                            </div>

                            {isPriceOpen && (
                                <div className='transition-all'>
                                    <input 
                                        type='range' 
                                        min='0' 
                                        max='100' 
                                        value={priceVal}
                                        onChange={(e) => { setPriceVal(Number(e.target.value)); setCurrentPage(1); }}
                                        className='w-full accent-[rgba(255,105,22,1)] cursor-pointer mb-4' 
                                    />
                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono'>$0</div>
                                        <span className='text-gray-400'>-</span>
                                        <div className='bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono'>${priceVal}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Games Grid */}
                    <div className='w-full lg:w-[72%] flex flex-col'>
                        {currentItems.length === 0 ? (
                            <div className='bg-[rgba(35,40,46,1)] border border-white/10 rounded-lg p-12 text-center text-gray-400'>
                                No games found matching your active filter criteria.
                            </div>
                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {currentItems.map((item) => (
                                    <div 
                                        key={item.id} 
                                        onClick={() => navigate('/ProductDetails', { state: { product: item, allGames: gamesData } })}
                                        className='border border-white/20 bg-[rgba(35,40,46,1)] p-3 rounded-lg transition-transform duration-300 shadow-md flex flex-col justify-between hover:border-[rgba(255,105,22,1)] cursor-pointer' 
                                    >
                                        <div>
                                            <div style={{ backgroundImage: `url(${item.image})` }} className='w-full h-[140px] sm:h-[160px] bg-cover bg-no-repeat bg-center rounded-md relative' />
                                            <div className='h-fit mt-2'>
                                                <div className='font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden'>
                                                    <span className='truncate'>{item.title}</span>
                                                    <span className='text-[rgba(255,105,22,1)] flex text-[10px] shrink-0'>{item.stars}</span>
                                                </div>
                                                <div className='flex items-center justify-between mt-1.5'>
                                                    <span className='text-white text-xs font-bold'>${item.price}</span>
                                                    <div className='flex items-center shrink-0'>
                                                        <GiConsoleController className='text-[15px] text-[rgba(255,105,22,1)]' /> 
                                                        <span className='text-[rgba(255,204,0,1)] text-xs ml-1'>{item.rating}/100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        <div className='flex justify-between gap-1 pt-3 mt-auto'>
                                            <button onClick={(e) => handleAddToCart(item, e)} className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold truncate px-1 cursor-pointer">
                                                Add to Cart
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); navigate('/BuyNow', { state: { name: item.title, price: item.price, image: item.image } }); }} className='bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold hover:opacity-90 truncate px-1 cursor-pointer'>
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className='flex items-center justify-between px-6 mt-8 py-3 bg-[rgba(35,40,46,1)] rounded-lg border border-white/10'>
                                <button onClick={handlePrev} disabled={safeCurrentPage === 1} className={`px-4 py-1.5 rounded-md text-sm font-semibold text-white transition-all ${safeCurrentPage === 1 ? 'bg-gray-700 opacity-40 cursor-not-allowed' : 'bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer'}`}>
                                    Previous
                                </button>
                                <div className='flex items-center gap-1.5'>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${safeCurrentPage === index + 1 ? 'bg-[rgba(255,105,22,1)] text-white font-bold shadow' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={handleNext} disabled={safeCurrentPage === totalPages} className={`px-4 py-1.5 rounded-md text-sm font-semibold text-white transition-all ${safeCurrentPage === totalPages ? 'bg-gray-700 opacity-40 cursor-not-allowed' : 'bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer'}`}>
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className='h-fit w-[100%] flex justify-center border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${lastimg})` }}>
                <div className='h-fit w-[85%] flex justify-between max-[1024px]:flex-col py-6'>
                    <div className='h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-[100%]'>
                        <img src={nav2} alt="" className='w-50'/>
                        <p className='text-white text-justify cursor-pointer'>
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

            <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${lastimg})` }}>
                <h1 className='text-white text-sm'>
                    © 2026 EGameStore.com — All Rights <span className='underline cursor-pointer'>Terms of Service , Privacy Policy</span>
                </h1>
            </section>
        </div>
    );
}