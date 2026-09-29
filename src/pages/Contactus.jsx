import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsSend, BsPaperclip } from 'react-icons/bs';
import { RiTicketLine, RiUserLine, RiShoppingBag3Line, RiChatPollLine } from 'react-icons/ri';
import nav2 from '../assets/nav2.avif';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Contactus() {
    const [viewMode, setViewMode] = useState('form'); // 'form' or 'chat'
    const [ticketData, setTicketData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: 'Order Issue',
        subject: '',
        message: '',
        attachment: null
    });

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [ticketStatus, setTicketStatus] = useState('Active');
    const [currentTicketId, setCurrentTicketId] = useState('#SUP-2026-7891');

    // Sidebar accordion states for Ticket Details
    const [isTicketInfoOpen, setIsTicketInfoOpen] = useState(true);
    const [isUserDetailOpen, setIsUserDetailOpen] = useState(false);
    const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

    const [previousTickets, setPreviousTickets] = useState([
        { id: '#SUP-2024-7891', order: '43131', date: '22-09-2024', status: 'Closed' },
        { id: '#SUP-2024-5217', order: '52178', date: '30-09-2024', status: 'Closed' },
        { id: '#SUP-2024-4212', order: '42123', date: '01-10-2024', status: 'Closed' },
        { id: '#SUP-2024-6743', order: '67432', date: '01-10-2024', status: 'Closed' },
        { id: '#SUP-2024-3128', order: '31287', date: '02-10-2024', status: 'Closed' },
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const savedTickets = JSON.parse(localStorage.getItem('userTickets')) || previousTickets;
        setPreviousTickets(savedTickets);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!ticketData.name || !ticketData.email || !ticketData.message) {
            alert("Please fill in all required fields!");
            return;
        }

        const newId = '#SUP-2026-' + Math.floor(1000 + Math.random() * 9000);
        setCurrentTicketId(newId);
        setTicketStatus('Active');

        const orderNum = ticketData.subject || '12345';
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Sabse pehle user ka message aayega, phir Alex support ka reply
        const initialMsgs = [
            { sender: 'user', text: ticketData.message, time: currentTime },
            { sender: 'support', text: `Hello ${ticketData.name}! I'm Alex from support. I received your message regarding Order #${orderNum}. We are looking into it right away.`, time: currentTime }
        ];

        setMessages(initialMsgs);

        const newTicketEntry = {
            id: newId,
            order: orderNum,
            date: new Date().toLocaleDateString(),
            status: 'Active',
            messages: initialMsgs
        };

        const updatedList = [newTicketEntry, ...previousTickets];
        setPreviousTickets(updatedList);
        localStorage.setItem('userTickets', JSON.stringify(updatedList));

        setViewMode('chat');
    };

    const handleUserChatSubmit = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const userMsgText = newMessage;
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Pehle user ka naya message add hoga
        setMessages(prev => [
            ...prev,
            { sender: 'user', text: userMsgText, time: currentTime }
        ]);
        setNewMessage('');

        // Phir Alex ka reply aayega
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { sender: 'support', text: `Alex here: Thanks for the update regarding "${userMsgText}". We will update you shortly.`, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
            ]);
        }, 1200);
    };

    const handleResolveTicket = () => {
        setTicketStatus('Closed');
        const updated = previousTickets.map((t) => t.id === currentTicketId ? { ...t, status: 'Closed' } : t);
        setPreviousTickets(updated);
        localStorage.setItem('userTickets', JSON.stringify(updated));
        alert("Ticket has been marked as resolved and closed!");
    };

    const handleOpenExistingChat = (ticket) => {
        setCurrentTicketId(ticket.id);
        setTicketStatus(ticket.status);
        if (ticket.messages && ticket.messages.length > 0) {
            setMessages(ticket.messages);
        } else {
            setMessages([
                { sender: 'support', text: `Hello! Resuming chat for Ticket ${ticket.id} (Order #${ticket.order}). How can we help?`, time: '10:00 AM' }
            ]);
        }
        setViewMode('chat');
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
                    <span className='text-white font-medium'>Contact us</span>
                </div>

                <div className='w-[90%] lg:w-[85%] mx-auto'>
                    
                    {viewMode === 'form' ? (
                        <div>
                            {/* New Ticket Form Section */}
                            <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-8 shadow-2xl mb-12'>
                                <h1 className='text-2xl font-extrabold text-white mb-6'>New Ticket</h1>

                                <form onSubmit={handleSendMessage} className='flex flex-col gap-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label className='block text-xs font-semibold text-gray-300 mb-2'>Name</label>
                                            <input 
                                                type='text' 
                                                value={ticketData.name}
                                                onChange={(e) => setTicketData({...ticketData, name: e.target.value})}
                                                className='w-full bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)]'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-xs font-semibold text-gray-300 mb-2'>Email Address</label>
                                            <input 
                                                type='email' 
                                                value={ticketData.email}
                                                onChange={(e) => setTicketData({...ticketData, email: e.target.value})}
                                                className='w-full bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)]'
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className='block text-xs font-semibold text-gray-300 mb-2'>Select Reason</label>
                                        <select 
                                            value={ticketData.reason}
                                            onChange={(e) => setTicketData({...ticketData, reason: e.target.value})}
                                            className='w-full bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)] cursor-pointer'
                                        >
                                            <option value='Order Issue'>Order Issue</option>
                                            <option value='Payment Failure'>Payment Failure</option>
                                            <option value='CDKey Activation'>CDKey Activation</option>
                                            <option value='Account & Rewards'>Account & Rewards</option>
                                            <option value='Other'>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className='block text-xs font-semibold text-gray-300 mb-2'>Subject / Order ID</label>
                                        <input 
                                            type='text' 
                                            value={ticketData.subject}
                                            onChange={(e) => setTicketData({...ticketData, subject: e.target.value})}
                                            className='w-full bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)]'
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-xs font-semibold text-gray-300 mb-2'>Attachment</label>
                                        <label className='flex items-center gap-3 w-full bg-[rgba(45,50,56,1)] border border-dashed border-gray-600 rounded-xl p-4 text-sm text-gray-400 cursor-pointer hover:border-[rgba(255,105,22,1)] transition-colors'>
                                            <BsPaperclip className='text-lg text-[rgba(255,105,22,1)] shrink-0'/>
                                            <span className='truncate'>{ticketData.attachment ? ticketData.attachment.name : 'Click here to upload or drop files here'}</span>
                                            <input 
                                                type='file' 
                                                onChange={(e) => setTicketData({...ticketData, attachment: e.target.files[0]})}
                                                className='hidden' 
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <label className='block text-xs font-semibold text-gray-300 mb-2'>Message</label>
                                        <textarea 
                                            rows='4'
                                            value={ticketData.message}
                                            onChange={(e) => setTicketData({...ticketData, message: e.target.value})}
                                            className='w-full bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)]'
                                            required
                                        ></textarea>
                                    </div>

                                    <div className='flex justify-center mt-4'>
                                        <button 
                                            type='submit'
                                            className='bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold px-12 py-3 rounded-xl text-sm shadow-lg cursor-pointer transition-all'
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Previous Tickets Table Section */}
                            <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-xl'>
                                <h2 className='text-xl font-bold text-white mb-4'>Previous Tickets</h2>
                                <div className='overflow-x-auto'>
                                    <table className='w-full text-left text-xs text-gray-300'>
                                        <thead className='border-b border-gray-700 text-gray-400 uppercase'>
                                            <tr>
                                                <th className='py-3 px-4'>Ticket</th>
                                                <th className='py-3 px-4'>Order</th>
                                                <th className='py-3 px-4'>Created At</th>
                                                <th className='py-3 px-4'>Status</th>
                                                <th className='py-3 px-4'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {previousTickets.map((ticket, index) => (
                                                <tr key={index} className='border-b border-gray-800 hover:bg-gray-800/40'>
                                                    <td className='py-3 px-4 font-mono text-[rgba(255,105,22,1)]'>{ticket.id}</td>
                                                    <td className='py-3 px-4 font-mono'>{ticket.order}</td>
                                                    <td className='py-3 px-4'>{ticket.date}</td>
                                                    <td className='py-3 px-4'>
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                                                            ticket.status === 'Active' 
                                                                ? 'bg-green-900/40 text-green-400 border border-green-500/40' 
                                                                : 'bg-gray-800 text-gray-400 border border-gray-700'
                                                        }`}>
                                                            {ticket.status}
                                                        </span>
                                                    </td>
                                                    <td className='py-3 px-4'>
                                                        <button 
                                                            onClick={() => handleOpenExistingChat(ticket)}
                                                            className='flex items-center gap-1 bg-[rgba(255,105,22,0.2)] text-[rgba(255,105,22,1)] hover:bg-[rgba(255,105,22,1)] hover:text-white px-3 py-1 rounded-lg font-bold text-[10px] cursor-pointer transition-all'
                                                        >
                                                            <RiChatPollLine /> Open Chat
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='mb-4'>
                                <button 
                                    onClick={() => setViewMode('form')}
                                    className='text-[rgba(255,105,22,1)] text-xs font-bold hover:underline cursor-pointer flex items-center gap-1'
                                >
                                    ← Back to Contact Form
                                </button>
                                <h1 className='text-2xl font-extrabold text-white mt-2'>Ticket Conversation</h1>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                
                                <div className='lg:col-span-2 bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-2xl flex flex-col justify-between h-[600px]'>
                                    
                                    <div className='flex items-center justify-between pb-4 border-b border-gray-700'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-full bg-[rgba(255,105,22,1)] flex items-center justify-center font-bold text-white text-lg'>
                                                A
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-white text-base'>Alex Support</h3>
                                                <span className='text-[10px] text-gray-400 font-mono'>Game Order #{ticketData.subject || '12345'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex-1 overflow-y-auto py-4 flex flex-col gap-4 pr-2'>
                                        {messages.map((msg, index) => (
                                            <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                                <div className='flex items-center gap-2 mb-1'>
                                                    {msg.sender === 'support' && <span className='text-xs font-bold text-orange-400'>Alex Support</span>}
                                                    {msg.sender === 'user' && <span className='text-xs font-bold text-gray-300'>You</span>}
                                                    <span className='text-[10px] text-gray-500'>{msg.time}</span>
                                                </div>
                                                <div className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                                                    msg.sender === 'user' 
                                                        ? 'bg-[rgba(255,105,22,1)] text-white rounded-br-none' 
                                                        : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                                                }`}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <form onSubmit={handleUserChatSubmit} className='pt-4 border-t border-gray-700 flex items-center gap-3'>
                                        <input 
                                            type='text' 
                                            placeholder='Type your message...'
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            className='flex-1 bg-[rgba(45,50,56,1)] border border-gray-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[rgba(255,105,22,1)]'
                                        />
                                        <button 
                                            type='submit'
                                            className='bg-[rgba(255,105,22,1)] hover:opacity-90 text-white p-3 rounded-xl cursor-pointer shadow-md'
                                        >
                                            <BsSend className='text-base'/>
                                        </button>
                                    </form>
                                </div>

                                <div className='bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 shadow-2xl flex flex-col justify-between h-fit'>
                                    <div>
                                        <h3 className='text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700'>Ticket Details</h3>
                                        
                                        <div className='space-y-4 text-xs'>
                                            
                                            {/* Ticket Information Dropdown */}
                                            <div className='bg-[rgba(45,50,56,1)] rounded-xl border border-gray-700 overflow-hidden'>
                                                <div 
                                                    onClick={() => setIsTicketInfoOpen(!isTicketInfoOpen)}
                                                    className='flex justify-between items-center p-3.5 cursor-pointer select-none hover:bg-gray-800/40'
                                                >
                                                    <span className='font-semibold text-gray-300 flex items-center gap-2'>
                                                        <RiTicketLine className='text-[rgba(255,105,22,1)] text-base'/> Ticket Information
                                                    </span>
                                                    {isTicketInfoOpen ? <IoIosArrowUp className='text-gray-400'/> : <IoIosArrowDown className='text-gray-400'/>}
                                                </div>

                                                {isTicketInfoOpen && (
                                                    <div className='px-3.5 pb-3.5 pt-1 border-t border-gray-800 space-y-2 text-[11px]'>
                                                        <div className='flex justify-between py-1 border-b border-gray-800/60'>
                                                            <span className='text-gray-400'>Ticket ID:</span>
                                                            <span className='font-mono text-orange-400'>{currentTicketId}</span>
                                                        </div>
                                                        <div className='flex justify-between py-1 border-b border-gray-800/60'>
                                                            <span className='text-gray-400'>Status:</span>
                                                            <span className={`font-bold ${ticketStatus === 'Active' ? 'text-green-400' : 'text-gray-400'}`}>{ticketStatus}</span>
                                                        </div>
                                                        <div className='flex justify-between py-1 border-b border-gray-800/60'>
                                                            <span className='text-gray-400'>Priority:</span>
                                                            <span className='text-yellow-400 font-semibold'>Medium</span>
                                                        </div>
                                                        <div className='flex justify-between py-1'>
                                                            <span className='text-gray-400'>Reason:</span>
                                                            <span>{ticketData.reason}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* User Details Dropdown */}
                                            <div className='bg-[rgba(45,50,56,1)] rounded-xl border border-gray-700 overflow-hidden'>
                                                <div 
                                                    onClick={() => setIsUserDetailOpen(!isUserDetailOpen)}
                                                    className='flex justify-between items-center p-3.5 cursor-pointer select-none hover:bg-gray-800/40'
                                                >
                                                    <span className='font-semibold text-gray-300 flex items-center gap-2'>
                                                        <RiUserLine className='text-[rgba(255,105,22,1)] text-base'/> User Details
                                                    </span>
                                                    {isUserDetailOpen ? <IoIosArrowUp className='text-gray-400'/> : <IoIosArrowDown className='text-gray-400'/>}
                                                </div>

                                                {isUserDetailOpen && (
                                                    <div className='px-3.5 pb-3.5 pt-1 border-t border-gray-800 space-y-2 text-[11px]'>
                                                        <div className='py-1 border-b border-gray-800/60'>
                                                            <span className='text-gray-400 block'>Name:</span>
                                                            <span className='text-white font-bold'>{ticketData.name || 'CyberGamer_X'}</span>
                                                        </div>
                                                        <div className='py-1 border-b border-gray-800/60'>
                                                            <span className='text-gray-400 block'>Email:</span>
                                                            <span className='text-gray-300'>{ticketData.email || 'user@example.com'}</span>
                                                        </div>
                                                        <div className='py-1'>
                                                            <span className='text-gray-400 block'>Phone:</span>
                                                            <span className='text-gray-300'>{ticketData.phone || '+92 300 0000000'}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Order Details Dropdown */}
                                            <div className='bg-[rgba(45,50,56,1)] rounded-xl border border-gray-700 overflow-hidden'>
                                                <div 
                                                    onClick={() => setIsOrderDetailsOpen(!isOrderDetailsOpen)}
                                                    className='flex justify-between items-center p-3.5 cursor-pointer select-none hover:bg-gray-800/40'
                                                >
                                                    <span className='font-semibold text-gray-300 flex items-center gap-2'>
                                                        <RiShoppingBag3Line className='text-[rgba(255,105,22,1)] text-base'/> Order Details
                                                    </span>
                                                    {isOrderDetailsOpen ? <IoIosArrowUp className='text-gray-400'/> : <IoIosArrowDown className='text-gray-400'/>}
                                                </div>

                                                {isOrderDetailsOpen && (
                                                    <div className='px-3.5 pb-3.5 pt-1 border-t border-gray-800 space-y-2 text-[11px]'>
                                                        <div className='py-1'>
                                                            <span className='text-gray-400 block'>Given Order Number:</span>
                                                            <span className='text-white font-mono font-bold'>Order #{ticketData.subject || '12345'}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    {ticketStatus === 'Active' && (
                                        <button 
                                            onClick={handleResolveTicket}
                                            className='mt-8 w-full bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold py-3 rounded-xl text-xs shadow-lg cursor-pointer transition-all'
                                        >
                                            Make as resolved
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>
                    )}

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