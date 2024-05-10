export default function GameResultMessage({ result, playAgain }) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="uppercase text-center text-6xl text-white">{result}</h1>
      <button
        className="h-12 w-56 bg-white border-2 rounded-md flex justify-center items-center cursor-pointer "
        onClick={playAgain}
      >
        <p className="uppercase tracking-widest text-[#3b4363]">Play Again</p>
      </button>
      <button
        className="h-12 w-56 bg-white border-2 rounded-md flex justify-center items-center cursor-pointer "
      >
        <p className="uppercase tracking-widest text-[#3b4363]">Reset Score</p>
      </button>
    </div>
  );
}
