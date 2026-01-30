import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

const ContactAnimation = ({ revealAnimation, hoverAnimation }) => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(revealAnimation);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
    if (!hasPlayedInitial && currentAnimation === revealAnimation) {
      setCurrentAnimation(hoverAnimation);
      setHasPlayedInitial(true);
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }
  };

  const handleMouseEnter = () => {
    if (isVisible && hasPlayedInitial) {
      if (lottieRef.current) {
        lottieRef.current.stop();
        lottieRef.current.play();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
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

export default ContactAnimation;
