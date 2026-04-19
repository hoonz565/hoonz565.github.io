export default function Intro() {
  return (
    <div className="relative w-[100vw] h-full flex items-center justify-center bg-sky-light text-city shrink-0 border-r-8 border-city">
      <div className="text-center z-10 px-8">
        <h1 className="text-3xl md:text-5xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold uppercase tracking-widest pixelated leading-loose">
          Interactive Resume
          <br />
          <span className="text-yellow-300">of</span>
          <br />
          Nguyen Minh Hung
        </h1>
        <p className="mt-8 text-white/90 text-lg uppercase pixelated drop-shadow-[2px_2px_0_rgba(0,0,0,1)] animate-pulse">
          Scroll Down to Start
        </p>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-ground-top border-t-8 border-ground-deep z-20"></div>
    </div>
  );
}
