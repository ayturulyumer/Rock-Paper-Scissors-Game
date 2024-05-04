import CloseIcon from "@mui/icons-material/Close";
export default function RulesModal({ toggleShowModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center desktop:bg-black desktop:bg-opacity-50">
        <div className="flex items-center justify-center  w-screen h-screen bg-[#ffffff] rounded-lg  desktop:w-[420px] desktop:h-[480px]">
          <div className="flex flex-col items-center justify-around desktop:flex-row desktop:justify-center desktop:items-start ">
            <div className="p-4">
              <h2 className="text-[36px] text-[#3B4363] font-semibold mb-24 uppercase text-center desktop:mb-8 desktop:text-left ">
                Rules
              </h2>
              <img
                className="desktop:ml-10 desktop:h-80 desktop:w-80"
                src="./src/assets/images/image-rules-bonus.svg"
                alt="rules"
              />
            </div>
            <div className="p-4 bg-gray-100 rounded-b">
              <button onClick={toggleShowModal} className="self-baseline">
                <CloseIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
