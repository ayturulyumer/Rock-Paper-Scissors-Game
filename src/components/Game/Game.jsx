export default function Game() {
  return (
    <main>
      <div className="relative">
        <img
          className="w-60 h-60 tablet:w-72 tablet:h-72 desktop:w-96 desktop:h-96"
          src="./src/assets/images/bg-pentagon.svg"
          alt="pentagon"
        />
        <div className="w-24 h-24 flex items-center bg-[#ffffff] justify-center border-[12px] border-[#ec9e0e] absolute top-[-30px] left-[50%] cursor-pointer rounded-full transform -translate-x-1/2 tablet:w-28 tablet:h-28 desktop:w-36 desktop:h-36 desktop:border-[16px] ">
          <img
            className="w-9 h-9 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
            src="./src/assets/images/icon-scissors.svg"
            alt="scissor"
          />
        </div>
        <div className="w-24 h-24 flex items-center bg-[#ffffff] justify-center border-[12px] border-[#4865f4] absolute top-[55px] left-[100%] cursor-pointer rounded-full transform -translate-x-1/2 tablet:w-28 tablet:h-28 desktop:w-36 desktop:h-36 desktop:border-[16px] desktop:top-[80px]">
          <img
            className="w-9 h-9 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
            src="./src/assets/images/icon-paper.svg"
            alt="scissor"
          />
        </div>
        <div className="w-24 h-24 flex items-center bg-[#ffffff] justify-center border-[12px] border-[#40b9ce] absolute top-[55px] cursor-pointer  rounded-full transform -translate-x-1/2 tablet:w-28 tablet:h-28 desktop:w-36 desktop:h-36 desktop:border-[16px] desktop:top-[80px]">
          <img
            className="w-9 h-9 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
            src="./src/assets/images/icon-spock.svg"
            alt="scissor"
          />
        </div>
        <div className="w-24 h-24 flex items-center bg-[#ffffff] justify-center border-[12px] border-[#834fe3] absolute bottom-[-40px] left-[20%] cursor-pointer  rounded-full transform -translate-x-1/2 tablet:w-28 tablet:h-28 desktop:w-36 desktop:h-36 desktop:border-[16px]">
          <img
            className="w-9 h-9 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
            src="./src/assets/images/icon-lizard.svg"
            alt="scissor"
          />
        </div>
        <div className="w-24 h-24 flex items-center bg-[#ffffff] justify-center border-[12px] border-[#dc2e4e] absolute bottom-[-40px] left-[80%] cursor-pointer  rounded-full transform -translate-x-1/2 tablet:w-28 tablet:h-28 desktop:w-36 desktop:h-36 desktop:border-[16px]">
          <img
            className="w-9 h-9 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
            src="./src/assets/images/icon-rock.svg"
            alt="scissor"
          />
        </div>
      </div>
    </main>
  );
}
