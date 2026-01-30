import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import wineRevealAnimation from '../assets/wired-flat-241-cheers-cin-cin-wine-in-reveal.json';
import wineCheersAnimation from '../assets/wired-flat-241-cheers-cin-cin-wine-hover-cheers.json';

const WineAnimation = () => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(wineRevealAnimation);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Play the reveal animation once
          if (lottieRef.current) {
            lottieRef.current.play();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  const handleAnimationComplete = () => {
    if (!hasPlayedInitial && currentAnimation === wineRevealAnimation) {
      // After reveal completes, automatically switch to hover-cheers and play it
      setCurrentAnimation(wineCheersAnimation);
      setHasPlayedInitial(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (lottieRef.current) {
            lottieRef.current.play();
          }
        });
      });
    }
  };

  const handleMouseEnter = () => {
    if (isVisible && hasPlayedInitial) {
      // Play hover-cheers animation on subsequent hovers
      if (lottieRef.current) {
        lottieRef.current.stop();
        lottieRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    // Stay on the last frame
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-xs mx-auto cursor-pointer transition-transform duration-300 hover:scale-105"
      style={{
        filter: 'hue-rotate(20deg) saturate(0.8)',
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={currentAnimation}
        loop={false}
        autoplay={false}
        onComplete={handleAnimationComplete}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default WineAnimation;
