
     import React, { useRef, useState, useEffect } from "react";

import section1img from "../assets/section1.png";
import { Link, useNavigate } from "react-router-dom";
import section1p1 from "../assets/section1p1.png";
import section1p2 from "../assets/section1p2.png";
import section1p3 from "../assets/section1p3.png";
import section1p4 from "../assets/section1p4.png";
import section2p1 from "../assets/section2p1.png";
import section2p2 from "../assets/section2p2.png";
import section2p3 from "../assets/section2p3.png";
import section2p4 from "../assets/section2p4.png";
import section2p5 from "../assets/section2p5.png";
import section2p6 from "../assets/section2p6.png";
import { IoIosArrowForward } from "react-icons/io";

import card1 from "../assets/game23.avif";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/nin6.jpg";
import card5 from "../assets/game10.avif";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.avif";
import card10 from "../assets/card10.avif";
import card11 from "../assets/card11.avif";
import card12 from "../assets/card12.avif";
import card13 from "../assets/card13.avif";
import card14 from "../assets/card14.avif";
import card15 from "../assets/card15.avif";
import card16 from "../assets/card16.avif";
import card17 from "../assets/card17.avif";
import card18 from "../assets/card18.avif";
import card19 from "../assets/card19.avif";
import card20 from "../assets/card20.avif";

import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import section4img from "../assets/section4.png";
import tcard1 from "../assets/tcard1.png";
import tcard2 from "../assets/tcard2.png";
import tcard3 from "../assets/tcard3.png";
import tcard4 from "../assets/tcard4.png";
import tcard5 from "../assets/tcard5.png";
import tcard6 from "../assets/tcard6.png";
import tcard7 from "../assets/tcard7.avif";
import tcard8 from "../assets/tcard8.avif";
import { FaLongArrowAltRight } from "react-icons/fa";
import section4p1 from "../assets/section4p1.avif";
import section4p2 from "../assets/section4p2.avif";

import upcoming1 from "../assets/upcoming1.png";
import upcoming2 from "../assets/upcoming2.png";
import upcoming3 from "../assets/upcoming3.png";
import upcoming4 from "../assets/upcoming4.png";
import upcoming5 from "../assets/upcoming5.png";
import upcoming6 from "../assets/upcoming6.avif";
import upcoming7 from "../assets/upcoming7.avif";
import upcoming8 from "../assets/upcoming8.avif";
import { SlCalender } from "react-icons/sl";

import section7 from "../assets/section7.png";

import section8m1 from "../assets/section8.1.avif";
import section8p1 from "../assets/section8.p1.png";
import section8m2 from "../assets/section8m2.avif";
import section8p2 from "../assets/section8p2.png";
import section8m3 from "../assets/section8m3.avif";
import section8p3 from "../assets/section8p3.png";

import section9p1 from "../assets/section9.1.avif";
import section9p2 from "../assets/section9.2.avif";
import section9p3 from "../assets/section9.3.avif";
import section9p4 from "../assets/section9.4.avif";
import section9p5 from "../assets/section9.5.avif";
import section9p6 from "../assets/section9.6.avif";
import section9p7 from "../assets/section9.7.avif";
import section9p8 from "../assets/section9.8.avif";
import section9p9 from "../assets/section9.9.avif";
import section9p10 from "../assets/section9.10.avif";
import section9p11 from "../assets/section9.11.avif";
import section9p12 from "../assets/section9.12.avif";
import section9p13 from "../assets/section9.13.avif";

import nav2 from "../assets/nav2.avif";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import lastimg from "../assets/last.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const scrollRef3 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);
  const section4ScrollRef = useRef(null);

  const totalDots = 4;
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);
  const [activeIndex6, setActiveIndex6] = useState(0);

  const [dataIndex, setDataIndex] = useState(0);

  const [sec9Index, setSec9Index] = useState(0);
  const section9Portions = [
    {
      id: 1,
      title:
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
      bigImg: section9p1,
      smallImgs: [section9p5, section9p2, section9p3, section9p4],
      customTexts: [
        "Polyphony Digital Unveils Gran Turismo 7 Spec IV: Autumn Ring Returns After 13 Years, Sportsland SUGO Debut & 12 New Cars Detailed",
        "Motorsport history and pure driving nostalgia are colliding in spectacular fashion! Developer Polyphony Digital and publisher Sony Interactive Entertainment have officially pulled back the curtain on the next massive milestone update",
        "Capping off months of community speculation, Polyphony Digital confirmed that Spec IV will deliver the triumphant return of the fan-favorite fictional circuit Autumn Ring after a $13\text{-year}$ absence from the franchise. Alongside this nostalgic",
        "The massive Spec IV expansion will deploy in two distinct phases before the end of $2026$: Part 1 launches in October 2026,",
      ],
    },
    {
      id: 2,
      title:
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
      bigImg: section9p2,
      smallImgs: [section9p6, section9p7, section9p8, section9p9],
      customTexts: [
        "Polyphony Digital is adopting a phased release model to deliver an unprecedented wave of content throughout the autumn and holiday seasons",
        "Spec IV Part 1 (October 2026): Debuts the laser-scanned real-world Sportsland SUGO circuit, introduces the first batch of $6text{ new vehicles}$, unlocks the Vintage Dealership, and debuts the Car Concierge concierge ordering system.",
        "Delivers the legendary return of Autumn Ring (original layout and all-new expanded variant), adds the second batch of $6text{ new vehicles}$, and introduces Family Mode, Shuffle Races, and Online",
        " Polyphony Digital confirmed that GT7 will include the authentic, classic layout faithful to its original technical geometry, alongside a vastly expanded, modernized variant built to accommodate modern high-speed GT3 and prototype race machinery.",
      ],
    },
    {
      id: 3,
      title:
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
      bigImg: section9p3,
      smallImgs: [section9p10, section9p11, section9p12, section9p13],
      customTexts: [
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
        "A brand-new showroom tab dedicated exclusively to historic classics and heritage production cars that are no longer offered as new vehicles inside Brand Central.",
        " High-tier collectors will have room to grow as the overall Collector Level ceiling is officially expanded with exclusive aesthetic and personalization unlockables.",
        "Fresh driving trial tests designed to hone throttle control and racing line precision across Sportsland SUGO.",
      ],
    },
    {
      id: 4,
      title:
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
      bigImg: section9p4,
      smallImgs: [section9p1, section9p13, section9p8, section9p2],
      customTexts: [
        " Dedicated competitive drift scoring lobbies and global drift leaderboards where sideways angle, transition speed, and clipping point proximity determine the winners.",
        "For hardcore sim racers seeking ruthless AI challenges, an extreme difficulty tier is being introduced into the game event roster to test elite racecraft.",
        "void credit card checkout errors or sudden storefront gateway delays on major update days. ",
        "void credit card checkout errors or sudden storefront gateway delays on major update days. ",
      ],
    },
    {
      id: 5,
      title:
        "void credit card checkout errors or sudden storefront gateway delays on major update days.",
      bigImg: section9p5,
      smallImgs: [section9p6, section9p1, section9p11, section9p3],
      customTexts: [
        "Protect your gaming profile with safe, verified payment pathways that bypass risky third-party resellers.",
        "Autumn Ring last appeared in Gran Turismo 6 on PlayStation 3 in $2013$, making its GT7 return its first appearance ",
        "Autumn Ring last appeared in Gran Turismo 6 on PlayStation 3 in $2013$, making its GT7 return its first appearance ",
        "void credit card checkout errors or sudden storefront gateway delays on major update days. ",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSec9Index((prev) => (prev + 1) % section9Portions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [section9Portions.length]);

  const uniqueSec9MobileImages = Array.from(
    new Set(
      section9Portions.flatMap((item) => [item.bigImg, ...item.smallImgs]),
    ),
  );

  const reviewsCycleData = [
    {
      id: 1,
      name: "Hannah Schmitt",
      review:
        "Get ready to level up your fun! This site delivers thrilling games, non-stop updates, and a smooth, blazing-fast experience that keeps you hooked for hours.",
      bgCard: section8m1,
      avatar: section8p1,
      rating: 5,
    },
    {
      id: 2,
      name: "Leo",
      review:
        "From buying games to joining tournaments, everything is just seamless.",
      bgCard: section8m1,
      avatar: section8p3,
      rating: 4,
    },
    {
      id: 3,
      name: "Alien Machal",
      review:
        "Great interface, smooth animations — it really feels like a gamer’s paradise!",
      bgCard: section8m1,
      avatar: section8p2,
      rating: 4,
    },
  ];

  const staticLeftCard = {
    name: "Leo",
    review:
      "From buying games to joining tournaments, everything is just seamless.",
    bgCard: section8m3,
    avatar: section8p3,
    rating: 4,
  };

  const staticRightCard = {
    name: "Alien Machal",
    review:
      "Great interface, smooth animations — it really feels like a gamer’s paradise!",
    bgCard: section8m2,
    avatar: section8p2,
    rating: 4,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % reviewsCycleData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviewsCycleData.length]);

  const updateDotsOnScroll = (container, setActive, count = totalDots) => {
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActive(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const nextIndex = Math.min(
      count - 1,
      Math.max(0, Math.round(ratio * (count - 1))),
    );
    setActive(nextIndex);
  };

  const scrollPage = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount = clientWidth;
      ref.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (ref, index, setActive, count = totalDots) => {
    if (ref.current) {
      const { scrollWidth, clientWidth } = ref.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const targetScroll = count === 1 ? 0 : (maxScroll / (count - 1)) * index;
      ref.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActive(index);
    }
  };

  useEffect(() => {
    const el3 = scrollRef3.current;
    const el5 = scrollRef5.current;
    const el6 = scrollRef6.current;

    const onScroll3 = () => updateDotsOnScroll(el3, setActiveIndex3, totalDots);
    const onScroll5 = () => updateDotsOnScroll(el5, setActiveIndex5, totalDots);
    const onScroll6 = () => updateDotsOnScroll(el6, setActiveIndex6, 4);

    if (el3) el3.addEventListener("scroll", onScroll3, { passive: true });
    if (el5) el5.addEventListener("scroll", onScroll5, { passive: true });
    if (el6) el6.addEventListener("scroll", onScroll6, { passive: true });

    return () => {
      if (el3) el3.removeEventListener("scroll", onScroll3);
      if (el5) el5.removeEventListener("scroll", onScroll5);
      if (el6) el6.removeEventListener("scroll", onScroll6);
    };
  }, []);

  const scrollSection4 = (direction) => {
    if (section4ScrollRef.current) {
      const { scrollLeft, clientWidth } = section4ScrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      section4ScrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (section4ScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          section4ScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          section4ScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          section4ScrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef6.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef6.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 0) return;

        const progress = scrollLeft / maxScroll;
        const currentIdx = Math.round(progress * 3);

        setActiveIndex6(currentIdx);
      }
    };

    const refCurrent = scrollRef6.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const cardsData = [
    {
      id: 1,
      image: card1,
      title: "Fortnite",
      discount: "15%",
      stars: '★★★★☆',
      rating: "81",
      discounte: "60$",
      price: "51$",
      genre: "action",
    },
    {
      id: 2,
      image: card2,
      title: "Cyberpunk",
      discount: "soon",
      stars: '★★★☆☆',
      rating: "60",
      discounte: "70$",
      price: "70$",
      genre: "action",
    },
    {
      id: 3,
      image: card3,
      title: "Elden Ring",
      discount: "5%",
      stars: '★★★★☆',
      rating: "81",
      discounte: "100$",
      price: "95$",
      genre: "adventure",
    },
    {
      id: 4,
      image: card4,
      title: "FIFA 24",
      discount: "soon",
      stars: '★★★★☆',
      rating: "81",
      discounte: "100$",
      price: "100$",
      genre: "racing",
    },
    {
      id: 5,
      image: card5,
      title: "HumanKind",
      discount: "30%",
      stars: '★★★☆☆',
      rating: "40",
      discounte: "100$",
      price: "70$",
      genre: "simulation",
    },
    {
      id: 6,
      image: card6,
      title: "Valorant",
      discount: "15%",
      stars: '★★★★☆',
      rating: "81",
      discounte: "63$",
      price: "52$",
      genre: "action",
    },
    {
      id: 7,
      image: card7,
      title: "Call of Duty",
      discount: "soon",
      stars: '★★★★☆',
      rating: "81",
      discounte: "90$",
      price: "90$",
      genre: "action",
    },
    {
      id: 8,
      image: card8,
      title: "GTA V",
      discount: "5%",
      stars: '★★★★☆',
      rating: "81",
      discounte: "85$",
      price: "81$",
      genre: "action",
    },
    {
      id: 9,
      image: card9,
      title: "The Crew",
      discount: "ended",
      stars: '★★★☆☆',
      rating: "62",
      discounte: null,
      price: "95$",
      genre: "racing",
    },
    {
      id: 10,
      image: card10,
      title: "Chef Life",
      discount: "ended",
      stars: '★☆☆☆☆',
      rating: "16",
      discounte: null,
      price: "105$",
      genre: "simulation",
    },
    {
      id: 11,
      image: card11,
      title: "Garden Life",
      discount: "15%",
      stars: '★★★★★',
      rating: "100",
      discounte: "68$",
      price: "53$",
      genre: "simulation",
    },
    {
      id: 12,
      image: card12,
      title: "Tenis World",
      discount: "15%",
      stars: '★★★★☆',
      rating: "80",
      discounte: "60$",
      price: "51$",
      genre: "simulation",
    },
    {
      id: 13,
      image: card13,
      title: "TT 3",
      discount: "8%",
      stars: '★★★☆☆',
      rating: "67",
      discounte: "98$",
      price: "91$",
      genre: "racing",
    },
    {
      id: 14,
      image: card14,
      title: "Chronobyl",
      discount: "soon",
      stars: '★★★★☆',
      rating: "78",
      discounte: "70$",
      price: "70$",
      genre: "adventure",
    },
    {
      id: 15,
      image: card15,
      title: "Sucide",
      discount: "15%",
      stars: '★★★★☆',
      rating: "81",
      discounte: "76$",
      price: "64$",
      genre: "action",
    },
    {
      id: 16,
      image: card16,
      title: "SuperMarket",
      discount: "15%",
      stars: '★★★☆☆',
      rating: "61",
      discounte: "120$",
      price: "108$",
      genre: "simulation",
    },
    {
      id: 17,
      image: card17,
      title: "The Dice",
      discount: "15%",
      stars: '★★★☆☆',
      rating: "59",
      discounte: "60$",
      price: "51$",
      genre: "puzzle",
    },
    {
      id: 18,
      image: card18,
      title: "Dying Light",
      discount: "ended",
      stars: '★★☆☆☆',
      rating: "31",
      discounte: null,
      price: "100$",
      genre: "adventure",
    },
    {
      id: 19,
      image: card19,
      title: "Lunacid",
      discount: "15%",
      stars: '★★★★☆',
      rating: "87",
      discounte: "55$",
      price: "42$",
      genre: "adventure",
    },
    {
      id: 20,
      image: card20,
      title: "Forgotten Sea",
      discount: "12%",
      stars: '★★★☆☆',
      rating: "76",
      discounte: "92$",
      price: "83$",
      genre: "adventure",
    },
  ];

  const tournamentCardsData = [
    { id: 1, image: tcard1, title: "Leagues of legends" },
    { id: 2, image: tcard2, title: "Apex Legend" },
    { id: 3, image: tcard3, title: "Counter Strike" },
    { id: 4, image: tcard4, title: "World of Warcraft" },
    { id: 5, image: tcard5, title: "Dota 2" },
    { id: 6, image: tcard6, title: "Fortnite" },
    { id: 7, image: tcard7, title: "King Heart" },
    { id: 8, image: tcard8, title: "King 8" },
  ];

  const upcoming = [
    { id: 1, image: upcoming1, title: "FC25", date: "27 Dec 2026" },
    { id: 2, image: upcoming2, title: "Marvel", date: "3 Dec 2026" },
    { id: 3, image: upcoming3, title: "Star Wars", date: "6 Jan 2027" },
    { id: 4, image: upcoming4, title: "GTA VI", date: "2 Feb 2027" },
    { id: 5, image: upcoming5, title: "The Witcher 4", date: "27 Feb 2027" },
    { id: 6, image: upcoming6, title: "Walking Dead", date: "4 May 2027" },
    { id: 7, image: upcoming7, title: "The Beast", date: "16 April 2027" },
    { id: 8, image: upcoming8, title: "Farm Mechanic", date: "19 Aprl 2027" },
  ];

  const currentCenterReview = reviewsCycleData[dataIndex];

  const cardResponsiveClass =
    "flex-shrink-0 snap-start w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)]";

  const handleCardClick = (item) => {
    const formattedProduct = {
      ...item,
      price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) || 50.0 : item.price
    };
    navigate('/ProductDetails', { state: { product: formattedProduct, allGames: cardsData } });
  };

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    let existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const cleanPrice = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;

    const cartItemData = {
      id: item.id,
      title: item.title,
      price: cleanPrice || 50.00,
      image: item.image,
      rating: item.rating
    };

    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === cartItemData.id);

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...cartItemData, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    navigate('/Cart');
  };
  
const handlePreOrder = (item, e) => {
    e.stopPropagation();
    let existingOrders = JSON.parse(localStorage.getItem('userPreOrders')) || [];
    const exists = existingOrders.some((order) => order.id === item.id);

    if (!exists) {
      existingOrders.push({ ...item, price: '50$' });
      localStorage.setItem('userPreOrders', JSON.stringify(existingOrders));
    }
    navigate('/PreOrders');
  };
 const handleCardClickForUpcoming = (item) => {
    navigate('/PreOrders');
  };

  return (
    <div className="bg-[rgba(45,50,56,1)] overflow-x-hidden [transform:translateZ(0)] will-change-transform">
      {/* Section 1 */}
      <section
        className="w-[85%] max-w-[1300px] mx-auto bg-cover bg-center rounded-2xl py-10 pl-6 lg:pl-10 pr-0 flex flex-col lg:flex-row items-center justify-between gap-6 my-8 shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${section1img})` }}
      >
        <div className="w-full lg:w-[40%] flex flex-col text-center lg:text-left items-center lg:items-start pr-6 lg:pr-0">
          <h1 className="text-[rgba(255,105,22,1)] font-bold text-justify text-[40px] max-[1179px]:text-[35px] max-[1038px]:text-[30px] max-[396px]:text-[25px] ">
            Your Next Game Is <br />
            <span className="text-white">Just One Click Away.</span>
            <br />
            <span className="text-white text-xs sm:text-sm lg:text-[16px] font-medium block mt-2">
              Get Instant CDKeys for less - play in seconds.
            </span>
          </h1>

          <div className="flex gap-3 pt-5 ">
            <Link to="/Deals">
              <button className="bg-[rgba(255,105,22,1)] text-white h-9 w-28 rounded-lg text-xs font-semibold ">
                Browse Deals
              </button>
            </Link>
            <Link to="/Allgames">
              <button className="border-2 border-[rgba(255,105,22,1)] text-white h-9 w-28 rounded-lg text-xs font-semibold hover:bg-[rgba(255,102,22,1)]">
                View Games
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[57%] hidden lg:flex flex-col">
          <h1 className="text-white text-[18px] font-medium mb-3">
            The most{" "}
            <span className="text-[rgba(255,105,22,1)]">Popular Games</span>
          </h1>
          <div className="flex items-end justify-between w-full">
            <img
              src={section1p1}
              alt=""
              className="w-[23.5%] h-[250px] object-cover rounded-l-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-[1220px]:h-[220px]"
            />
            <img
              src={section1p2}
              alt=""
              className="w-[23.5%] h-[230px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-[1220px]:h-[210px]"
            />
            <img
              src={section1p3}
              alt=""
              className="w-[23.5%] h-[230px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-[1220px]:h-[210px]"
            />
            <img
              src={section1p4}
              alt=""
              className="w-[23.5%] h-[230px] object-cover rounded-r-none object-left transition-transform duration-300 hover:scale-105 cursor-pointer max-[1220px]:h-[210px]"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-[85%] max-w-[1300px] mx-auto mt-16">
        <div className="hidden lg:grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <img
              src={section2p1}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-102 cursor-pointer shadow-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={section2p2}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={section2p3}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
            />
          </div>

          <div className="col-span-1">
            <img
              src={section2p4}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src={section2p5}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
            />
          </div>
          <div className="col-span-2">
            <img
              src={section2p6}
              alt=""
              className="w-full h-[240px] object-cover rounded-xl transition-transform duration-300 hover:scale-102 cursor-pointer shadow-lg"
            />
          </div>
        </div>

        <div className="flex lg:hidden overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          <div className="flex gap-4 flex-shrink-0">
            <div className="w-[240px] sm:w-[280px] flex-shrink-0 snap-start">
              <img
                src={section2p1}
                alt=""
                className="w-full h-[220px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-[240px] sm:w-[280px] flex-shrink-0 snap-start">
              <img
                src={section2p2}
                alt=""
                className="w-full h-[220px] object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-[240px] sm:w-[280px] flex-shrink-0 snap-start">
              <img
                src={section2p3}
                alt=""
                className="w-full h-[220px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-[85%] max-w-[1300px] mx-auto mt-10 pb-12 relative">
        <button
          onClick={() => scrollPage(scrollRef3, "left")}
          className="absolute -left-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 max-[655px]:-left-8"
        >
          <IoIosArrowBack className="text-[22px]" />
        </button>

        <button
          onClick={() => scrollPage(scrollRef3, "right")}
          className="absolute -right-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 max-[655px]:-right-8"
        >
          <IoIosArrowForward className="text-[22px]" />
        </button>

        <div className="flex items-center justify-between mb-4 w-full">
          <h1 className="font-bold text-white text-[20px]">Trending Games</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/Trendinggames"
              className="text-[rgba(255,105,22,1)] font-medium text-sm hover:underline"
            >
              view all
            </Link>
            <Link to="/Trendinggames">
              <IoIosArrowForward className="text-[rgba(255,105,22,1)]" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef3}
          className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-4 scroll-smooth py-2"
        >
          {cardsData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className={`border border-white bg-[rgba(35,40,46,1)] p-3.5 sm:p-4 rounded-lg transition-transform duration-300 shadow-md cursor-pointer hover:border-[rgba(255,105,22,1)] ${cardResponsiveClass}`}
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="w-full h-[220px] max-[1200px]:h-[190px] max-[1000px]:h-[160px] max-[640px]:h-[130px] bg-cover bg-no-repeat bg-center rounded-md relative"
              >
                <button className="absolute top-2 left-2 bg-[rgba(255,105,22,1)] text-white w-9 h-5 rounded-[5px] text-[10px] font-bold">
                  {item.discount}
                </button>
              </div>

              <div className="h-fit mt-2">
                <div className="font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden">
                  <span className="truncate">{item.title}</span>
                  <span className="text-[rgba(255,105,22,1)] flex text-[10px] shrink-0">
                    {item.stars}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1 overflow-hidden">
                    <del className="text-[11px] text-gray-500 truncate">
                      {item.discounte}
                    </del>
                    <span className="text-white text-xs font-bold truncate">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center shrink-0">
                    <GiConsoleController className="text-[15px] text-[rgba(255,105,22,1)]" />
                    <span className="text-[rgba(255,204,0,1)] text-xs ml-1">
                      {item.rating}/
                    </span>
                    <span className="text-[10px] text-gray-400">100</span>
                  </div>
                </div>

                <div className="flex justify-between gap-1 pt-3">
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold transition-colors truncate px-1 cursor-pointer">
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const isLoggedIn = localStorage.getItem("isLoggedIn");
                      if (isLoggedIn === "true") {
                        navigate("/BuyNow", {
                          state: {
                            name: item.title,
                            price: parseFloat(item.price.replace("$", "")) || 50.0,
                            image: item.image,
                          },
                        });
                      } else {
                        if (
                          window.confirm(
                            "Please login your account first to proceed with checkout!",
                          )
                        ) {
                          navigate("/SignIn");
                        }
                      }
                    }}
                    className="bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold hover:opacity-90 truncate px-1 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleDotClick(scrollRef3, idx, setActiveIndex3, totalDots)
              }
              className={`w-2.5 h-2.5 transition-colors duration-300 rounded-full cursor-pointer ${
                activeIndex3 === idx
                  ? "bg-[rgba(255,105,22,1)]"
                  : "bg-white hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section
        style={{ backgroundImage: `url(${section4img})` }}
        className="w-[85%] max-w-[1300px] mx-auto h-130 bg-no-repeat bg-cover bg-center rounded-2xl relative my-16 p-6 "
      >
        <h1 className="font-bold text-[rgba(255,105,22,1)] text-[35px] text-center mb-6">
          Join <span className="text-white">The Big Tournament</span>
        </h1>

        <div className="relative flex items-center">
          <button
            onClick={() => scrollSection4("left")}
            className="absolute -left-4 z-10 bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(255,105,22,1)] text-white p-3 transition-colors cursor-pointer"
          >
            <IoIosArrowBack className="text-[24px]" />
          </button>

          <div
            ref={section4ScrollRef}
            className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-4 scroll-smooth py-2"
          >
            {tournamentCardsData.map((item) => (
              <div
                key={item.id}
                className="w-[200px] h-[260px] bg-no-repeat bg-cover bg-center flex flex-col justify-end flex-shrink-0 snap-start shadow-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-[rgba(0,0,0,0.7)] p-3 w-[200px] ">
                  <h1 className="text-white text-sm font-semibold truncate mb-1">
                    {item.title}
                  </h1>
                  <button className="flex items-center text-white text-xs gap-1 hover:text-[rgba(255,105,22,1)] transition-colors">
                    Buy now{" "}
                    <FaLongArrowAltRight className="text-[rgba(255,105,22,1)]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollSection4("right")}
            className="absolute -right-4 z-10 bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(255,105,22,1)] text-white p-3 transition-colors cursor-pointer"
          >
            <IoIosArrowForward className="text-[24px]" />
          </button>
        </div>

        <div className="relative w-[100%] mt-1 md:mt-2 flex justify- items-center text-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
          <img
            src={section4p1}
            alt=""
            className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none select-none hidden sm:block"
          />
          <img
            src={section4p2}
            alt=""
            className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none select-none block sm:hidden"
          />
          <div className="relative z-20 flex flex-col mt-9 sm:mt-7 -ml-4 max-[478px]:pb-4 sm:ml-[20%] md:ml-[25%] lg:ml-[28%] xl:ml-[30%] 2xl:ml-[32%] items-center justify-start text-center ">
            <h3 className="font-bold text-white text-[30px] max-[1007px]:text-[20px]">
              {" "}
              Ready for{" "}
              <span className="text-[rgba(255,105,22,1)]">Battles </span>?{" "}
            </h3>
            <div className="flex flex-col items-center text-white space-y-1">
              <p className="max-[860px]:text-[13px] max-[473px]:text-[10px]">
                Dive into thrilling esports tournaments, global
              </p>
              <p className="max-[860px]:text-[13px] max-[473px]:text-[10px]">
                Global gaming events, and epic community
              </p>
              <p className="max-[860px]:text-[13px] max-[473px]:text-[10px]">
                challenges. Victory awaits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-[85%] max-w-[1300px] mx-auto mt-60 pb-12 relative">
        <button
          onClick={() => scrollPage(scrollRef5, "left")}
          className="absolute -left-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 max-[655px]:-left-8"
        >
          <IoIosArrowBack className="text-[22px]" />
        </button>

        <button
          onClick={() => scrollPage(scrollRef5, "right")}
          className="absolute -right-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 max-[655px]:-right-8"
        >
          <IoIosArrowForward className="text-[22px]" />
        </button>

        <div className="flex items-center justify-between mb-4 w-full">
          <h1 className="font-bold text-white text-[20px]">Best Sellers</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/Trendinggames"
              className="text-[rgba(255,105,22,1)] font-medium text-sm hover:underline"
            >
              view all
            </Link>
            <Link to="/Trendinggames">
              <IoIosArrowForward className="text-[rgba(255,105,22,1)]" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef5}
          className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-4 scroll-smooth py-2"
        >
          {cardsData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className={`border border-white bg-[rgba(35,40,46,1)] p-3.5 sm:p-4 rounded-lg transition-transform duration-300 shadow-md cursor-pointer hover:border-[rgba(255,105,22,1)] ${cardResponsiveClass}`}
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="w-full h-[220px] max-[1200px]:h-[190px] max-[1000px]:h-[160px] max-[640px]:h-[130px] bg-cover bg-no-repeat bg-center rounded-md relative"
              >
                <button className="absolute top-2 left-2 bg-[rgba(255,105,22,1)] text-white w-9 h-5 rounded-[5px] text-[10px] font-bold">
                  {item.discount}
                </button>
              </div>

              <div className="h-fit mt-2">
                <div className="font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden">
                  <span className="truncate">{item.title}</span>
                  <span className="text-[rgba(255,105,22,1)] flex text-[10px] shrink-0">
                    {item.stars}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1 overflow-hidden">
                    <del className="text-[11px] text-gray-500 truncate">
                      {item.discounte}
                    </del>
                    <span className="text-white text-xs font-bold truncate">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center shrink-0">
                    <GiConsoleController className="text-[15px] text-[rgba(255,105,22,1)]" />
                    <span className="text-[rgba(255,204,0,1)] text-xs ml-1">
                      {item.rating}/
                    </span>
                    <span className="text-[10px] text-gray-400">100</span>
                  </div>
                </div>

                <div className="flex justify-between gap-1 pt-3">
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold transition-colors truncate px-1 cursor-pointer">
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const isLoggedIn = localStorage.getItem("isLoggedIn");
                      if (isLoggedIn === "true") {
                        navigate("/BuyNow", {
                          state: {
                            name: item.title,
                            price: parseFloat(item.price.replace("$", "")) || 50.0,
                            image: item.image,
                          },
                        });
                      } else {
                        if (
                          window.confirm(
                            "Please login your account first to proceed with checkout!",
                          )
                        ) {
                          navigate("/SignIn");
                        }
                      }
                    }}
                    className="bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold hover:opacity-90 truncate px-1 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleDotClick(scrollRef5, idx, setActiveIndex5, totalDots)
              }
              className={`w-2.5 h-2.5 transition-colors duration-300 rounded-full cursor-pointer ${
                activeIndex5 === idx
                  ? "bg-[rgba(255,105,22,1)]"
                  : "bg-white hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
  
    
     {/* Section 6 */}
      <section className="w-[85%] max-w-[1300px] mx-auto pb-12 relative">
        <button
          onClick={() => scrollPage(scrollRef6, "left")}
          className="absolute -left-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 rounded-md max-[655px]:-left-8"
        >
          <IoIosArrowBack className="text-[22px]" />
        </button>
        <button
          onClick={() => scrollPage(scrollRef6, "right")}
          className="absolute -right-12 top-[55%] -translate-y-1/2 z-10 bg-[rgba(35,40,46,0.9)] hover:bg-[rgba(255,105,22,1)] text-white p-2.5 shadow-lg transition-colors cursor-pointer border border-gray-600 rounded-md max-[655px]:-right-8"
        >
          <IoIosArrowForward className="text-[22px]" />
        </button>

        <div className="flex items-center justify-between mb-4 w-full">
          <h1 className="font-bold text-white text-[20px]">Up Coming Games</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/Upcoming"
              className="text-[rgba(255,105,22,1)] flex font-medium text-sm hover:underline"
            >
              view all <IoIosArrowForward className="relative top-1" />
            </Link>
          
          </div>
        </div>

        <div
          ref={scrollRef6}
          className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-4 scroll-smooth py-2"
        >
          {upcoming.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClickForUpcoming(item)}
              className={`border border-[rgba(255,105,22,1)] bg-[rgba(35,40,46,1)] p-4 rounded-lg shadow-md cursor-pointer ${cardResponsiveClass}`}
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="w-full h-[220px] max-[1200px]:h-[190px] max-[1000px]:h-[160px] max-[640px]:h-[130px] bg-cover bg-no-repeat bg-center rounded-md relative"
              ></div>

              <div className="h-fit mt-2">
                <div className="font-medium text-white text-sm flex justify-between items-center">
                  <span className="truncate">{item.title}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1">
                    <del className="text-[11px] text-gray-500">60</del>
                    <span className="text-white text-xs font-bold">50$</span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-1 pt-3">
                  <h1 className="text-white h-7 w-[48%] gap-0.5 rounded-md text-[9.5px] max-[1000px]:text-[8.5px] font-semibold flex items-center overflow-hidden">
                    <SlCalender className=" shrink-0" />
                    <span className="truncate">{item.date}</span>
                  </h1>
                  <button 
                    onClick={(e) => handlePreOrder(item, e)}
                    className="text-white h-7 w-[48%] gap-0.5 rounded-md text-[9.5px] max-[1000px]:text-[8.5px] font-semibold flex items-center justify-center shrink-0 cursor-pointer hover:text-[rgba(255,105,22,1)]"
                  >
                    Pre-Order{" "}
                    <FaLongArrowAltRight className="text-[rgba(255,105,22,1)] relative top-[1px] text-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleDotClick(scrollRef6, idx, setActiveIndex6, 4)
              }
              className={`w-2.5 h-2.5 transition-colors duration-300 rounded-full cursor-pointer ${
                activeIndex6 === idx
                  ? "bg-[rgba(255,105,22,1)]"
                  : "bg-white hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
      {/* Section 7 */}
      <section
        className="w-[85%] h-fit flex justify-self-center mx-auto 
      max-[1024px]:h-80  max-[1024px]:mt-0 max-[600px]:h-60"
      >
        <div className="w-[40%] h-100 pt-14 max-[1100px]:w-fit max-[1025px]:w-[100%] max-[1024px]:pt-6">
          <h1
            className="text-[38px] text-[rgba(255,105,22,1)] font-bold max-[1025px]:justify-self-center max-[477px]:text-[25px]
          "
          >
            Place Your Best Game <br />{" "}
            <span className="text-white">& Collect Epic Deals</span>
          </h1>
          <p className="w-100 text-white max-[1025px]:justify-self-center max-[1025px]:text-center max-[477px]:text-[16px] max-[477px]:w-90">
            Discover limited-time discounts on top-selling games, gift cards,
            and bundles. New deals added every day — don't miss out!
          </p>
          <div className="flex gap-5 mt-4 max-[1025px]:justify-self-center">
            <Link to="/Deals">
              <button className="bg-[rgba(255,105,22,1)] text-white h-9 w-28 rounded-lg text-xs font-semibold ">
                Browse Deals
              </button>
            </Link>
            <button className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-9 w-28 rounded-md text-[11px] font-semibold transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="w-[60%] h-100 bg-cover bg-no-repeat bg-center max-[1025px]:hidden "
          style={{ backgroundImage: `url(${section7})` }}
        ></div>
      </section>

      {/* SECTION 8 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-0 ">
        <div className="relative w-full text-white overflow-hidden mt-10">
          <div className="flex items-center justify-between px-4 mb-2 sm:mb-4 sm:px-6 lg:px-7">
            <h2 className="text-2xl font-semibold">Customer Reviews</h2>
            <div className="text-[rgba(255,105,22,1)] text-[12px] flex items-center cursor-pointer hover:opacity-85 transition">
        <Link to="/Reviews">     View All </Link>   <IoIosArrowForward className="" /> 
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-16 max-[1024px]:gap-0 md:-mx-6 lg:mx-0 py-12 overflow-hidden">
              <div className="hidden md:flex justify-center items-center mt-7 h-full pt-14 flex-shrink-0 transition-all duration-500 md:scale-75 md:-mx-4 lg:scale-90 lg:mx-0 opacity-75">
                <div
                  className="relative flex flex-col items-center py-10 px-6 overflow-visible"
                  style={{ minHeight: "400px", width: "280px" }}
                >
                  <img
                    src={staticLeftCard.bgCard}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
                  />
                  <div className="absolute rounded-full overflow-hidden bg-black z-20 border-2 border-[rgba(255,105,22,1)] shadow-lg w-16 h-16 -top-4 relative top-1">
                    <img
                      src={staticLeftCard.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-1 z-20 text-sm mt-5 opacity-90 text-center">
                    {staticLeftCard.name}
                  </h3>
                  <div className="flex justify-center mb-2 z-20 text-[rgba(255,105,22,1)] scale-90 opacity-80">
                    {[...Array(5)].map((_, i) =>
                      i < staticLeftCard.rating ? (
                        <FaStar key={i} className="mx-0.5 text-sm" />
                      ) : (
                        <FaRegStar key={i} className="mx-0.5 text-sm" />
                      ),
                    )}
                  </div>
                  <p className="text-gray-200 leading-relaxed mx-auto z-20 text-[10px] opacity-80 text-center max-w-[200px] h-[40px] overflow-hidden">
                    {staticLeftCard.review}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-7 h-full pt-14 flex-shrink-0 z-20">
                <div
                  key={dataIndex}
                  className="relative flex flex-col items-center transition-all duration-700 py-10 px-6 overflow-visible scale-105 opacity-100"
                  style={{ minHeight: "400px", width: "320px" }}
                >
                  <img
                    src={currentCenterReview.bgCard}
                    alt="review-card-bg"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
                  />
                  <div className="absolute rounded-full overflow-hidden bg-black z-20 transition-all duration-500 border-2 border-[rgba(255,105,22,1)] shadow-lg w-20 h-20 -top-6 ">
                    <img
                      src={currentCenterReview.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-1 z-20 transition-all duration-500 text-lg text-center mt-4">
                    {currentCenterReview.name}
                  </h3>
                  <div className="flex justify-center mb-2 z-20 transition-all duration-500 text-[rgba(255,105,22,1)] scale-100">
                    {[...Array(5)].map((_, i) =>
                      i < currentCenterReview.rating ? (
                        <FaStar key={i} className="mx-0.5 text-sm" />
                      ) : (
                        <FaRegStar key={i} className="mx-0.5 text-sm" />
                      ),
                    )}
                  </div>

                  <p className="text-gray-200 leading-relaxed mx-auto z-20 transition-all duration-500 text-center break-words whitespace-normal overflow-hidden text-xs opacity-100 max-w-[240px] h-[50px]">
                    {currentCenterReview.review}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center mt-7 h-full pt-14 flex-shrink-0 transition-all duration-500 md:scale-75 md:-mx-4 lg:scale-90 lg:mx-0 opacity-75">
                <div
                  className="relative flex flex-col items-center py-10 px-6 overflow-visible"
                  style={{ minHeight: "400px", width: "280px" }}
                >
                  <img
                    src={staticRightCard.bgCard}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
                  />
                  <div className="absolute rounded-full overflow-hidden bg-black z-20 border-2 border-[rgba(255,105,22,1)] shadow-lg w-16 h-16 -top-4 relative top-1">
                    <img
                      src={staticRightCard.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-1 z-20 text-sm mt-5 opacity-90 text-center">
                    {staticRightCard.name}
                  </h3>
                  <div className="flex justify-center mb-2 z-25 text-[rgba(255,105,22,1)] scale-90 opacity-80">
                    {[...Array(5)].map((_, i) =>
                      i < staticRightCard.rating ? (
                        <FaStar key={i} className="mx-0.5 text-sm" />
                      ) : (
                        <FaRegStar key={i} className="mx-0.5 text-sm" />
                      ),
                    )}
                  </div>
                  <p className="text-gray-200 leading-relaxed mx-auto z-20 text-[10px] opacity-80 text-center max-w-[200px] h-[40px] overflow-hidden">
                    {staticRightCard.review}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center  gap-2 items-center">
              {reviewsCycleData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setDataIndex(idx)}
                  className={`rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    dataIndex === idx
                      ? "bg-[rgba(255,105,22,1)] w-2.5 h-2.5 scale-110"
                      : "bg-gray-500/50 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="w-[85%] max-w-[1300px] overflow-hidden mx-auto text-white pb-7 my-16 isolate [transform:translateZ(0)] will-change-transform">
        <div className="flex items-center justify-between mb-4 w-full">
          <h1 className="font-bold text-white text-[20px]">Blog Posts</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/Blog"
              className="text-[rgba(255,105,22,1)] font-medium text-sm hover:underline"
            >
              view all
            </Link>
            <Link to="/PcGames">
              <IoIosArrowForward className="text-[rgba(255,105,22,1)]" />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col lg:flex-row gap-6 items-stretch">
          <div
            className="w-full lg:w-[50%] h-[320px] lg:h-[410px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center flex flex-col justify-end p-6 relative transition-opacity duration-300"
            style={{
              backgroundImage: `url(${section9Portions[sec9Index].bigImg})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <h1 className="relative z-10 text-white text-2xl lg:text-3xl max-w-3xl leading-snug h-[90px] lg:h-[110px] overflow-hidden">
              {section9Portions[sec9Index].title}
            </h1>
          </div>

          <div className="w-full lg:w-[50%] grid grid-cols-2 gap-4">
            {section9Portions[sec9Index].smallImgs.map((img, idx) => (
              <div
                key={idx}
                className="h-[140px] lg:h-[197px] rounded-xl overflow-hidden shadow-md bg-cover bg-center relative flex flex-col justify-end p-4 border border-gray-700/50 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <h1 className="relative z-10 text-white text-sm lg:text-base font-bold truncate">
                  {section9Portions[sec9Index].customTexts[idx]}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex overflow-x-auto gap-3 pb-3 scrollbar-none snap-x snap-mandatory">
            {uniqueSec9MobileImages.map((asset, idx) => (
              <div
                key={idx}
                className="w-[150px] h-[150px] flex-shrink-0 snap-start rounded-xl overflow-hidden shadow-md bg-cover bg-center border border-gray-700 relative flex flex-col justify-end p-3"
                style={{ backgroundImage: `url(${asset})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h1 className="relative z-10 text-white text-xs truncate">
                  Item {idx + 1}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-8">
          {section9Portions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSec9Index(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                sec9Index === idx
                  ? "bg-[rgba(255,105,22,1)] w-4 h-4 shadow-md"
                  : "bg-gray-500/50 w-2.5 h-2.5 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* section 10 */}
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
