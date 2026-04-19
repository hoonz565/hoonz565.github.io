import { Send, Phone, Mail } from 'lucide-react';

export default function Level4() {
  return (
    <div className="relative w-[120vw] h-full flex items-center justify-center bg-blue-400 text-city shrink-0">
      {/* Background Layer (Clouds) */}
      <div className="absolute inset-0 pointer-events-none opacity-80 z-0">
        <div className="absolute top-20 left-20 w-48 h-24 bg-white rounded-full"></div>
        <div className="absolute top-10 left-32 w-32 h-32 bg-white rounded-full"></div>
        
        <div className="absolute top-40 left-1/3 w-64 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 left-[40%] w-48 h-48 bg-white rounded-full"></div>
        
        <div className="absolute top-32 right-1/4 w-56 h-28 bg-white rounded-full"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center w-full px-20">
        
        <div className="flex gap-20 items-center justify-center ml-[30vw]">
          
          {/* Contact Banners */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <span className="text-xl">hello@mh.com</span>
            </div>
            
            <div className="bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex items-center gap-4">
              <Phone className="w-8 h-8 text-green-600" />
              <span className="text-xl">+84 123 456 789</span>
            </div>
          </div>

          {/* Large Pixel Message Form */}
          <div className="bg-blue-800 p-8 border-8 border-black shadow-[16px_16px_0_0_rgba(0,0,0,1)] text-white flex flex-col gap-6 w-96 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 border-4 border-black text-xl font-bold">
              SEND A MESSAGE
            </div>
            
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              className="mt-4 p-4 bg-blue-900 border-4 border-black text-white placeholder-blue-400 focus:outline-none focus:border-yellow-400 font-pixel uppercase"
            />
            
            <textarea 
              placeholder="MESSAGE..." 
              rows="4"
              className="p-4 bg-blue-900 border-4 border-black text-white placeholder-blue-400 focus:outline-none focus:border-yellow-400 font-pixel uppercase resize-none"
            ></textarea>
            
            <button className="bg-green-500 hover:bg-green-400 text-black p-4 border-4 border-black flex items-center justify-center gap-4 text-xl font-bold transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <Send className="w-6 h-6" />
              SEND
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
