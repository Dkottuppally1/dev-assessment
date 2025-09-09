import GameCard from "./GameCard";
import { games, casual_games } from "../data/gamesData";
import { useState } from "react";

function GameGrid() {
  const [comp, setComp] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter games based on search term
  const currentGames = comp ? games : casual_games;
  const filteredGames = Object.entries(currentGames).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center px-[100px]">
      <div className="w-full px-4 pb-4 font-barlow text-xl">
        <button
          className={
            comp
              ? "px-2 text-bright-buzz underline underline-offset-8"
              : "px-2 text-white underline-offset-4 duration-500 hover:text-bright-buzz"
          }
          onClick={() => setComp(true)}
        >
          Competitive
        </button>
        <button
          className={
            !comp
              ? "px-2 text-bright-buzz underline underline-offset-8"
              : "px-2 text-white underline-offset-4 duration-500 hover:text-bright-buzz"
          }
          onClick={() => setComp(false)}
        >
          Casual
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="w-full px-4 pb-6">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 bg-white/10 px-4 py-2 text-white placeholder-gray-300 backdrop-blur-sm focus:border-bright-buzz focus:outline-none focus:ring-2 focus:ring-bright-buzz/50"
        />
      </div>

      {/* Game Cards */}
      {filteredGames.length > 0 ? (
        filteredGames.map(([name, game], index) => (
          <div className="p-3" key={index}>
            <GameCard
              image={game.image}
              name={name}
              link={game.pageLink}
              discordLink={game.discordLink}
              description={game.description}
            />
          </div>
        ))
      ) : (
        <div className="w-full text-center">
          <p className="text-white text-lg font-barlow">No results found</p>
        </div>
      )}
    </div>
  );
}

export default GameGrid;
