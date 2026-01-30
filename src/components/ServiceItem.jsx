import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

const ServiceItem = ({ title, description, animationData, hoverAnimationData }) => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(animationData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setHasPlayed(true);
          setIsVisible(true);
          if (lottieRef.current) {
            lottieRef.current.play();
          }
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasPlayed]);

  const handleMouseEnter = () => {
    if (hasPlayed && hoverAnimationData) {
      setCurrentAnimation(hoverAnimationData);
      setTimeout(() => {
        if (lottieRef.current) {
          lottieRef.current.goToAndStop(0, true);
          lottieRef.current.play();
        }
      }, 50);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`flex items-start gap-6 p-8 bg-primary-900/8 border-2 border-primary/25 hover:border-accent hover:bg-accent-900/10 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer group rounded-2xl relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
    >
      {/* Accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent group-hover:bg-secondary transition-colors duration-500"></div>
      
      <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-primary-800/15 rounded-xl group-hover:bg-accent-700/25 group-hover:scale-105 transition-all duration-500 relative z-10">
        <Lottie
          lottieRef={lottieRef}
          animationData={currentAnimation}
          loop={false}
          autoplay={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="flex-1 relative z-10">
        <h3 className="text-text-200 font-bold text-lg group-hover:text-primary transition-colors duration-300 mb-2">{title}</h3>
        {description && (
          <p className="text-text-400 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
