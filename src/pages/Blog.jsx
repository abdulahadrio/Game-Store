
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog1.avif';
import blog2 from '../assets/blog2.jpg';
import news1 from '../assets/news1.webp';
import news2 from '../assets/news2.avif';
import news3 from '../assets/news3.avif';
import news4 from '../assets/news4.avif';
import news5 from '../assets/news5.avif';
import news6 from '../assets/news6.webp';
import news7 from '../assets/news7.avif';
import news8 from '../assets/news8.webp';
import news10 from '../assets/news10.avif';

import section8p2 from '../assets/section8p2.png';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Blog() {
    const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' or 'news'
    const [selectedBlog, setSelectedBlog] = useState(null); // 'fc27' or 'gta6' or null
    
    // News states
    const [selectedNews, setSelectedNews] = useState(null); // 'big' or number ID
    const [showAllNews, setShowAllNews] = useState(false);
    const [loadMoreMessage, setLoadMoreMessage] = useState(false);

    const handleLoadMoreNews = () => {
        if (!showAllNews) {
            setShowAllNews(true);
        } else {
            setLoadMoreMessage(true);
        }
    };

    const newsCardsData = [
        { id: 1, title: "Next-Gen Gaming Hardware Breakthroughs Announced for 2026", image: news2, date: "Jul 10, 2026" },
        { id: 2, title: "Top 10 Open World RPGs You Need To Play Before The Year Ends", image: news3, date: "Jul 12, 2026" },
        { id: 3, title: "Esports Championship Global Finals Breaking All Viewership Records", image: news4, date: "Jul 15, 2026" },
        { id: 4, title: "Virtual Reality Immersion Reaches New Heights with Advanced Haptics", image: news5, date: "Jul 18, 2026" },
        { id: 5, title: "Indie Game Developers Shine Bright at Annual Summer Showcase", image: news6, date: "Jul 20, 2026" },
        { id: 6, title: "Cloud Gaming Expansion Brings AAA Titles to Mobile Devices", image: news7, date: "Jul 22, 2026" },
        { id: 7, title: "Classic Retro Franchises Making a Massive Comeback on Modern Consoles", image: news8, date: "Jul 25, 2026" },
        { id: 8, title: "Ultimate Strategy Guide for Mastering Competitive Multiplayer Lobbies", image: news10, date: "Jul 28, 2026" }
    ];

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <div className="w-full pb-20">
                
                {/* Top Tabs Switcher (Sirf tab show honge jab koi card open na ho) */}
                {selectedBlog === null && selectedNews === null && (
                    <div className="w-[85%] max-w-[1300px] mx-auto pt-8 flex justify-center gap-6">
                        <button 
                            onClick={() => { setActiveTab('blogs'); setSelectedBlog(null); }}
                            className={`w-40 py-3 rounded-[10px] font-bold text-sm transition-all cursor-pointer border text-center ${
                                activeTab === 'blogs' 
                                    ? 'bg-[rgba(255,105,22,1)] border-[rgba(255,105,22,1)] text-white shadow-lg' 
                                    : 'bg-[rgba(35,40,46,1)] border-gray-600 text-gray-300 hover:border-[rgba(255,105,22,1)]'
                            }`}
                        >
                            Blogs
                        </button>
                        <button 
                            onClick={() => { setActiveTab('news'); setSelectedNews(null); setShowAllNews(false); setLoadMoreMessage(false); }}
                            className={`w-40 py-3 rounded-[10px] font-bold text-sm transition-all cursor-pointer border text-center ${
                                activeTab === 'news' 
                                    ? 'bg-[rgba(255,105,22,1)] border-[rgba(255,105,22,1)] text-white shadow-lg' 
                                    : 'bg-[rgba(35,40,46,1)] border-gray-600 text-gray-300 hover:border-[rgba(255,105,22,1)]'
                            }`}
                        >
                            News
                        </button>
                    </div>
                )}

                {/* CONTENT AREA */}
                <div className="w-[85%] max-w-[1300px] mx-auto mt-10">
                    
                    {/* --- NEWS TAB CONTENT --- */}
                    {activeTab === 'news' && (
                        <div>
                            {selectedNews === null ? (
                                <div className="flex flex-col gap-8">
                                    {/* Big News Banner (news1) */}
                                    <div 
                                        onClick={() => setSelectedNews('big')}
                                        className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-700 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${news1})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                                            <span className="bg-[rgba(255,105,22,1)] text-white text-[11px] font-bold px-3 py-1 rounded-md w-fit mb-3">
                                                BREAKING NEWS
                                            </span>
                                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl group-hover:text-[rgba(255,105,22,1)] transition-colors">
                                                Global Gaming Summit 2026: Major Industry Disruptions, Next-Gen Hardware, and Exclusive Developer Reveals Detailed
                                            </h2>
                                            <p className="text-sm text-gray-300 mt-2 line-clamp-2 max-w-2xl">
                                                The annual Global Gaming Summit has officially kicked off with unprecedented announcements shaking the digital entertainment ecosystem...
                                            </p>
                                            <button className="mt-4 bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold px-6 py-2.5 rounded-lg text-xs w-fit shadow-md">
                                                Read More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Grid of News Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {(showAllNews ? newsCardsData : newsCardsData.slice(0, 6)).map((news) => (
                                            <div 
                                                key={news.id}
                                                onClick={() => setSelectedNews(news.id)}
                                                className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:border-[rgba(255,105,22,1)] transition-all duration-300 flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="w-full h-[200px] overflow-hidden bg-gray-800">
                                                        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="p-5">
                                                        <span className="text-[10px] text-[rgba(255,105,22,1)] font-bold uppercase tracking-wider">INDUSTRY NEWS</span>
                                                        <h3 className="font-bold text-white text-base mt-1 line-clamp-2">
                                                            {news.title}
                                                        </h3>
                                                        <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                                                            Explore complete comprehensive insights, developer interviews, and official statements regarding this major milestone...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="p-5 pt-0 flex items-center gap-3 border-t border-gray-700/60 mt-4">
                                                    <div className="w-7 h-7 rounded-full overflow-hidden border border-orange-500 shrink-0 mt-3">
                                                        <img src={section8p2} alt="Admin" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <h5 className="text-xs font-bold text-white">Admin</h5>
                                                        <span className="text-[10px] text-gray-500">{news.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Load More Articles Section for News */}
                                    <div className="mt-8 flex flex-col items-center">
                                        {!loadMoreMessage ? (
                                            <button 
                                                onClick={handleLoadMoreNews}
                                                className="bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold px-8 py-3 rounded-xl text-xs shadow-lg cursor-pointer transition-all"
                                            >
                                                Load More Articles
                                            </button>
                                        ) : (
                                            <div className="bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] px-8 py-3 rounded-xl text-center shadow-lg">
                                                <p className="text-sm font-bold text-[rgba(255,105,22,1)]">No more articles</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                /* Detailed View for News */
                                <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-8 lg:p-14 shadow-2xl">
                                    <button 
                                        onClick={() => setSelectedNews(null)}
                                        className="text-[rgba(255,105,22,1)] text-xs font-bold mb-6 hover:underline flex items-center gap-1 cursor-pointer"
                                    >
                                        ← Back to News Feed
                                    </button>

                                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                                        {selectedNews === 'big' 
                                            ? 'Global Gaming Summit 2026: Major Industry Disruptions, Next-Gen Hardware, and Exclusive Developer Reveals Detailed'
                                            : newsCardsData.find(n => n.id === selectedNews)?.title}
                                    </h1>
                                    
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 rounded-full overflow-hidden border border-orange-500 shrink-0">
                                            <img src={section8p2} alt="Admin" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold text-white">Admin</h5>
                                            <span className="text-[10px] text-gray-400">Published in 2026 • 10 min read</span>
                                        </div>
                                    </div>

                                    <span className="bg-[rgba(255,105,22,1)] text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-8">
                                        BREAKING NEWS REPORT
                                    </span>

                                    <div className="w-full h-[400px] lg:h-[520px] rounded-2xl overflow-hidden mb-8 border border-gray-700">
                                        <img 
                                            src={selectedNews === 'big' ? news1 : newsCardsData.find(n => n.id === selectedNews)?.image} 
                                            alt="News Detail Banner" 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>

                                    <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-6">
                                        <p>
                                            The interactive entertainment landscape is undergoing a monumental shift as industry leaders, visionary developers, and hardware pioneers converge at the annual Global Gaming Summit. With groundbreaking hardware architectures being unveiled and software capabilities pushed to absolute limits, players are standing on the precipice of a brand-new era in digital immersion.
                                        </p>
                                        
                                        <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Paradigm Shift in Hardware Capabilities</h3>
                                        <p>
                                            Next-generation silicon advancements are enabling real-time ray tracing at unprecedented fidelity, lightning-fast asset streaming, and AI-driven physics calculations that make virtual worlds indistinguishable from reality. Leading manufacturers have showcased custom-built cooling solutions and ultra-responsive display panels designed explicitly for hardcore competitive gamers and simulation enthusiasts.
                                        </p>

                                        <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Developer Insights & Creative Freedom</h3>
                                        <p>
                                            During keynote panel discussions, world-renowned studio directors emphasized the growing importance of player-driven narratives and persistent social spaces. Rather than linear storytelling, upcoming blockbusters are focusing on dynamic ecosystems where user choices permanently alter faction politics, urban economies, and open-world environments.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- BLOGS TAB CONTENT --- */}
                    {activeTab === 'blogs' && (
                        <div>
                            {selectedBlog === null ? (
                                <div className="flex flex-col gap-8">
                                    
                                    {/* Blog 1: FC 27 Big Banner Card */}
                                    <div 
                                        onClick={() => setSelectedBlog('fc27')}
                                        className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-700 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${blog1})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                                            <span className="bg-[rgba(255,105,22,1)] text-white text-[11px] font-bold px-3 py-1 rounded-md w-fit mb-3">
                                                EA SPORTS FC 27
                                            </span>
                                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl group-hover:text-[rgba(255,105,22,1)] transition-colors">
                                                EA SPORTS FC 27 Unveils "The Grounds": 100-Player Persistent Social Hub, Game Modes, AMPS System, and Mentors Detailed
                                            </h2>
                                            <p className="text-sm text-gray-300 mt-2 line-clamp-2 max-w-2xl">
                                                Football pitch battles have always been decided between the goal lines, but what happens after the final whistle blows? In EA SPORTS FC 27, Electronic Arts is expanding...
                                            </p>
                                            <button className="mt-4 bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold px-6 py-2.5 rounded-lg text-xs w-fit shadow-md">
                                                Read More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Blog 2: GTA 6 Card Below */}
                                    <div 
                                        onClick={() => setSelectedBlog('gta6')}
                                        className="w-[350px] bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:border-[rgba(255,105,22,1)] transition-all duration-300"
                                    >
                                        <div className="w-full h-[200px] overflow-hidden bg-gray-800">
                                            <img src={blog2} alt="GTA 6 Blog Thumbnail" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-[10px] text-[rgba(255,105,22,1)] font-bold uppercase tracking-wider">GTA 6</span>
                                            <h3 className="font-bold text-white text-base mt-1 line-clamp-2">
                                                Grand Theft Auto VI (GTA 6): The Ultimate Guide to Release Date, Trailers, Setting, and Pre-Order Details
                                            </h3>
                                            <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                                                Grand Theft Auto VI (GTA 6): The Ultimate Guide to Release Date, Trailers, Setting, and Pre-Order De...
                                            </p>
                                            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-700">
                                                <div className="w-7 h-7 rounded-full overflow-hidden border border-orange-500 shrink-0">
                                                    <img src={section8p2} alt="Admin" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h5 className="text-xs font-bold text-white">Admin</h5>
                                                    <span className="text-[10px] text-gray-500">Jun 23, 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) : selectedBlog === 'fc27' ? (
                                /* FC 27 Detailed View */
                                <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-8 lg:p-14 shadow-2xl">
                                    <button 
                                        onClick={() => setSelectedBlog(null)}
                                        className="text-[rgba(255,105,22,1)] text-xs font-bold mb-6 hover:underline flex items-center gap-1 cursor-pointer"
                                    >
                                        ← Back to Blogs List
                                    </button>

                                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                                        EA SPORTS FC 27 Unveils "The Grounds": 100-Player Persistent Social Hub, Game Modes, AMPS System, and Mentors Detailed
                                    </h1>
                                    
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 rounded-full overflow-hidden border border-orange-500 shrink-0">
                                            <img src={section8p2} alt="Admin" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold text-white">Admin</h5>
                                            <span className="text-[10px] text-gray-400">Published on Oct 12, 2026 • 6 min read</span>
                                        </div>
                                    </div>

                                    <span className="bg-[rgba(255,105,22,1)] text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-8">
                                        EA SPORTS FC 27
                                    </span>

                                    <div className="w-full h-[400px] lg:h-[520px] rounded-2xl overflow-hidden mb-8 border border-gray-700">
                                        <img src={blog1} alt="FC 27 Detailed Banner" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-6">
                                        <p>
                                            Football pitch battles have always been decided between the goal lines, but what happens after the final whistle blows? In <strong>EA SPORTS FC 27</strong>, Electronic Arts is expanding the virtual pitch into a persistent, living world with the introduction of <em>The Grounds</em>.
                                        </p>
                                        <h3 className="text-xl font-bold text-white mt-8 mb-3">1. The 100-Player Persistent Social Hub</h3>
                                        <p>
                                            Moving far beyond traditional menu screens and standalone lobby matchmaking, The Grounds serves as a massive social and competitive football hub. For the first time in franchise history, players can drop into a shared world alongside up to 100 real players.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* GTA 6 Detailed View  */
                                <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-8 lg:p-14 shadow-2xl">
                                    <button 
                                        onClick={() => setSelectedBlog(null)}
                                        className="text-[rgba(255,105,22,1)] text-xs font-bold mb-6 hover:underline flex items-center gap-1 cursor-pointer"
                                    >
                                        ← Back to Blogs List
                                    </button>

                                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                                        Grand Theft Auto VI (GTA 6): The Ultimate Guide to Release Date, Trailers, Setting, and Pre-Order Details
                                    </h1>
                                    
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-9 h-9 rounded-full overflow-hidden border border-orange-500 shrink-0">
                                            <img src={section8p2} alt="Admin" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold text-white">Admin</h5>
                                            <span className="text-[10px] text-gray-400">Published on Jun 23, 2026 • 8 min read</span>
                                        </div>
                                    </div>

                                    <span className="bg-[rgba(255,105,22,1)] text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-8">
                                        GTA 6
                                    </span>

                                    <div className="w-full h-[400px] lg:h-[520px] rounded-2xl overflow-hidden mb-8 border border-gray-700">
                                        <img src={blog2} alt="GTA 6 Detailed Banner" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-6">
                                        <p>
                                            Rockstar Games has officially ignited the global gaming community with unprecedented excitement surrounding <strong>Grand Theft Auto VI (GTA 6)</strong>. As one of the most anticipated entertainment releases in human history, the return to Vice City promises to redefine open-world game design, narrative depth, and technical boundaries across modern gaming hardware.
                                        </p>
                                        
                                        <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Return to Vice City & Leonida State</h3>
                                        <p>
                                            For GTA 6, Rockstar is taking players back to the sun-drenched neon streets of Vice City, but the scope has expanded massively beyond the urban core. Set in the fictional state of Leonida, the map encompasses vast Everglades swamplands, rural countryside towns, and coastal paradises.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>

            {/* Footer */}
              <section
                     className=" h-fit w-[100%]  flex justify-center border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover"
                     style={{ backgroundImage: `url(${lastimg})` }}
                   >
                     <div className=" h-fit w-[85%] flex justify-between max-[1024px]:flex-col  ">
                       <div className="h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-[100%]">
                         <img src={nav2} alt="" className="w-50" />
                         <p className="text-white text-justify cursor-pointer">
                           Step into the future of gaming with eGame Store. Explore top-tier
                           reviews, news, and in-depth analysis on the latest and greatest
                           games. Join the gaming community now to get exclusive content and
                           features.
                         </p>
             
                         <span className="flex text-[30px] gap-8 mt-4">
                           <FaFacebookSquare className="text-blue-500" />
                           <FaInstagramSquare className="text-[rgba(221,42,123)]" />
                           <FaSquareXTwitter className="text-white" />
                           <IoLogoYoutube className="text-red-500" />
                         </span>
                       </div>
                       <div className="w-[55%] flex max-[1024px]:grid-cols-2 max-[1024px]:grid max-[1024px]:w-[100%] max-[523px]:grid-cols-1">
                         <div className=" w-[25%] pt-10 max-[1024px]:w-[50%] ">
                           <ul className="text-white leading-8">
                             <h1 className="font-bold text-[rgba(255,105,22,1)] text-[20px]">
                               Quick Links
                             </h1>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/">Home</Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               Gift Cards{" "}
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/Deals">Deals</Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               <Link to="/Blog">Blog</Link>
                             </li>
                           </ul>
                         </div>
             
                         <div className=" w-[25%] pt-10 max-[1024px]:w-[50%]">
                           <ul className="text-white leading-8">
                             <h1 className="font-bold text-[rgba(255,105,22,1)] text-[20px]">
                               Resources
                             </h1>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/Trendinggames"> Trending Games</Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               <Link to="/Upcoming">Upcoming Games</Link>
                             </li>
                             <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/Contactus'>Contact us</Link></li>
                              <li className='hover:text-[rgba(255,105,22,1)] cursor-pointer'><Link to='/FAQ'>FAQ</Link></li>
                           </ul>
                         </div>
             
                         <div className=" w-[25%] pt-10 max-[1024px]:w-[50%]">
                           <ul className="text-white leading-8">
                             <h1 className="font-bold text-[rgba(255,105,22,1)] text-[20px]">
                               Explore
                             </h1>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/Pcgames">PC Games</Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/PlayStation"> PlayStations </Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               <Link to="/Nintendo">Nintendo </Link>
                             </li>
                             <li className="hover:text-[rgba(255,105,22,1)] cursor-pointer">
                               {" "}
                               <Link to="/Xbox">Xbox </Link>{" "}
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </section>
             
                   {/* section 11 */}
                   <section
                     className="h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover"
                     style={{ backgroundImage: `url(${lastimg})` }}
                   >
                     <h1 className="text-white">
                       © 2026 EGameStore.com — All Rights{" "}
                       <span> Terms of Service , Privacy Policy</span>
                     </h1>
                   </section>
       


                </div>
    );
}