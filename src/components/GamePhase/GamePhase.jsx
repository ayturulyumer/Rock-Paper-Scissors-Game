import getBorderColor from "../../utils/getBorderColor.js";

export default function GamePhase({ playerHand }) {
  return (
    <section className="w-screen h-auto flex justify-center gap-20">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="uppercase text-white order-last laptop:order-first desktop:text-3xl desktop: mb-14">
          You picked
        </h1>
        <button className={`w-28 h-28 flex items-center bg-white justify-center border-[12px] border-[${getBorderColor(playerHand)}] rounded-full cursor-pointer shadow-gray  tablet:w-28 tablet:h-28 desktop:w-72 desktop:h-72 desktop:border-[35px]`}>
          <img
            className="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-28 desktop:h-28"
            src="./src/assets/images/icon-scissors.svg"
            alt="Scissors"
          />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="uppercase text-white order-last laptop:order-first desktop:text-3xl desktop:mb-14">
          The House Picked
        </h1>
        <button className="w-28 h-28 flex items-center bg-white justify-center border-[12px] border-[#ec9e0e] rounded-full cursor-pointer shadow-gray tablet:w-28 tablet:h-28 desktop:w-72 desktop:h-72 desktop:border-[35px]">
          <img
            className="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-28 desktop:h-28"
            src="./src/assets/images/icon-scissors.svg"
            alt="Scissors"
          />
        </button>
      </div>
    </section>
  );
}
