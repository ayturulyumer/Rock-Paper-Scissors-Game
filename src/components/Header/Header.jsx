export default function Header({ score }) {
  return (
    <header className="flex box-border h-24 w-screen m-8 border-2 border-[#606e85] rounded-lg phone:h-28 phone:w-2/3 tablet:h-36 tablet:w-1/2 desktop:h-40   ">
      <section className="flex-1">
        <img
          className="p-6 h-24 w-24 tablet:h-36 tablet:w-36"
          src="./src/assets/images/logo-bonus.svg"
          alt="rules"
        />
      </section>
      <div className="flex  flex-col gap-0 items-center justify-between  uppercase w-20  h-20 bg-[#ffffff] my-2 mr-2 border-2 rounded-lg phone:my-4 phone:mr-4 tablet:w-40 tablet:h-28">
        <h1 className="mt-2  text-[12px] text-[#2a46c0] phone:text-[15px] tablet:text-[18px] tablet:mt-4">
          Score
        </h1>
        <p className="mb-4 leading-none text-[40px] text-[#3B4363]  desktop:text-[60px]">
          {score}
        </p>
      </div>
    </header>
  );
}
