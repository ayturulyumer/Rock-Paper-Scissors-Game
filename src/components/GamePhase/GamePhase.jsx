import { useState, useEffect } from "react";
import GameResultMessage from "../GameResultMessage/GameResultMessage.jsx";
import GamePhasePickedHand from "../GamePhasePickedHand/GamePhasePickedHand.jsx";

const hands = ["rock", "paper", "scissors", "lizard", "spock"];

export default function GamePhase({
  playerHand,
  increaseScore,
  decreaseScore,
  playAgain,
}) {
  const [computerHand, setComputerHand] = useState("rock");
  const [result, setResult] = useState(null);
  const [countdown, setCountdown] = useState(3);

  // Start countdown timer and update computerHand whenever countdown changes
  useEffect(() => {
    const shufflingInterval = setInterval(() => {
      handleShuffling();
    }, 100); // Interval for shuffling

    const outcomeTimeout = setTimeout(() => {
      handleGameOutcome();
      clearInterval(shufflingInterval); // Clear the shuffling interval once the countdown is over
    }, countdown * 1000); // Countdown duration in milliseconds

    return () => {
      clearInterval(shufflingInterval);
      clearTimeout(outcomeTimeout);
    };
  }, []);

  // Function to determine the outcome of the game
  const handleGameOutcome = () => {
    const randomIndex = Math.floor(Math.random() * hands.length);
    const computerHand = hands[randomIndex];
    setComputerHand(computerHand);
    if (playerHand === computerHand) {
      setResult("it's a draw");
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
      setResult("you win");
      increaseScore();
    } else {
      setResult("you lose");
      decreaseScore();
    }
  };

  const handleShuffling = () => {
    // Select a random hand during each countdown interval
    const randomHand = hands[Math.floor(Math.random() * hands.length)];
    setComputerHand(randomHand);
  };

  return (
    <section className="w-screen h-auto flex justify-center flex-wrap gap-20 ">
      <GamePhasePickedHand message={"You Picked"} hand={playerHand} />
      {result && (
        <div className="hidden self-center desktop:block">
          <GameResultMessage result={result} playAgain={playAgain} />
        </div>
      )}
      <GamePhasePickedHand message={"The House Picked"} hand={computerHand} />
      {result && (
        <div className="flex-wrap desktop:hidden">
          <GameResultMessage result={result} playAgain={playAgain} />
        </div>
      )}
    </section>
  );
}
