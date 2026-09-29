

import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaPlus, FaMinus, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import section8p1 from "../assets/section8.p1.png";
import section8p2 from "../assets/section8p2.png";
import section8p3 from "../assets/section8p3.png";

const reviewsPool = [
    { name: 'Darrell Steward', date: 'July 2, 2026 at 03:29 PM', stars: '★★★★★', text: 'Best game ever! The graphics and gameplay feel so real. A must-have for every gamer.', image: section8p1 },
    { name: 'Courtney Henry', date: 'June 28, 2026 at 01:15 PM', stars: '★★★★☆', text: 'Amazing experience and instant key delivery. Totally worth the price!', image: section8p2 },
    { name: 'Albert Flores', date: 'June 24, 2026 at 08:42 PM', stars: '★★★★★', text: 'Smooth gameplay and great support team. Highly recommended!', image: section8p3 },
    { name: 'Bessie Cooper', date: 'June 20, 2026 at 11:05 AM', stars: '★★★★☆', text: 'Good optimization and fantastic graphics. Loved it!', image: section8p1 },
    { name: 'Wade Warren', date: 'June 15, 2026 at 04:20 PM', stars: '★★★★★', text: 'Incredible attention to detail. The soundtrack alone is worth it.', image: section8p2 },
    { name: 'Brooklyn Simmons', date: 'June 10, 2026 at 09:12 AM', stars: '★★★☆☆', text: 'Fun overall, but encountered a few minor bugs in multiplayer mode.', image: section8p3 },
    { name: 'Cody Fisher', date: 'June 05, 2026 at 02:45 PM', stars: '★★★★★', text: 'Absolute masterpiece. Kept me hooked for hours straight!', image: section8p1 },
    { name: 'Esther Howard', date: 'May 30, 2026 at 10:30 AM', stars: '★★★★☆', text: 'Very smooth key activation and installation was super easy.', image: section8p2 },
    { name: 'Jacob Jones', date: 'May 25, 2026 at 07:18 PM', stars: '★★★★★', text: 'Exceeded all my expectations. Will definitely buy more from here.', image: section8p3 },
    { name: 'Annette Black', date: 'May 20, 2026 at 01:00 PM', stars: '★★★★☆', text: 'Great value for money, especially with the current platform discounts.', image: section8p1 }
];

export default function ProductDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const product = location.state?.product || {
        title: 'FC25',
        price: 51.00,
        rating: '95',
        stars: '★★★★★',
        image: lastimg,
        platform: 'pc'
    };

    const allGames = location.state?.allGames || [];
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Description');
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setQuantity(1);
    }, [product]);

    const relatedItems = allGames.filter(g => g.title !== product.title).slice(0, 3);

    // Dynamically generate 3 to 6 unique reviews per game from the pool of 10
    const getGameReviews = () => {
        const seed = product.title ? product.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 1;
        const count = 3 + (seed % 4); // Generates a number between 3 and 6
        const startIndex = seed % reviewsPool.length;
        
        let selected = [];
        for (let i = 0; i < count; i++) {
            selected.push(reviewsPool[(startIndex + i) % reviewsPool.length]);
        }
        return selected;
    };

    const gameReviews = getGameReviews();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab.includes('Reviews')) {
            const revSection = document.getElementById('customer-reviews-section');
            if (revSection) {
                revSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleAddToCart = (item) => {
        let existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const target = item || product;
        const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === target.id);
        if (itemIndex > -1) {
            existingCart[itemIndex].quantity += quantity;
        } else {
            existingCart.push({ ...target, quantity: quantity });
        }
        localStorage.setItem('cartItems', JSON.stringify(existingCart));
        navigate('/Cart');
    };

    const handleBuyNow = (item) => {
        const target = item || product;
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            navigate('/BuyNow', { state: { name: target.title, price: target.price * quantity, image: target.image } });
        } else {
            if (window.confirm("Please login your account first to proceed with checkout!")) {
                navigate('/SignIn');
            }
        }
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <div className="w-full pb-16">
                
                {/* Breadcrumb */}
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'><button className='flex items-center cursor-pointer hover:underline text-gray-300'>Home <IoIosArrowForward className='relative top-0.5 ml-1'/></button></Link>
                    <span className='text-white font-medium'>{product.title}</span>
                </div>

                <div className='w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    
                    {/* Left: Big Image */}
                    <div className='lg:col-span-6'>
                        <img src={product.image} alt={product.title} className='w-full h-[400px] sm:h-[480px] object-cover object-fill object-contain rounded-2xl border border-gray-700 shadow-2xl' />
                    </div>

                    {/* Right: Info & Actions */}
                    <div className='lg:col-span-6 flex flex-col gap-4'>
                        <h1 className='text-3xl font-extrabold text-white'>{product.title}</h1>
                        <div className='flex items-center gap-3'>
                            <span className='text-yellow-400 text-sm'>{product.stars || '★★★★★'}</span>
                            <span className='text-gray-400 text-xs'>{gameReviews.length * 45} reviews</span>
                        </div>

                        <div className='flex items-baseline gap-3 mt-1'>
                            <span className='text-2xl font-bold text-orange-500'>${product.price}</span>
                            <span className='text-sm text-gray-500 line-through'>${(product.price * 1.2).toFixed(2)}</span>
                        </div>

                        {/* Quantity Counter */}
                        <div className='flex items-center gap-4 mt-2'>
                            <span className='text-xs text-gray-300 font-medium'>Quantity:</span>
                            <div className='flex items-center bg-[rgba(35,40,46,1)] border border-gray-600 rounded-lg px-3 py-1 gap-4'>
                                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className='text-gray-300 hover:text-white cursor-pointer'><FaMinus size={10}/></button>
                                <span className='text-sm font-bold'>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className='text-gray-300 hover:text-white cursor-pointer'><FaPlus size={10}/></button>
                            </div>
                        </div>

                        <span className='text-green-400 text-xs font-semibold mt-1'>In Stock</span>

                        {/* Dropdown selectors */}
                        <div className='grid grid-cols-2 gap-4 mt-2'>
                            <select className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-lg p-2.5 text-xs text-white outline-none'>
                                <option>Standard Edition</option>
                                <option>Deluxe Edition</option>
                            </select>
                            <select className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-lg p-2.5 text-xs text-white outline-none'>
                                <option>Global Region</option>
                                <option>US Region</option>
                            </select>
                        </div>

                        {/* Action Buttons */}
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <button onClick={() => handleBuyNow()} className='bg-orange-500 hover:opacity-90 text-white font-bold py-3 rounded-xl text-sm shadow cursor-pointer'>Buy Now</button>
                            <button onClick={() => handleAddToCart()} className='bg-gray-800 hover:bg-[rgba(255,105,22,1)] border border-[rgba(255,105,22,1)] border-2 text-white font-bold py-3 rounded-xl text-sm shadow cursor-pointer'>Add to Cart</button>
                        </div>

                        {/* Platform / Region / Delivery Badges */}
                        <div className='grid grid-cols-3 gap-3 mt-4 bg-[rgba(35,40,46,1)] border border-gray-700 p-3.5 rounded-xl items-center'>
                            <div className='flex items-center gap-2.5 border-r border-gray-700 pr-2'>
                                <div className='w-8 h-8 bg-black rounded flex items-center justify-center text-white shrink-0'>
                                    <SiRoblox size={16}/>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[10px] text-gray-400'>Platform</span>
                                    <span className='text-[11px] font-bold leading-tight'>Win/XB One/XB XS</span>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-2.5 border-r border-gray-700 pr-2'>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center text-blue-400 shrink-0'>
                                    <BsGlobe size={20}/>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[10px] text-gray-400'>Region</span>
                                    <span className='text-[11px] font-bold leading-tight'>Global</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 rounded flex items-center justify-center text-yellow-500 shrink-0'>
                                    <MdLocalShipping size={20}/>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[10px] text-gray-400'>Delivery</span>
                                    <span className='text-[11px] font-bold leading-tight'>Online</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Features Banner with Increased Height */}
                <div className='w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 px-6 py-5 rounded-2xl flex items-center gap-4 shadow-lg'>
                        <FaHeadset className='text-orange-500 text-2xl shrink-0'/>
                        <div><h4 className='font-bold text-sm'>24H Support</h4><p className='text-xs text-gray-400 mt-0.5'>Always available when you need us</p></div>
                    </div>
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 px-6 py-5 rounded-2xl flex items-center gap-4 shadow-lg'>
                        <FaTruck className='text-orange-500 text-2xl shrink-0'/>
                        <div><h4 className='font-bold text-sm'>Fast Delivery</h4><p className='text-xs text-gray-400 mt-0.5'>Instant delivery for digital products</p></div>
                    </div>
                    <div className='bg-[rgba(35,40,46,1)] border border-gray-700 px-6 py-5 rounded-2xl flex items-center gap-4 shadow-lg'>
                        <FaShieldAlt className='text-orange-500 text-2xl shrink-0'/>
                        <div><h4 className='font-bold text-sm'>Secure Shopping</h4><p className='text-xs text-gray-400 mt-0.5'>Your information is completely secure</p></div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className='w-[90%] lg:w-[85%] mx-auto mt-10 bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                    <div className='flex gap-6 border-b border-gray-700 pb-3 text-sm font-semibold'>
                        {['System Requirements', 'Description', `Reviews (${gameReviews.length * 45})`, 'Support'].map(tab => (
                            <button key={tab} onClick={() => handleTabClick(tab)} className={`cursor-pointer pb-2 ${activeTab === tab || (tab.includes('Reviews') && activeTab.includes('Reviews')) ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'}`}>{tab}</button>
                        ))}
                    </div>
                    <div className='pt-4 text-xs text-gray-300 leading-relaxed'>
                        {activeTab === 'Description' && (
                            <p>{product.title} - The Ultimate Experience. Get ready for the most exciting game! {product.title} brings updated squads, realistic gameplay, and stunning graphics. Available on PlayStation, Xbox, PC, and Mobile.</p>
                        )}
                        {activeTab !== 'Description' && <p>Detailed information regarding {activeTab} for {product.title}.</p>}
                    </div>
                </div>

                {/* Product FAQs */}
                <div className='w-[90%] lg:w-[85%] mx-auto mt-6 bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                    <h3 className='text-base font-bold text-white mb-4'>Product FAQs</h3>
                    <div className='flex flex-col gap-3'>
                        {[
                            "How will I receive my product key?",
                            "Is this game region-locked?",
                            "What should I do if the key doesn't work?"
                        ].map((q, idx) => (
                            <div key={idx} className='bg-[rgba(45,50,56,1)] border border-gray-700 rounded-xl overflow-hidden'>
                                <div onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className='flex justify-between items-center p-4 cursor-pointer text-xs font-semibold'>
                                    <span>{q}</span>
                                    {openFaq === idx ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                                </div>
                                {openFaq === idx && (
                                    <div className='p-4 pt-0 text-[11px] text-gray-400 border-t border-gray-700'>
                                        You will receive your activation code instantly via email and your order history dashboard. All our keys are 100% verified and secure.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Items */}
                <div className='w-[90%] lg:w-[85%] mx-auto mt-10'>
                    <h3 className='text-lg font-bold mb-4'>Related Item</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {relatedItems.map(item => (
                            <div 
                                key={item.id} 
                                onClick={() => navigate('/ProductDetails', { state: { product: item, allGames } })} 
                                className='bg-[rgba(35,40,46,1)] border border-gray-700 p-5 rounded-2xl flex flex-col justify-between cursor-pointer hover:border-orange-500 shadow-xl'
                            >
                                <div>
                                    <div className='w-full h-74 rounded-xl overflow-hidden mb-4 bg-gray-800 border border-gray-700'>
                                        <img src={item.image} alt={item.title} className='w-full h-full object-cover object-fill'/>
                                    </div>
                                    <h4 className='font-bold text-base text-white'>{item.title}</h4>
                                    <div className='flex items-center justify-between mt-1'>
                                        <span className='text-yellow-400 text-xs'>{item.stars}</span>
                                        <span className='font-extrabold text-orange-500 text-base'>${item.price}</span>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-gray-700'>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleBuyNow(item); }} 
                                        className='bg-orange-500 hover:opacity-90 text-white py-2 rounded-xl text-xs font-bold cursor-pointer shadow'
                                    >
                                        Buy Now
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }} 
                                        className='bg-gray-800 hover:bg-[rgba(255,105,22,1)] border border-[rgba(255,105,22,1)] border-2 text-white py-2 rounded-xl text-xs font-bold cursor-pointer shadow'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div id="customer-reviews-section" className='w-[90%] lg:w-[85%] mx-auto mt-10 bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                    <h3 className='text-lg font-bold mb-6'>Customer Reviews</h3>
                    <div className='flex flex-col gap-6'>
                        {gameReviews.map((rev, idx) => (
                            <div key={idx} className='border-b border-gray-700 pb-4 last:border-0'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-9 h-9 rounded-full overflow-hidden border border-orange-500 shrink-0 bg-black'>
                                        <img src={rev.image} alt={rev.name} className='w-full h-full object-cover' />
                                    </div>
                                    <div>
                                        <h5 className='text-xs font-bold'>{rev.name}</h5>
                                        <span className='text-[10px] text-gray-500'>{rev.date}</span>
                                    </div>
                                </div>
                                <span className='text-yellow-400 text-xs'>{rev.stars}</span>
                                <p className='text-xs text-gray-300 mt-1'>{rev.text}</p>
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