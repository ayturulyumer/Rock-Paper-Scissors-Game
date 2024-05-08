import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import HandSelection from "./components/HandSelection/HandSelection.jsx";
import Rules from "./components/Rules/Rules.jsx";
import RulesModal from "./components/RulesModal/RulesModal.jsx";
import GamePhase from "./components/GamePhase/GamePhase.jsx";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedHand, setSelectedHand] = useState(null);
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    if (score > 1) {
      setScore(score - 1);
    }
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleHandSelection = (e) => {
    const handId = e.currentTarget.id;
    setSelectedHand(handId);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-24  font-body bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]">
      <Header />
      {selectedHand === null ? (
        <HandSelection handleHandSelection={handleHandSelection} />
      ) : (
        <GamePhase playerHand={selectedHand} />
      )}
      <Rules toggleShowModal={toggleShowModal} />
      {showModal && <RulesModal toggleShowModal={toggleShowModal} />}
    </div>
  );
}
