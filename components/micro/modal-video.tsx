import { useState } from 'react';
import type { StaticImageData } from 'next/image';

interface ModalVideoProps {
    thumb: StaticImageData;
    thumbWidth: number;
    thumbHeight: number;
    thumbAlt: string;
    videoWidth: number;
    videoHeight: number;
    className?: string;
    videoSrc: string; // Local video source
}

export default function ModalVideo({
    thumb,
    thumbWidth,
    thumbHeight,
    thumbAlt,
    videoWidth,
    videoHeight,
    className,
    videoSrc,
}: ModalVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePlay = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsPlaying(true);
            setIsTransitioning(false);
        }, 300); // Duration of the transition
    };

    return (
        <div className="relative w-full aspect-video">
            {isPlaying ? (
                <video
                    src={videoSrc}
                    width={videoWidth}
                    height={videoHeight}
                    controls
                    autoPlay
                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    className={`relative w-full h-full cursor-pointer transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    onClick={handlePlay}
                >
                    <img
                        src={thumb.src}
                        width={thumbWidth}
                        height={thumbHeight}
                        alt={thumbAlt}
                        className={`w-full h-full object-cover rounded-2xl ${className || ''}`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
                        <button
                            className="flex items-center bg-white/90 rounded-full font-medium group p-2 md:p-4 shadow-lg hover:bg-white transition-colors duration-300"
                        >
                            <svg
                                className="w-4 h-4 md:w-6 md:h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                                <path d="M10 17l6-5-6-5z" />
                            </svg>
                            <span className="ml-3">Watch the full video (2 min)</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
