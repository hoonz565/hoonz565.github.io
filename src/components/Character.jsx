import { useState, useEffect } from 'react';

// A simple CSS-based pixel art character for demonstration.
// You can replace the contents of the character-wrapper with your own <img> tag pointing to a sprite sheet later.
export default function Character({ state = 'idle', isMoving = false }) {
  // state can be: 'walk', 'fly', 'swim', 'idle', 'balloon'
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    let interval;
    if (isMoving && (state === 'walk' || state === 'swim')) {
      interval = setInterval(() => {
        setBounce((prev) => !prev);
      }, 150);
    } else {
      setBounce(false);
    }
    return () => clearInterval(interval);
  }, [isMoving, state]);

  let characterColors = {
    hat: 'bg-red-500',
    face: 'bg-orange-200',
    body: 'bg-blue-600',
    legs: 'bg-yellow-800'
  };

  if (state === 'swim') {
    characterColors.body = 'bg-teal-500'; // wetsuit
  } else if (state === 'fly') {
    characterColors.body = 'bg-red-600'; // superman cape vibes
    characterColors.hat = 'bg-yellow-400'; 
  } else if (state === 'balloon') {
    characterColors.body = 'bg-red-500';
  }

  return (
    <div className={`fixed left-1/4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300
      ${state === 'fly' ? '-translate-y-3/4' : ''}
      ${state === 'swim' ? 'translate-y-1/4 rotate-[15deg]' : ''}
    `}>
      <div 
        className="relative w-16 h-24 flex flex-col items-center image-rendering-pixelated"
        style={{ transform: bounce ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.1s linear' }}
      >
        {/* Placeholder Pixel Character structure */}
        {/* Hat */}
        <div className={`w-10 h-4 ${characterColors.hat}`}></div>
        {/* Face */}
        <div className={`w-8 h-6 ${characterColors.face} relative`}>
          {/* Eyes */}
          <div className="absolute top-2 right-1 w-2 h-2 bg-black"></div>
        </div>
        {/* Body */}
        <div className={`w-12 h-8 ${characterColors.body} relative`}>
          {state === 'fly' && <div className="absolute -left-4 top-0 w-4 h-full bg-red-700 animate-pulse"></div> /* cape */}
        </div>
        {/* Legs */}
        <div className="flex gap-2 mt-1">
          <div className={`w-4 h-6 ${characterColors.legs} ${bounce && state === 'walk' ? 'translate-y-[-4px]' : ''}`}></div>
          <div className={`w-4 h-6 ${characterColors.legs} ${!bounce && state === 'walk' ? 'translate-y-[-4px]' : ''}`}></div>
        </div>
      </div>
      {/* Jetpack flames if flying */}
      {state === 'fly' && isMoving && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 flex gap-1 animate-ping">
          <div className="w-2 h-4 bg-orange-500"></div>
          <div className="w-2 h-4 bg-yellow-500"></div>
        </div>
      )}
      {/* Bubbles if swimming */}
      {state === 'swim' && isMoving && (
        <div className="absolute -top-6 right-0 w-2 h-2 bg-white rounded-full animate-bounce"></div>
      )}
      {/* Hot Air Balloon Basket & Balloon wrapping the character */}
      {state === 'balloon' && (
        <div className="absolute -inset-16 -top-32 pointer-events-none z-[-1] flex flex-col items-center">
          {/* Balloon Canopy */}
          <div className="w-48 h-48 bg-red-500 rounded-full border-4 border-black border-b-0 shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.2)]"></div>
          {/* Balloon Bottom */}
          <div className="w-32 h-16 bg-red-400 border-4 border-t-0 border-black shadow-[inset_-8px_-8px_0_rgba(0,0,0,0.2)]"></div>
          {/* Ropes */}
          <div className="flex justify-between w-16 -mt-2 z-10">
            <div className="w-1 h-16 bg-black"></div>
            <div className="w-1 h-16 bg-black"></div>
          </div>
          {/* Basket */}
          <div className="w-24 h-16 bg-yellow-800 border-4 border-black absolute bottom-24 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"></div>
        </div>
      )}
    </div>
  );
}
