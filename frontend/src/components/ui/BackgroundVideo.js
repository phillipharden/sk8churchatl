import { useEffect, useState } from "react";
import "../../styles/ui.css";

const BackgroundVideo = ({ videoSrc }) => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowVideo(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!showVideo) return null;

    return (
        <div className="video-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="background-video"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="video-overlay" />
        </div>
    );
};

export default BackgroundVideo;