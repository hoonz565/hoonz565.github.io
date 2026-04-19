import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Character from './Character';
import Intro from './levels/Intro';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';

gsap.registerPlugin(ScrollTrigger);

export default function ResumeWorld() {
  const containerRef = useRef(null);
  const worldRef = useRef(null);
  
  const [characterState, setCharacterState] = useState('idle');
  const [isMoving, setIsMoving] = useState(false);

  useGSAP(() => {
    // Total width to scroll
    const totalWidth = worldRef.current.scrollWidth - window.innerWidth;
    
    // Create the horizontal scroll animation
    const scrollTween = gsap.to(worldRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // The more we want to scroll vertically before reaching end, the larger end should be
        end: () => `+=${totalWidth}`,
        onUpdate: (self) => {
          // Detect movement for animation
          setIsMoving(Math.abs(self.getVelocity()) > 10);
          
          const progress = self.progress;

          // Define sections based on horizontal percentage roughly
          // Total width is roughly 550vw
          // L1: 100vw, L2: 150vw, L3: 180vw, L4: 120vw
          
          if (progress < 0.18) {
            // Level 1 mostly walking
            if (progress > 0.12 && progress < 0.18) {
              setCharacterState('fly');
            } else {
              setCharacterState('walk');
            }
          } else if (progress >= 0.18 && progress < 0.45) {
            // Level 2 (Education)
            setCharacterState('walk');
          } else if (progress >= 0.45 && progress < 0.78) {
            // Level 3 (Underwater / Projects)
            setCharacterState('swim');
          } else if (progress >= 0.78) {
            // Level 4 (Contact / Sky)
            setCharacterState('balloon');
          }
        }
      }
    });

    // We can also animate opacities for modals here if wanted securely, e.g.
    // gsap.to(".modal-vnu", { opacity: 1, scrollTrigger: { containerAnimation: scrollTween, trigger: ".modal-vnu", start: "left center" }});

    return () => {
      scrollTween.kill();
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden bg-black relative">
      <Character state={characterState} isMoving={isMoving} />
      
      <div 
        ref={worldRef} 
        className="flex h-full will-change-transform"
        style={{ width: 'max-content' }}
      >
        <Intro />
        <Level1 />
        <Level2 />
        <Level3 />
        <Level4 />
      </div>
      
      {/* Scroll Indicator overlay */}
      <div className="fixed bottom-8 left-8 text-white z-50 text-xs animate-bounce bg-black/50 p-2 border-2 border-white pixelated select-none">
        SCROLL &darr;
      </div>
    </div>
  );
}
