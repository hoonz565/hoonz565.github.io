import hcmutImg from '../../assets/hcmut.png';
import lhpImg from '../../assets/lhp.png';

export default function Level2() {
  return (
    <div className="relative w-[150vw] h-full flex items-end pb-32 bg-sky-light text-city shrink-0 border-r-8 border-city">
      {/* Background Layer (Clouds / Hills) */}
      <div className="absolute inset-0 flex items-end pb-32 pointer-events-none opacity-40 z-0">
        <div className="w-96 h-48 bg-green-800 rounded-t-full mx-10 ml-64"></div>
        <div className="w-64 h-64 bg-green-700 rounded-t-full mx-10 mt-10"></div>
      </div>

      {/* Foreground Container */}
      <div className="relative z-10 flex h-full items-end w-full px-20">
        <div className="w-[40vw]"></div> {/* Spacer */}

        {/* VNUHCM-HCMUT Gate */}
        <div className="flex flex-col items-center relative group mx-20">
          <img src={hcmutImg} alt="HCMUT Gate" className="w-80 h-auto object-cover pixelated z-20 shadow-xl border-4 border-black bg-blue-900/50" />
          
          {/* Modal Content - Shows when near (handled by CSS hover for now or absolute positioning via parent GSAP later) */}
          <div className="absolute top-1/4 left-full ml-8 w-96 bg-white p-6 border-4 border-blue-600 shadow-[8px_8px_0_0_rgba(37,99,235,1)]">
            <h3 className="text-xl text-blue-800 mb-2 font-bold">Computer Science</h3>
            <p className="text-sm mb-4">English-Taught Program</p>
            <div className="bg-yellow-100 p-2 border-2 border-yellow-500 inline-block">
              <span className="text-yellow-700 font-bold">IELTS 6.5</span> Plaque
            </div>
          </div>
        </div>

        <div className="w-[30vw]"></div> {/* Spacer */}

        {/* Le Hong Phong Gate */}
        <div className="flex flex-col items-center relative group mx-20">
          <img src={lhpImg} alt="Le Hong Phong Gate" className="w-80 h-auto object-cover pixelated z-20 shadow-xl border-4 border-black bg-red-900/50" />
          
          <div className="absolute top-1/4 left-full ml-8 w-72 bg-white p-6 border-4 border-red-600 shadow-[8px_8px_0_0_rgba(220,38,38,1)]">
            <h3 className="text-xl text-red-800 mb-2 font-bold">Major in Mathematics</h3>
          </div>
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-ground-top border-t-8 border-ground-deep"></div>
    </div>
  );
}
