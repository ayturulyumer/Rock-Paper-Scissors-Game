export default function GamePhase() {
  return (
    <section className="w-screen h-60 flex justify-around">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase order-last laptop:order-first">You picked</h1>
        <button className="cursor-pointer">
          <img src="rock-icon.png" alt="Rock" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="uppercase order-last laptop:order-first">
          The House Picked
        </h1>
        <button className="cursor-pointer">
          <img src="rock-icon.png" alt="Rock" />
        </button>
      </div>
    </section>
  );
}
