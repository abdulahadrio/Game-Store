import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import nav2 from '../assets/nav.png'; 
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [deleteModalItem, setDeleteModalItem] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Yahan 'cartItems' key use ki hai jo Allgames.jsx ke sath match karti hai
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const formattedCart = savedCart.map(item => ({
            ...item,
            quantity: Math.max(1, item.quantity || 1)
        }));
        setCartItems(formattedCart);
    }, []);

    const updateLocalStorage = (updatedItems) => {
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleIncrease = (id) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        updateLocalStorage(updated);
    };

    const handleDecrease = (id) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity > 1 ? item.quantity - 1 : 1;
                return { ...item, quantity: newQty };
            }
            return item;
        });
        updateLocalStorage(updated);
    };

    const confirmDelete = () => {
        if (!deleteModalItem) return;
        const updated = cartItems.filter(item => item.id !== deleteModalItem.id);
        updateLocalStorage(updated);
        setDeleteModalItem(null);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => {
            const cleanPrice = parseFloat(String(item.price).replace('$', '')) || 0;
            return acc + (cleanPrice * item.quantity);
        }, 0).toFixed(2);
    };

    const subtotalVal = calculateSubtotal();
    const shipping = cartItems.length > 0 ? 9.50 : 0.00;
    const totalVal = (parseFloat(subtotalVal) + shipping).toFixed(2);

    const handleProceedCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate('/BuyNow', { state: { product: cartItems[0], cart: cartItems, total: totalVal } });
    };

    return (
        <div className="w-full min-h-screen bg-[rgba(45,50,56,1)] text-white flex flex-col justify-between">
            <div className='w-full pb-16'>
                
                <div className='flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4'>
                    <Link to='/'>
                        <button className='flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]'> 
                            Home <IoIosArrowForward className='relative top-0.5'/> 
                        </button>
                    </Link>
                    <span className='text-gray-300 font-medium'>Shopping Cart</span>
                </div>

                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <h1 className="text-2xl font-bold mb-6 text-white">Your Shopping Cart</h1>

                    {cartItems.length === 0 ? (
                        <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-12 text-center text-gray-400">
                            <p className="text-base mb-4">Your cart is currently empty.</p>
                            <Link to="/">
                                <button className="bg-[rgba(255,105,22,1)] text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer">
                                    Start Shopping
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            
                            <div className="lg:col-span-8 space-y-4">
                                {cartItems.map((item) => {
                                    const itemPrice = parseFloat(String(item.price).replace('$', '')) || 0;
                                    const itemSubtotal = (itemPrice * item.quantity).toFixed(2);

                                    return (
                                        <div 
                                            key={item.id} 
                                            className="bg-[rgba(35,40,46,1)] border border-gray-700 p-4 sm:p-5 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative"
                                        >
                                            <button 
                                                onClick={() => setDeleteModalItem(item)}
                                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                                                title="Remove item"
                                            >
                                                <RiDeleteBin6Line className="text-lg" />
                                            </button>

                                            <div className="flex items-center gap-4 pr-10">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title || item.name} 
                                                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-gray-700 bg-gray-800 shrink-0" 
                                                />
                                                <div>
                                                    <h3 className="font-bold text-sm sm:text-base text-white max-w-xs">{item.title || item.name}</h3>
                                                    <p className="text-xs text-[rgba(255,105,22,1)] font-mono mt-0.5">${itemPrice.toFixed(2)}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        onClick={() => handleDecrease(item.id)} 
                                                        className="w-7 h-7 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center text-xs cursor-pointer text-white"
                                                    >
                                                        <FaMinus />
                                                    </button>
                                                    <span className="text-xs font-bold px-3 py-1 bg-gray-800 border border-gray-700 rounded-lg font-mono">
                                                        {item.quantity}
                                                    </span>
                                                    <button 
                                                        onClick={() => handleIncrease(item.id)} 
                                                        className="w-7 h-7 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center text-xs cursor-pointer text-white"
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>

                                                <div className="text-right min-w-[70px]">
                                                    <span className="text-xs text-gray-400 block sm:hidden">Subtotal:</span>
                                                    <span className="font-mono font-bold text-sm text-white">${itemSubtotal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="lg:col-span-4">
                                <div className="bg-[rgba(35,40,46,1)] border border-gray-700 p-6 rounded-2xl shadow-xl sticky top-24">
                                    <h3 className="text-lg font-bold mb-4 text-white pb-3 border-b border-gray-700">Cart Summary</h3>
                                    
                                    <div className="flex justify-between text-xs text-gray-300 mb-3">
                                        <span>Items Subtotal</span>
                                        <span className="font-mono font-bold">${subtotalVal}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-300 mb-4 pb-4 border-b border-gray-700">
                                        <span>Standard Shipping</span>
                                        <span className="font-semibold text-green-400">${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold text-white mb-6">
                                        <span>Total Amount</span>
                                        <span className="text-[rgba(255,105,22,1)] font-mono">${totalVal}</span>
                                    </div>

                                    <button 
                                        onClick={handleProceedCheckout}
                                        className="w-full bg-[rgba(255,105,22,1)] hover:opacity-90 text-white font-bold py-3.5 rounded-xl text-sm transition-all cursor-pointer shadow-lg"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>

            {deleteModalItem && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
                    <div className="bg-[rgba(35,40,46,1)] border border-gray-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
                        <h3 className="text-lg font-bold text-white mb-2">Remove Item?</h3>
                        <p className="text-xs text-gray-300 mb-6">
                            Are you sure you want to remove <span className="font-semibold text-[rgba(255,105,22,1)]">"{deleteModalItem.title || deleteModalItem.name}"</span> from your cart?
                        </p>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setDeleteModalItem(null)}
                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-xl text-xs cursor-pointer transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={confirmDelete}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-xs cursor-pointer transition-colors shadow-md"
                            >
                                Yes, Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                </div>
            </section>
        </div>
    );
}