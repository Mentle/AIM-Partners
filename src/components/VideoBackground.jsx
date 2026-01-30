import { useRef, useState, useEffect } from 'react';

const VideoBackground = ({ videos }) => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(1);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;

    const handleVideo1End = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      video2.src = videos[nextIndex];
      video2.load();
      video2.play().catch(err => console.log('Video autoplay prevented:', err));
      setActiveVideo(2);
      setCurrentVideoIndex(nextIndex);
    };

    const handleVideo2End = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      video1.src = videos[nextIndex];
      video1.load();
      video1.play().catch(err => console.log('Video autoplay prevented:', err));
      setActiveVideo(1);
      setCurrentVideoIndex(nextIndex);
    };

    video1.addEventListener('ended', handleVideo1End);
    video2.addEventListener('ended', handleVideo2End);

    return () => {
      video1.removeEventListener('ended', handleVideo1End);
      video2.removeEventListener('ended', handleVideo2End);
    };
  }, [videos, currentVideoIndex]);

  useEffect(() => {
    // Initialize first video
    const video1 = video1Ref.current;
    if (video1) {
      video1.src = videos[0];
      video1.load();
      video1.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, [videos]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 1 ? 1 : 0 }}
      />
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: activeVideo === 2 ? 1 : 0 }}
      />
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default VideoBackground;
