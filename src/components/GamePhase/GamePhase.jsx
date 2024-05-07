import getBorderColor from "../../utils/getBorderColor.js";
import { useState, useEffect } from "react";

const hands = ["rock", "paper", "scissors", "lizard", "spock"];

export default function GamePhase({ playerHand }) {
  const [computerHand, setComputerHand] = useState("rock");
  const [result, setResult] = useState(null);
  const [countdown, setCountdown] = useState(3);

  // Start countdown timer and update computerHand whenever countdown changes
  useEffect(() => {
    const shufflingInterval = setInterval(() => {
      handleShuffling();
    }, 200); // Interval for shuffling
  
    const outcomeTimeout = setTimeout(() => {
      handleGameOutcome();
      clearInterval(shufflingInterval); // Clear the shuffling interval once the countdown is over
    }, countdown * 1000); // Countdown duration in milliseconds
  
    return () => {
      clearInterval(shufflingInterval);
      clearTimeout(outcomeTimeout);
    };
  }, [])

  // Function to determine the outcome of the game
  const handleGameOutcome = () => {
    const randomIndex = Math.floor(Math.random() * hands.length);
    const computerHand = hands[randomIndex];
    setComputerHand(computerHand);
    if (playerHand === computerHand) {
      setResult("draw");
    } else if (
      (playerHand === "rock" &&
        (computerHand === "scissors" || computerHand === "lizard")) ||
      (playerHand === "paper" &&
        (computerHand === "rock" || computerHand === "spock")) ||
      (playerHand === "scissors" &&
        (computerHand === "paper" || computerHand === "lizard")) ||
      (playerHand === "lizard" &&
        (computerHand === "paper" || computerHand === "spock")) ||
      (playerHand === "spock" &&
        (computerHand === "rock" || computerHand === "scissors"))
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  const handleShuffling = () => {
    // Select a random hand during each countdown interval
    const randomHand = hands[Math.floor(Math.random() * hands.length)];
    setComputerHand(randomHand);
  };

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
      {result && (
        <div className="text-white">
          {result === "win" && <p>You win!</p>}
          {result === "lose" && <p>You lose!</p>}
          {result === "draw" && <p>It's a draw!</p>}
        </div>
      )}
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
