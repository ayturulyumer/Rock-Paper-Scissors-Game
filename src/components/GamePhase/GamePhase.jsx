import getBorderColor from "../../utils/getBorderColor.js";
import { useState, useEffect } from "react";

const hands = ["rock", "paper", "scissors", "lizard", "spock"];

export default function GamePhase({ playerHand }) {
  const [computerHand, setComputerHand] = useState("rock");
  const [countdown, setCountdown] = useState(3); // Countdown timer in seconds


 // Function to handle countdown timer
 const handleCountdown = () => {
  // Select a random hand during each countdown interval
  const randomHand = hands[Math.floor(Math.random() * hands.length)];
  setComputerHand(randomHand);
};

// Start countdown timer and update computerHand whenever countdown changes
useEffect(() => {
  // Start countdown interval
  const interval = setInterval(() => {
    handleCountdown();
  }, 150); // Interval in milliseconds

  // Clear interval when countdown reaches 0
  setTimeout(() => {
    clearInterval(interval);
  }, countdown * 1000); // Duration in milliseconds

  return () => clearInterval(interval); // Cleanup function
}, [countdown]);

  return (
    <section className="w-screen h-auto flex justify-center gap-20">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="uppercase text-white order-last laptop:order-first desktop:text-3xl desktop: mb-14">
          You picked
        </h1>
        <button
          className={`w-28 h-28 flex items-center bg-white justify-center border-[12px] border-[${getBorderColor(
            playerHand
          )}] rounded-full cursor-pointer shadow-gray  tablet:w-28 tablet:h-28 desktop:w-72 desktop:h-72 desktop:border-[35px]`}
        >
          <img
            className="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-28 desktop:h-28"
            src={`./src/assets/images/icon-${playerHand}.svg`}
            alt={playerHand}
          />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="uppercase text-white order-last laptop:order-first desktop:text-3xl desktop:mb-14">
          The House Picked
        </h1>
        <button
          className={`w-28 h-28 flex items-center bg-white justify-center border-[12px] border-[${getBorderColor(
            computerHand
          )}] rounded-full cursor-pointer shadow-gray  tablet:w-28 tablet:h-28 desktop:w-72 desktop:h-72 desktop:border-[35px]`}
        >
          <img
            className="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-28 desktop:h-28"
            src={`./src/assets/images/icon-${computerHand}.svg`}
            alt={computerHand}
          />
        </button>
      </div>
    </section>
  );
}
