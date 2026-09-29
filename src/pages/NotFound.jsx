import { Link } from 'react-router-dom';
import { FaHome,  } from 'react-icons/fa';
import notfound from '../assets/notfound.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import lastimg from '../assets/last.jpeg';
import nav2 from '../assets/nav2.avif';

export default function NotFound() {
    return (
        <div className="w-full min-h-screen bg-[rgba(45,50,56,1)] text-white flex flex-col justify-between">
            
          
            <div className="w-full max-w-[100%] h-180 bg-center bg-no-repeat bg-cover mx-auto  flex flex-col items-center text-center"
             style={{ backgroundImage: `url(${notfound})` }} >
                
                
                <div className="w-64 h-64 sm:w-80 sm:h-80 mb-6 flex items-center justify-center bg-gray-800/40 border border-gray-700 rounded-full shadow-2xl overflow-hidden relative">
                    {/* Aap yahan apni koi bhi custom error image ya icon laga sakte hain */}
                    <span className="text-6xl sm:text-7xl font-extrabold text-[rgba(255,105,22,1)] tracking-widest">
                        404
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
                    Oops! Page Not Found
                </h1>
                <p className="text-gray-400 text-sm sm:text-base max-w-md mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <Link to="/">
                    <button className="bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl text-sm transition-all cursor-pointer shadow-lg flex items-center gap-2">
                        <FaHome /> Back to Home
                    </button>
                </Link>
            </div>

         
          
                   <section className=' h-fit w-[100%]  flex justify-center border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover'
                         style={{ backgroundImage: `url(${lastimg})` }}>
                          <div className=' h-fit w-[85%] flex justify-between max-[1024px]:flex-col  ' >
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
                                  <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'>Gift Cards </li>
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
                  
                        {/* section 11 */}
                        <section className='h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover'
                         style={{ backgroundImage: `url(${lastimg})` }}>
                        
                          <h1 className='text-white'>
                            © 2026 EGameStore.com — All Rights <span> Terms of Service , Privacy Policy</span>
                          </h1>
                        </section>
                  

        </div>
    );
}