export default function Level3() {
  return (
    <div className="relative w-[180vw] h-full flex items-end pb-16 bg-ocean-light text-white shrink-0 border-r-8 border-ocean-deep overflow-hidden">
      {/* Background Layer (Water surface, waves, deep dark bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-light to-ocean-deep z-0"></div>
      
      {/* Seaweed Background */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between px-20 z-0 opacity-50">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`w-8 bg-green-600 rounded-t-full`} style={{ height: `${Math.random() * 200 + 100}px`, transform: `skewX(${Math.random() * 20 - 10}deg)` }}></div>
        ))}
      </div>

      {/* Foreground Container */}
      <div className="relative z-10 flex h-full items-end w-full px-20">
        <div className="w-[20vw]"></div> {/* Spacer */}

        {/* Project 1: FreelanceEDU */}
        <div className="flex flex-col items-center mx-20 relative">
          {/* Treasure Chest */}
          <div className="w-48 h-32 bg-yellow-700 border-4 border-black relative rounded-t-xl mb-8 flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="absolute top-4 w-full h-2 bg-yellow-900"></div>
            <div className="w-8 h-8 bg-black rounded-full border-4 border-yellow-500 absolute top-10"></div>
            <span className="text-xl font-bold drop-shadow-md relative z-10 text-white mt-12 bg-black/50 px-2 py-1">FreelanceEDU</span>
          </div>
          
          <div className="absolute bottom-48 left-0 w-80 bg-white text-black p-4 border-4 border-yellow-700 shadow-[8px_8px_0_0_rgba(180,83,9,1)]">
            <h3 className="text-lg font-bold mb-2">Ed Freelance Platform</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-full min-h-[20px] bg-green-500"></div>
                <span className="text-xs">React 19</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-full min-h-[20px] bg-green-500"></div>
                <span className="text-xs">Tailwind</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-full min-h-[20px] bg-green-500"></div>
                <span className="text-xs">Axios</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[15vw]"></div> {/* Spacer */}

        {/* Project 2: BKies */}
        <div className="flex flex-col items-center mx-20 relative">
          <div className="w-48 h-40 bg-purple-700 border-4 border-black relative rounded-t-xl mb-8 flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="absolute top-4 w-full h-2 bg-purple-900"></div>
            <div className="w-8 h-8 bg-black rounded-full border-4 border-purple-500 absolute top-10"></div>
            <span className="text-xl font-bold drop-shadow-md relative z-10 text-white mt-12 bg-black/50 px-2 py-1">BKies</span>
          </div>
          
          <div className="absolute bottom-56 left-0 w-80 bg-white text-black p-4 border-4 border-purple-700 shadow-[8px_8px_0_0_rgba(126,34,206,1)]">
            <h3 className="text-lg font-bold mb-2">Smart Campus Platform</h3>
            <p className="text-sm">Transitions and animations via Framer Motion.</p>
          </div>
        </div>

        <div className="w-[15vw]"></div> {/* Spacer */}

        {/* Project 3: Super TicTacToe */}
        <div className="flex flex-col items-center mx-20 relative">
          <div className="w-48 h-32 bg-red-700 border-4 border-black relative rounded-t-xl mb-8 flex items-center justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="absolute top-4 w-full h-2 bg-red-900"></div>
            <div className="w-8 h-8 bg-black rounded-full border-4 border-red-500 absolute top-10"></div>
            <span className="text-xl font-bold drop-shadow-md relative z-10 text-white mt-12 bg-black/50 px-2 py-1 text-center">Super<br/>TicTacToe</span>
          </div>
          
          <div className="absolute bottom-48 left-0 w-80 bg-white text-black p-4 border-4 border-red-700 shadow-[8px_8px_0_0_rgba(185,28,28,1)]">
            <h3 className="text-lg font-bold mb-2">Strategy Game</h3>
            <ul className="text-xs list-disc pl-4 flex flex-col gap-1">
              <li>Vanilla JS</li>
              <li>Algorithms</li>
              <li>Responsive UI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ocean Floor */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-yellow-900 border-t-8 border-yellow-700"></div>
      <div className="absolute bottom-16 left-0 w-full h-8 bg-yellow-800 opacity-50"></div>
    </div>
  );
}
