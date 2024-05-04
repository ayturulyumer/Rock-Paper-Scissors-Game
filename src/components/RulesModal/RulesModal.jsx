import CloseIcon from "@mui/icons-material/Close";
export default function RulesModal({ toggleShowModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="bg-[#ffffff] w-screen h-screen rounded shadow-lg flex flex-col items-center justify-around  ">
          {/* Modal Content */}
          <div className="p-4">
            <h2 className="text-[36px] text-[#3B4363] font-semibold mb-24 uppercase text-center ">
              Rules
            </h2>
            <img  src="./src/assets/images/image-rules-bonus.svg" alt="rules" />
          </div>
          <div className="p-4 bg-gray-100 rounded-b">
            <button
              onClick={toggleShowModal}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              <CloseIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
