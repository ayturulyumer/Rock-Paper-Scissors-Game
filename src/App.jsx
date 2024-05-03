import Header from "./components/Header/Header.jsx";
import Game from "./components/Game/Game.jsx";
import Rules from "./components/Rules/Rules.jsx";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-24  font-body bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]">
      <Header />
      <Game />
      <Rules/>
    </div>
  );
}
