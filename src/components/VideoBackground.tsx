
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({
  videoSrc,
  className,
  overlayClassName,
  children
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay error:", error);
      });
    }
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div 
        className={cn(
          "absolute inset-0 bg-black/50", 
          overlayClassName
        )}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
