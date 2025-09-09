import { GameCardProps } from "../types";
import { useState, useEffect } from "react";

function GameCard(props: GameCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="card flex flex-col items-center">
        <img
          src={props.image}
          alt={`${props.name}`}
          className="card-image h-[295px] w-[225px] rounded-2xl pb-2 pl-3 pr-3 pt-3"
        />
        <h1 className="pb-2 font-barlow text-lg text-white">{props.name}</h1>
        <div className="mb-3 flex w-full justify-between">
          <button 
            className="learn-more-btn text-barlow ml-3 flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </button>
          <a href={props.discordLink} target="_blank">
            <button className="discord-btn mr-3"></button>
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-md rounded-lg bg-gray-800 p-6 shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-white hover:text-bright-buzz"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="mb-4 text-2xl font-bold text-white">{props.name}</h2>
            <p className="text-gray-300">{props.description}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded bg-bright-buzz px-4 py-2 text-white hover:bg-bright-buzz/80"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameCard;
