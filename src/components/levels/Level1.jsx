import hcmcBg from '../../assets/hcmc-bg.png';
import { Mail, Link } from 'lucide-react';

export default function Level1() {
  return (
    <div className="relative w-[100vw] h-full flex items-end pb-32 bg-sky-light text-city shrink-0 border-r-8 border-city">
      {/* Background Layer (HCMC Image) */}
      <div className="absolute inset-0 flex items-end justify-center pb-32 pointer-events-none opacity-80 z-0">
        <img src={hcmcBg} alt="HCMC Background" className="h-96 w-auto pixelated object-contain" />
      </div>

      {/* Foreground Container */}
      <div className="relative z-10 flex h-full items-end w-full px-20">
        <div className="flex flex-col items-center ml-[20vw] relative group">
          <h1 className="text-4xl text-city drop-shadow-md mb-8 bg-white/80 p-4 border-4 border-city pixelated">
            LEVEL 1
          </h1>
          <div className="w-16 h-64 bg-yellow-600 border-4 border-yellow-800"></div> {/* Gate pole */}
        </div>

        {/* Content Cards */}
        <div className="ml-64 flex gap-16 mb-24">
          <div className="bg-white p-6 border-4 border-black w-80 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h2 className="text-xl mb-4 font-bold text-blue-600">Nguyen Minh Hung</h2>
            <p className="text-sm">3rd-year SE Student @ HCMUT</p>
          </div>

          <div className="bg-white p-6 border-4 border-black w-80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col justify-between">
            <h2 className="text-lg text-green-700 mb-2">Seeking Front-End Internship</h2>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 border-2 border-black hover:bg-gray-200"><Mail /></a>
              <a href="#" className="p-2 border-2 border-black hover:bg-gray-200"><Link /></a>
            </div>
          </div>
        </div>

        {/* HCMC Banner */}
        <div className="absolute top-1/3 left-1/2 ml-48 bg-yellow-300 p-4 border-4 border-black rotate-[-5deg]">
          <h2 className="text-2xl text-black">LIVE & WORK IN HCMC</h2>
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-ground-top border-t-8 border-ground-deep"></div>
    </div>
  );
}
