export default function Main() {
  return (
    <main>
      <div className="relative">
        <img
          className="w-60 h-60"
          src="./src/assets/images/bg-pentagon.svg"
          alt="pentagon"
        />
        <div className="w-20 h-20 border-[10px] absolute top-[-30px] left-[50%] rounded-full transform -translate-x-1/2">
          <img
            className="w-8 h-8"
            src="./src/assets/images/icon-scissors.svg"
            alt="scissor"
          />
        </div>
      </div>
    </main>
  );
}
