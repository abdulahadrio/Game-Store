import { useState } from "react";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { GiConsoleController } from "react-icons/gi";
import nav2 from "../assets/nav2.avif";
import lastimg from "../assets/last.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate} from 'react-router-dom';

import nin1 from "../assets/nin1.jpg";
import nin2 from "../assets/nin2.jpg";
import nin3 from "../assets/nin3.jpg";
import nin4 from "../assets/nin4.jpg";
import nin5 from "../assets/nin5.jpg";
import nin6 from "../assets/nin6.jpg";
import nin7 from "../assets/nin7.jpg";
import nin8 from "../assets/nin8.jpg";
import nin9 from "../assets/nin9.jpg";
import nin10 from "../assets/nin10.jpg";
import nin11 from "../assets/nin11.jpg";
import nin12 from "../assets/nin12.jpg";
import nin13 from "../assets/nin13.jpg";
import nin14 from "../assets/nin14.jpg";
import nin15 from "../assets/nin15.jpg";
import nin16 from "../assets/nin16.jpg";
import nin17 from "../assets/nin17.jpg";

const gamesData = [
  {
    id: 1,
    title: "Zelda Wild",
    price: 59.99,
    rating: "99",
    stars: "★★★★★",
    image: nin1,
    genre: "adventure",
  },
  {
    id: 2,
    title: "Super Mario",
    price: 49.99,
    rating: "96",
    stars: "★★★★★",
    image: nin2,
    genre: "puzzle",
  },
  {
    id: 3,
    title: "Pokemon Arceus",
    price: 54.99,
    rating: "92",
    stars: "★★★★★",
    image: nin3,
    genre: "adventure",
  },
  {
    id: 4,
    title: "Animal Crossing",
    price: 39.99,
    rating: "90",
    stars: "★★★★☆",
    image: nin4,
    genre: "simulation",
  },
  {
    id: 5,
    title: "Mario Kart 8",
    price: 49.99,
    rating: "95",
    stars: "★★★★★",
    image: nin5,
    genre: "racing",
  },
  {
    id: 6,
    title: "Metroid Dread",
    price: 39.99,
    rating: "88",
    stars: "★★★★☆",
    image: nin6,
    genre: "action",
  },
  {
    id: 7,
    title: "Super Smash Bros",
    price: 59.99,
    rating: "97",
    stars: "★★★★★",
    image: nin7,
    genre: "action",
  },
  {
    id: 8,
    title: "Luigi Mansion 3",
    price: 34.99,
    rating: "89",
    stars: "★★★★☆",
    image: nin8,
    genre: "puzzle",
  },
  {
    id: 9,
    title: "Kirby Forgotten",
    price: 44.99,
    rating: "91",
    stars: "★★★★★",
    image: nin9,
    genre: "adventure",
  },
  {
    id: 10,
    title: "Splatoon 3",
    price: 49.99,
    rating: "87",
    stars: "★★★★☆",
    image: nin10,
    genre: "action",
  },
  {
    id: 11,
    title: "Fire Emblem",
    price: 59.99,
    rating: "94",
    stars: "★★★★★",
    image: nin11,
    genre: "simulation",
  },
  {
    id: 12,
    title: "Pikmin 4",
    price: 39.99,
    rating: "86",
    stars: "★★★★☆",
    image: nin12,
    genre: "puzzle",
  },
  {
    id: 13,
    title: "Xenoblade 3",
    price: 49.99,
    rating: "93",
    stars: "★★★★★",
    image: nin13,
    genre: "adventure",
  },
  {
    id: 14,
    title: "Bayonetta 3",
    price: 44.99,
    rating: "85",
    stars: "★★★★☆",
    image: nin14,
    genre: "action",
  },
  {
    id: 15,
    title: "Mario Party",
    price: 39.99,
    rating: "82",
    stars: "★★★★☆",
    image: nin15,
    genre: "puzzle",
  },
  {
    id: 16,
    title: "Pokemon Violet",
    price: 54.99,
    rating: "84",
    stars: "★★★★☆",
    image: nin16,
    genre: "adventure",
  },
  {
    id: 17,
    title: "Fast RMX",
    price: 19.99,
    rating: "79",
    stars: "★★★☆☆",
    image: nin17,
    genre: "racing",
  },
];

export default function Nintendo() {
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
    if (key === "all") {
      setGenres({
        all: true,
        action: false,
        adventure: false,
        racing: false,
        puzzle: false,
        simulation: false,
      });
    } else {
      setGenres((prev) => ({
        ...prev,
        all: false,
        [key]: !prev[key],
      }));
    }
  };

  const filteredGames = gamesData.filter((game) => {
    if (game.price > priceVal) return false;

    if (genres.all) return true;

    const activeGenres = Object.keys(genres).filter(
      (k) => k !== "all" && genres[k],
    );
    if (activeGenres.length === 0) return true;

    return activeGenres.includes(game.genre);
  });

  const totalPages = Math.ceil(filteredGames.length / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentItems = filteredGames.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleNext = () => {
    if (safeCurrentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (safeCurrentPage > 1) setCurrentPage((prev) => prev - 1);
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
      <section className="w-full pb-12">
        <div className="flex flex-wrap text-sm md:text-[18px] gap-2 items-center mb-6 px-4 lg:pl-30 pt-4">
          <Link to="/">
            <button className="flex items-center cursor-pointer hover:underline hover:text-[rgba(255,105,22,1)]">
              Home <IoIosArrowForward className="relative top-0.5" />
            </button>
          </Link>

          <span className="text-gray-300 font-medium">Nintendo</span>
        </div>

        <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[28%] bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-xl p-5 h-fit shadow-lg">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-700">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={handleClearAll}
                className="border border-[rgba(255,105,22,1)] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[rgba(255,105,22,1)] transition-all cursor-pointer"
              >
                Clear All
              </button>
            </div>

            <div className="mb-6">
              <div
                onClick={() => setIsGenreOpen(!isGenreOpen)}
                className="flex justify-between items-center mb-3 cursor-pointer select-none"
              >
                <span className="font-semibold text-base">Genre</span>
                {isGenreOpen ? (
                  <IoIosArrowUp className="text-[rgba(255,105,22,1)] text-lg" />
                ) : (
                  <IoIosArrowDown className="text-[rgba(255,105,22,1)] text-lg" />
                )}
              </div>

              {isGenreOpen && (
                <div className="flex flex-col gap-2.5 text-sm transition-all">
                  {[
                    {
                      key: "all",
                      label: "All Genres",
                      count: `(${gamesData.length})`,
                    },
                    { key: "action", label: "Action", count: "(3)" },
                    { key: "adventure", label: "Adventure", count: "(5)" },
                    { key: "racing", label: "Racing", count: "(2)" },
                    { key: "puzzle", label: "Puzzle", count: "(4)" },
                    { key: "simulation", label: "Simulation", count: "(3)" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex justify-between items-center cursor-pointer hover:text-[rgba(255,105,22,1)]"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={genres[item.key]}
                          onChange={() => handleCheckboxChange(item.key)}
                          className="accent-[rgba(255,105,22,1)] w-4 h-4 cursor-pointer"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-gray-400 text-xs">
                        {item.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <div
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex justify-between items-center mb-3 cursor-pointer select-none"
              >
                <span className="font-semibold text-base">Price</span>
                {isPriceOpen ? (
                  <IoIosArrowUp className="text-[rgba(255,105,22,1)] text-lg" />
                ) : (
                  <IoIosArrowDown className="text-[rgba(255,105,22,1)] text-lg" />
                )}
              </div>

              {isPriceOpen && (
                <div className="transition-all">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceVal}
                    onChange={(e) => {
                      setPriceVal(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full accent-[rgba(255,105,22,1)] cursor-pointer mb-4"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <div className="bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono">
                      $0
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="bg-[rgba(45,50,56,1)] border border-gray-600 px-3 py-1.5 rounded-md text-xs w-[45%] text-center font-mono">
                      ${priceVal}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[72%] flex flex-col">
            {currentItems.length === 0 ? (
              <div className="bg-[rgba(35,40,46,1)] border border-white/10 rounded-lg p-12 text-center text-gray-400">
                No games found matching your active filter criteria.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item)}
                    className="border border-white/20 bg-[rgba(35,40,46,1)] p-3 rounded-lg transition-transform duration-300 shadow-md flex flex-col justify-between hover:border-[rgba(255,105,22,1)] cursor-pointer"
                  >
                    <div>
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="w-full h-[140px] sm:h-[160px] bg-cover bg-no-repeat bg-center rounded-md relative"
                      />

                      <div className="h-fit mt-2">
                        <div className="font-medium text-white text-sm flex justify-between items-center gap-1 overflow-hidden">
                          <span className="truncate">{item.title}</span>
                          <span className="text-[rgba(255,105,22,1)] flex text-[10px] shrink-0">
                            {item.stars}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-1.5">
                          <div className="flex items-center gap-1 overflow-hidden">
                            <span className="text-white text-xs font-bold truncate">
                              ${item.price}
                            </span>
                          </div>
                          <div className="flex items-center shrink-0">
                            <GiConsoleController className="text-[15px] text-[rgba(255,105,22,1)]" />
                            <span className="text-[rgba(255,204,0,1)] text-xs ml-1">
                              {item.rating}/
                            </span>
                            <span className="text-[10px] text-gray-400">
                              100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between gap-1 pt-3 mt-auto">
                      <button 
                        onClick={(e) => handleAddToCart(item, e)}
                        className="border-[rgba(255,105,22,1)] border hover:bg-[rgba(255,105,22,1)] text-white h-7 w-[48%] rounded-md text-[11px] font-semibold transition-colors truncate px-1 cursor-pointer"
                      >
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
                                price: item.price,
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
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 mt-8 py-3 bg-[rgba(35,40,46,1)] rounded-lg border border-white/10">
                <button
                  onClick={handlePrev}
                  disabled={safeCurrentPage === 1}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold text-white transition-all ${
                    safeCurrentPage === 1
                      ? "bg-gray-700 opacity-40 cursor-not-allowed"
                      : "bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer"
                  }`}
                >
                  Previous
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        safeCurrentPage === index + 1
                          ? "bg-[rgba(255,105,22,1)] text-white font-bold shadow"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
                      ? "bg-gray-700 opacity-40 cursor-not-allowed"
                      : "bg-[rgba(255,105,22,1)] hover:opacity-90 cursor-pointer"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className="h-fit w-[100%] flex justify-center border-b-2 border-[rgba(255,105,22,1)] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${lastimg})` }}
      >
        <div className="h-fit w-[85%] flex justify-between max-[1024px]:flex-col py-6">
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
                  <Link to="/GiftCards">Gift Cards </Link>
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

      <section
        className="h-20 w-[100%] text-center pt-5 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${lastimg})` }}
      >
        <h1 className="text-white text-sm">
          © 2026 EGameStore.com — All Rights{" "}
          <span className="underline cursor-pointer">
            Terms of Service , Privacy Policy
          </span>
        </h1>
      </section>
    </div>
  );
}