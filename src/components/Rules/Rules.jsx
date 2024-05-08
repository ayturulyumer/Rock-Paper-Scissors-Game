
export default function Rules({toggleShowModal}) {
  return (
    <button
      onClick={toggleShowModal}
      className="h-10 w-32  border-2 rounded-md flex justify-center items-center cursor-pointer  desktop:self-end desktop:mr-8 desktop:mt-0 "
    >
      <p className="uppercase text-[#ffffff] tracking-widest">Rules</p>
    </button>
  );
}
