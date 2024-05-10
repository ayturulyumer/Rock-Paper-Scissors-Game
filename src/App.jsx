import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import HandSelection from "./components/HandSelection/HandSelection.jsx";
import Rules from "./components/Rules/Rules.jsx";
import RulesModal from "./components/RulesModal/RulesModal.jsx";
import GamePhase from "./components/GamePhase/GamePhase.jsx";
import { SCORE_STORAGE_KEY } from "./constants.js";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedHand, setSelectedHand] = useState(null);
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem(SCORE_STORAGE_KEY);
    // If it exist return it's value as number
    if (storedScore !== null) {
      return parseInt(storedScore);
    }
    // If it doesn't exist create it and return 0 as initial value
    localStorage.setItem(SCORE_STORAGE_KEY, "0");
    return 0;
  });

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    localStorage.setItem(SCORE_STORAGE_KEY, newScore);
  };

  const decreaseScore = () => {
    let newScore = score - 1;
    // Ensure score is non-negative
    if (newScore < 0) {
      newScore = 0;
    }
    setScore(newScore);
    localStorage.setItem(SCORE_STORAGE_KEY, newScore);
  };

  const resetScore = () => {
    setScore(0);
    localStorage.setItem(SCORE_STORAGE_KEY, "0");
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const playAgain = () => {
    setSelectedHand(null);
  };

  const handleHandSelection = (e) => {
    const handId = e.currentTarget.id;
    setSelectedHand(handId);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-24  font-body bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]">
      <Header score={score} />
      {selectedHand === null ? (
        <HandSelection handleHandSelection={handleHandSelection} />
      ) : (
        <GamePhase
          playerHand={selectedHand}
          increaseScore={increaseScore}
          decreaseScore={decreaseScore}
          resetScore={resetScore}
          playAgain={playAgain}
        />
      )}
      <Rules toggleShowModal={toggleShowModal} />
      {showModal && <RulesModal toggleShowModal={toggleShowModal} />}
    </div>
  );
}
