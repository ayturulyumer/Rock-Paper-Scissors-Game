import getBorderColor from "../../utils/getBorderColor.js";

export default function GamePhasePickedHand({ message, hand, ripple }) {


  return (
    <div className="flex flex-col gap-4 items-center basis-1/4 tablet:basis-4/12 laptop:basis-5/12 desktop:basis-0">
      <h1 className="uppercase text-white order-last desktop::order-first desktop:text-3xl desktop: mb-14">
        {message}
      </h1>

        <button
          className={`w-28 h-28 flex items-center bg-white justify-center border-[12px] border-[${getBorderColor(
            hand
          )}] rounded-full  shadow-gray  tablet:w-28 tablet:h-28 desktop:w-72 desktop:h-72 desktop:border-[35px]`}  
        >
          <img
            className="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-28 desktop:h-28"
            src={`./public/icon-${hand}.svg`}
            alt={hand}
          /> 
        </button>
      </div>
  );
}
