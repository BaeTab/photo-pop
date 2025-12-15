import { useState, useRef, useCallback } from "react";
import CameraStage from "./CameraStage";
import ControlBar from "./ControlBar";
import PhotoFrame from "./PhotoFrame";
import useSound from "../hooks/useSound";
import InfoSection from "./InfoSection";

export default function Home() {
    const [photos, setPhotos] = useState([]); // Array of captured images (base64)
    const [isCapturing, setIsCapturing] = useState(false);
    const [frameColor, setFrameColor] = useState("#ffffff");
    const [filterStyle, setFilterStyle] = useState("none");
    const [layout, setLayout] = useState("1x4"); // '1x4' or '2x2'
    const [countdown, setCountdown] = useState(null);

    const webcamRef = useRef(null);
    const frameRef = useRef(null);
    const { playShutter } = useSound();

    const handleReset = () => {
        if (window.confirm("모든 사진을 초기화하시겠습니까?")) {
            setPhotos([]);
        }
    };

    const capturePhoto = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                playShutter();
                setPhotos((prev) => [...prev, imageSrc]);
            }
        }
    }, [playShutter]);

    const handleStartCapture = useCallback(() => {
        setIsCapturing(true);
        setPhotos([]);
        let captureCount = 0;

        const captureSequence = () => {
            if (captureCount >= 4) {
                setIsCapturing(false);
                setCountdown(null);
                return;
            }

            let count = 3;
            setCountdown(count);
            const timer = setInterval(() => {
                count--;
                setCountdown(count);
                if (count === 0) {
                    clearInterval(timer);
                    capturePhoto();
                    captureCount++;
                    setTimeout(captureSequence, 1000); // Wait 1s between shots
                }
            }, 1000);
        };

        captureSequence();
    }, [capturePhoto]);

    // Ensure frameColor is hex (protection against stale HMR state)
    const safeFrameColor = frameColor.startsWith("bg-") ? "#ffffff" : frameColor;

    const handleDownload = async () => {
        console.log("Download initiated");
        if (!frameRef.current) {
            console.error("Frame ref is null");
            alert("프레임을 찾을 수 없습니다.");
            return;
        }

        try {
            console.log("Starting capture with html-to-image...", safeFrameColor);
            const { toPng } = await import("html-to-image");

            const dataUrl = await toPng(frameRef.current, {
                backgroundColor: safeFrameColor,
                pixelRatio: 2,
            });

            console.log("Capture success");

            // Create a link to download
            const link = document.createElement("a");
            link.download = `PhotoPop_${new Date().toISOString().slice(0, 10)}.png`;
            link.href = dataUrl;
            link.click();
            console.log("Download triggered");
        } catch (err) {
            console.error("Download failed:", err);
            alert("다운로드 중 오류가 발생했습니다: " + err.message);
        }
    };

    return (
        <div className="min-h-screen bg-pop-yellow p-4 md:p-8 flex flex-col items-center gap-12 font-pop overflow-x-hidden">
            {/* Header Title */}
            <header>
                <h1 className="text-5xl font-bold text-pop-pink text-center drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] tracking-wider">
                    PHOTO POP!
                </h1>
            </header>

            {/* Main Workspace: Camera + Frame */}
            {/* Changed w-full to w-fit to ensure the container shrinks to content size and centers perfectly on screen */}
            <main className="flex flex-col xl:flex-row gap-12 items-center xl:items-start justify-center w-full xl:w-fit max-w-full">
                {/* Left: Camera & Controls */}
                <section className="flex flex-col gap-6 w-full max-w-md shrink-0 items-center">
                    <CameraStage
                        ref={webcamRef}
                        isCapturing={isCapturing}
                        countdown={countdown}
                    />

                    <ControlBar
                        onStart={handleStartCapture}
                        isCapturing={isCapturing}
                        hasPhotos={photos.length === 4}
                        onDownload={handleDownload}
                        setFrameColor={setFrameColor}
                        setFilterStyle={setFilterStyle}
                        setLayout={setLayout}
                        currentFrame={frameColor}
                        currentFilter={filterStyle}
                        currentLayout={layout}
                        onReset={handleReset}
                    />
                </section>

                {/* Right: Preview Frame */}
                {/* Use justify-center to keep the frame centered relative to itself as well, or start to hug the camera */}
                <section className="w-full overflow-x-auto flex justify-center xl:justify-start pt-4 xl:pt-0">
                    <PhotoFrame
                        ref={frameRef}
                        photos={photos}
                        frameColor={frameColor}
                        filterStyle={filterStyle}
                        layout={layout}
                    />
                </section>
            </main>

            {/* Footer Content for AdSense/SEO */}
            {/* Home specific info section */}
            <InfoSection />
        </div>
    );
}
