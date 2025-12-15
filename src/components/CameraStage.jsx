import { forwardRef } from "react";
import Webcam from "react-webcam";
import PropTypes from "prop-types";

const CameraStage = forwardRef(({ isCapturing, countdown }, ref) => {
    const videoConstraints = {
        width: 480,
        height: 640,
        facingMode: "user",
    };

    return (
        <div className="relative w-full aspect-[3/4] bg-black rounded-3xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Webcam
                audio={false}
                ref={ref}
                mirrored={true} // Built-in mirroring
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="w-full h-full object-cover"
            />

            {/* Face Guide */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                <div className="w-48 h-64 border-4 border-dashed border-white rounded-[50%]"></div>
            </div>

            {/* Countdown Overlay */}
            {countdown !== null && countdown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <span className="text-9xl font-bold text-white animate-bounce">
                        {countdown}
                    </span>
                </div>
            )}

            {/* Flash Effect */}
            {countdown === 0 && (
                <div className="absolute inset-0 bg-white animate-ping opacity-75 z-20 pointer-events-none"></div>
            )}
        </div>
    );
});

CameraStage.propTypes = {
    isCapturing: PropTypes.bool.isRequired,
    countdown: PropTypes.number,
};

CameraStage.displayName = "CameraStage";
export default CameraStage;
