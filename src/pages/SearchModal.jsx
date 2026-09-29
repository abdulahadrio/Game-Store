import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

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

const storeBuyableGames = [
    { id: '1', title: 'Cyber Quest Action - Multilanguage', image: game1, price: '60$' },
    { id: '2', title: 'Galaxy Odyssey Space Edition', image: game2, price: '70$' },
    { id: '3', title: 'Speed Storm 2 Racing', image: game3, price: '50$' },
    { id: '4', title: 'Realm of Magic Deluxe', image: game4, price: '65$' },
    { id: '5', title: 'Farm Life 3D Simulation', image: game5, price: '40$' },
    { id: '6', title: 'Shadow Blade Ninja', image: game6, price: '55$' },
    { id: '7', title: 'Mystery Puzzle Quest', image: game7, price: '30$' },
    { id: '8', title: 'City Architect Master', image: game8, price: '45$' },
    { id: '9', title: 'Apex Horizon Racer', image: game9, price: '60$' },
    { id: '10', title: 'Titan Fallback Operations', image: game10, price: '70$' },
    { id: '11', title: 'Supermarket Simulator 2026', image: game11, price: '50$' },
    { id: '12', title: 'Dice & Fold Strategy', image: game12, price: '40$' },
    { id: '13', title: 'Dying Light 2 Reloaded', image: game13, price: '60$' },
    { id: '14', title: 'Suicide Squad Justice League', image: game14, price: '70$' },
    { id: '15', title: 'Lunacid English Edition', image: game15, price: '35$' },
    { id: '16', title: 'Cyberpunk 2077 Ultimate', image: game16, price: '60$' },
    { id: '17', title: 'Red Dead Redemption 2 PC', image: game17, price: '50$' },
    { id: '18', title: 'Hogwarts Legacy Deluxe', image: game18, price: '70$' },
    { id: '19', title: 'Call of Duty Modern Warfare III', image: game19, price: '70$' },
    { id: '20', title: 'EA Sports FC 27 Standard', image: game20, price: '60$' },
    { id: '21', title: 'Assassins Creed Mirage Key', image: game21, price: '50$' },
    { id: '22', title: 'Baldurs Gate 3 Deluxe', image: game22, price: '65$' },
    { id: '23', title: 'Resident Evil 4 Remake Gold', image: game23, price: '55$' },
    { id: '24', title: 'Spider-Man Remastered PC', image: game24, price: '60$' },
    { id: '25', title: 'God of War Ragnarok PC', image: game25, price: '60$' },
    { id: '26', title: 'Forza Horizon 5 Premium', image: game26, price: '70$' },
    { id: '27', title: 'F1 Electronic Arts 2026', image: game27, price: '60$' },
    { id: '28', title: 'Need for Speed Unbound Palace', image: game28, price: '45$' },
    { id: '29', title: 'The Witcher 3 Complete Edition', image: game29, price: '40$' },
    { id: '30', title: 'Elden Ring Shadow Erdtree', image: game30, price: '70$' },
    { id: '31', title: 'Tekken 8 Ultimate Edition', image: game31, price: '75$' },
    { id: '32', title: 'Street Fighter 6 Year 1 Pass', image: game32, price: '60$' },
    { id: 'c1', title: 'Mortal Kombat 1 Premium', image: card1, price: '70$' },
    { id: 'c2', title: 'Sims 4 Deluxe Bundle', image: card2, price: '40$' },
    { id: 'c3', title: 'Cities: Skylines II Ultimate', image: card3, price: '80$' },
    { id: 'c4', title: 'Euro Truck Simulator 2 Complete', image: card4, price: '30$' },
    { id: 'c5', title: 'Age of Empires IV Anniversary', image: card5, price: '50$' },
    { id: 'c6', title: 'Civilization VII Founders Edition', image: card6, price: '70$' },
    { id: 'c7', title: 'Total War: WARHAMMER III', image: card7, price: '60$' },
    { id: 'c8', title: 'Stardew Valley Collector Pack', image: card8, price: '20$' },
    { id: 'c9', title: 'Grand Theft Auto VI (GTA 6)', image: card9, price: '80$' },
    { id: 'c10', title: 'Battlefield 2042 Elite Edition', image: card10, price: '50$' },
    { id: 'c11', title: 'Far Cry 6 Gold Edition', image: card11, price: '55$' },
    { id: 'c12', title: 'Ghost of Tsushima Director Cut', image: card12, price: '60$' },
    { id: 'c13', title: 'Horizon Forbidden West Complete', image: card13, price: '65$' },
    { id: 'c14', title: 'The Last of Us Part I PC', image: card14, price: '60$' },
    { id: 'c15', title: 'Uncharted Legacy of Thieves', image: card15, price: '50$' },
    { id: 'c16', title: 'Monster Hunter World Iceborne', image: card16, price: '40$' },
    { id: 'c17', title: 'Devil May Cry 5 Deluxe', image: card17, price: '45$' },
    { id: 'c18', title: 'Resident Evil Village Gold', image: card18, price: '50$' },
    { id: 'c19', title: 'Dark Souls III Deluxe Edition', image: card19, price: '55$' },
    { id: 'c20', title: 'Sekiro Shadows Die Twice', image: card20, price: '60$' },
    { id: 'tc1', title: 'Borderlands 3 Ultimate Pack', image: tcard1, price: '50$' },
    { id: 'tc2', title: 'BioShock The Collection', image: tcard2, price: '35$' },
    { id: 'tc3', title: 'Fallout 4 Game of the Year', image: tcard3, price: '30$' },
    { id: 'tc4', title: 'Skyrim Anniversary Edition', image: tcard4, price: '45$' },
    { id: 'tc5', title: 'Doom Eternal Deluxe Edition', image: tcard5, price: '50$' },
    { id: 'tc6', title: 'Wolfenstein Alt History Pack', image: tcard6, price: '40$' },
    { id: 'tc7', title: 'Apex Legends Champion Pack', image: tcard7, price: '30$' },
    { id: 'tc8', title: 'Destiny 2 Legacy Collection', image: tcard8, price: '40$' },
    { id: 'mc1', title: 'Minecraft Java and Bedrock Edition', image: mincraft, price: '30$' }
];

export default function SearchModal({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    const filteredGames = searchQuery.trim() === '' 
        ? [] 
        : storeBuyableGames.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleSelectGame = (game) => {
        onClose();
        navigate('/ProductDetails', { state: { product: game, allGames: storeBuyableGames } });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-[rgba(35,40,46,1)] border border-[rgba(255,105,22,1)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                
                {/* Search Input Header Bar */}
                <div className="flex items-center px-4 py-3.5 border-b border-gray-700 bg-[rgba(45,50,56,1)]">
                    <FiSearch className="text-[rgba(255,105,22,1)] text-xl mr-3 shrink-0" />
                    <input 
                        type="text"
                        autoFocus
                        placeholder="Search games..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-white text-sm sm:text-base focus:outline-none placeholder-gray-400"
                    />
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-colors ml-2"
                    >
                        <IoClose className="text-xl" />
                    </button>
                </div>

                {/* Search Results Dropdown List (Sirf tab dikhega jab user type karega) */}
                {searchQuery.trim() !== '' && (
                    <div className="max-h-[400px] overflow-y-auto p-3 space-y-2">
                        {filteredGames.length === 0 ? (
                            <div className="text-center py-8 text-gray-400 text-sm">
                                No games found matching "{searchQuery}"
                            </div>
                        ) : (
                            filteredGames.map((game) => (
                                <div 
                                    key={game.id}
                                    onClick={() => handleSelectGame(game)}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(45,50,56,0.6)] hover:bg-[rgba(255,105,22,1)] border border-transparent hover:border-[rgba(255,105,22,1)] cursor-pointer transition-all group"
                                >
                                    <img src={game.image} alt={game.title} className="w-12 h-12 rounded-lg object-cover border border-gray-700 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-white truncate group-hover:text-white transition-colors">
                                            {game.title}
                                        </h4>
                                        <span className="text-xs text-gray-400 group-hover:text-white font-mono">{game.price}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}