import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Game from "./components/Game/Game.jsx";
import Rules from "./components/Rules/Rules.jsx";
import RulesModal from "./components/RulesModal/RulesModal.jsx";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center gap-24  font-body bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]">
      <Header />
      <Game />
      <Rules toggleShowModal={toggleShowModal} />
      {showModal && <RulesModal toggleShowModal={toggleShowModal}/>}
    </div>
  );
}
