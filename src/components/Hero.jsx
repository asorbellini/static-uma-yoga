import CircularButton from "./CircularButton";

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-[url('/images/homebg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center">
          <h2 className="text-5xl font-serif bg-black/40 p-4 rounded">Bienvenid@ a UMĀ</h2>
      </div>
      <CircularButton />
    </div>
  );
}

export default Hero;