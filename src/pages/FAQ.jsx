import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsChatDots, BsEnvelope, BsTelephone } from 'react-icons/bs';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqQuestions = [
        {
            question: "Do you offer discounts or special deals?",
            answer: "Yes! We frequently offer seasonal discounts, promotional bundles, and special CDKey deals across our entire library. Make sure to check our 'Deals' section regularly for active offers."
        },
        {
            question: "How do I create an account?",
            answer: "Creating an account is quick and easy. Click on the sign-in / profile icon at the top right corner of the store, select register, fill in your credentials, and you'll be ready to start purchasing and pre-ordering games instantly."
        },
        {
            question: "How can I recover my password?",
            answer: "If you've forgotten your password, navigate to the Sign In page and click on the 'Forgot Password' link. Enter your registered email address, and we will send you secure instructions to reset your password immediately."
        },
        {
            question: "What are the rewards and how do I claim them?",
            answer: "Our reward system allows you to earn loyalty points on every game purchase and pre-order. Points can be accumulated and redeemed directly at checkout for exclusive store discounts and free gift cards."
        },
        {
            question: "How do I purchase in-game currency?",
            answer: "You can purchase gift cards and in-game currency bundles by navigating to our 'Gift Cards' section. Simply select your desired platform, complete the secure checkout process, and your code will be delivered instantly."
        }
    ];

    const handleStartChat = () => {
        alert("Connecting you to eGame Store Live Support Agent... (Available 24/7)");
    };

    const handleSendEmail = () => {
        window.location.href = "mailto:Egamestore@gmail.com?subject=Support%20Inquiry";
    };

    const handleCallSupport = () => {
        window.location.href = "tel:00000000000";
    };

    return (
        <div className="w-full bg-[rgba(45,50,56,1)] min-h-screen text-white flex flex-col justify-between">
            <div className="w-full pb-20">
                
                {/* FAQ Header Banner Section */}
                <div className="w-[85%] max-w-[1300px] mx-auto mt-8 bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-8 text-center shadow-xl">
                    <h1 className="text-3xl font-extrabold text-[rgba(255,105,22,1)] mb-3">Frequently Asked Questions</h1>
                    <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        This page provides quick answers to the most common questions about our gaming platform.<br />
                        Find information about your account, payments, rewards, and more in one place.
                    </p>
                </div>

                {/* Popular Questions Section */}
                <div className="w-[85%] max-w-[1000px] mx-auto mt-12">
                    <h2 className="text-xl font-bold text-center mb-8 text-white">Popular Questions</h2>

                    <div className="flex flex-col gap-4">
                        {faqQuestions.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-xl overflow-hidden shadow-md transition-all"
                            >
                                <div 
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center p-5 cursor-pointer select-none hover:bg-gray-800/40"
                                >
                                    <span className="font-semibold text-sm sm:text-base text-white">{item.question}</span>
                                    {openIndex === index ? (
                                        <IoIosArrowUp className="text-[rgba(255,105,22,1)] text-xl shrink-0" />
                                    ) : (
                                        <IoIosArrowDown className="text-gray-400 text-xl shrink-0" />
                                    )}
                                </div>

                                {openIndex === index && (
                                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-300 border-t border-gray-800 leading-relaxed">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Need Help Section */}
                <div className="w-[85%] max-w-[1100px] mx-auto mt-20 text-center">
                    <h2 className="text-2xl font-bold mb-2 text-white">Still Need Help?</h2>
                    <p className="text-xs sm:text-sm text-gray-400 mb-8">Can't find what you're looking for? Our support team is here to help.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Live Chat Card  */}
                        <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg">
                            <div className="text-purple-400 text-3xl mb-2">
                                <BsChatDots />
                            </div>
                            <h3 className="font-bold text-base text-white">Live Chat</h3>
                            <p className="text-xs text-gray-400 mt-1 mb-6">Available 24/7</p>
                            <button 
                                onClick={handleStartChat}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-xl text-xs shadow cursor-pointer transition-all w-full"
                            >
                                Start Chat
                            </button>
                        </div>

                        {/* Email Support Card */}
                        <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg">
                            <div className="text-cyan-400 text-3xl mb-2">
                                <BsEnvelope />
                            </div>
                            <h3 className="font-bold text-base text-white">Email Support</h3>
                            <p className="text-xs text-gray-400 mt-1 mb-6">Response within 24h</p>
                            <button 
                                onClick={handleSendEmail}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-2 rounded-xl text-xs shadow cursor-pointer transition-all w-full"
                            >
                                Send Email
                            </button>
                        </div>

                        {/* Phone Support Card */}
                        <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg">
                            <div className="text-yellow-400 text-3xl mb-2">
                                <BsTelephone />
                            </div>
                            <h3 className="font-bold text-base text-white">Phone Support</h3>
                            <p className="text-xs text-gray-400 mt-1 mb-6">Mon-Fri 9AM-5PM</p>
                            <button 
                                onClick={handleCallSupport}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-xl text-xs shadow cursor-pointer transition-all w-full"
                            >
                                Call Now
                            </button>
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