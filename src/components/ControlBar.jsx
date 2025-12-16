import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function ControlBar({
    onStart,
    isCapturing,
    hasPhotos,
    onDownload,
    setFrameColor,
    setFilterStyle,
    setLayout,
    currentFrame,
    currentFilter,
    currentLayout,
    onReset, // New prop
    adClicked, // New prop
    setAdClicked // New prop
}) {
    const { t } = useTranslation();

    const colors = [
        { name: t('colors.white'), val: "#ffffff" },
        { name: t('colors.pink'), val: "#EC4899" },
        { name: t('colors.cyan'), val: "#06B6D4" },
        { name: t('colors.lime'), val: "#a3e635" },
    ];

    const filters = [
        { name: t('filters.normal'), val: "none" },
        { name: t('filters.bw'), val: "grayscale(100%)" },
        { name: t('filters.sepia'), val: "sepia(80%)" },
        { name: t('filters.bright'), val: "brightness(120%) saturate(120%)" },
    ];

    return (
        <div className="flex flex-col gap-4 bg-white p-4 border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

            {/* Ad Integration */}
            {!adClicked ? (
                <a
                    href="https://deg.kr/799c1ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAdClicked(true)}
                    className="block w-full py-3 text-center text-white font-bold bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 animate-pulse border-2 border-indigo-800"
                >
                    💎 1초면 완료! 광고 보고 시작하기
                </a>
            ) : (
                <div className="block w-full py-2 text-center text-green-700 font-bold bg-green-100 rounded-lg border-2 border-green-500">
                    ✅ 광고 확인 완료!
                </div>
            )}

            {/* Main Action Button */}
            <button
                onClick={hasPhotos && !isCapturing ? onDownload : onStart}
                disabled={isCapturing}
                className={`w-full py-4 text-2xl font-bold text-white rounded-lg border-4 border-black transition-transform active:translate-x-1 active:translate-y-1 ${isCapturing
                    ? "bg-gray-400 cursor-not-allowed"
                    : hasPhotos
                        ? "bg-pop-pink hover:bg-pink-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-pop-cyan hover:bg-cyan-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    }`}
            >
                {isCapturing ? t('buttons.capturing') : hasPhotos ? t('buttons.download') : t('buttons.start')}
            </button>

            {/* Frame Colors */}
            <div className="flex gap-2 justify-center">
                {colors.map((c) => (
                    <button
                        key={c.val}
                        onClick={() => setFrameColor(c.val)}
                        className={`w-8 h-8 rounded-full border-2 border-black ${currentFrame === c.val ? "ring-2 ring-black ring-offset-2" : ""
                            }`}
                        style={{ backgroundColor: c.val }}
                        title={c.name}
                    />
                ))}
            </div>

            {/* Filters */}
            <div className="flex gap-2 justify-center text-sm font-bold">
                {filters.map((f) => (
                    <button
                        key={f.val}
                        onClick={() => setFilterStyle(f.val)}
                        className={`px-2 py-1 border-2 border-black rounded bg-gray-100 hover:bg-gray-200 ${currentFilter === f.val ? "bg-yellow-300" : ""
                            }`}
                    >
                        {f.name}
                    </button>
                ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex gap-2 justify-center flex-wrap">
                <button
                    onClick={() => setLayout("1x4")}
                    className={`px-3 py-1 border-2 border-black rounded ${currentLayout === "1x4" ? "bg-pop-yellow" : "bg-white"}`}
                >
                    {t('buttons.col')}
                </button>
                <button
                    onClick={() => setLayout("2x2")}
                    className={`px-3 py-1 border-2 border-black rounded ${currentLayout === "2x2" ? "bg-pop-yellow" : "bg-white"}`}
                >
                    {t('buttons.grid')}
                </button>
                <button
                    onClick={() => setLayout("mixed")}
                    className={`px-3 py-1 border-2 border-black rounded ${currentLayout === "mixed" ? "bg-pop-yellow" : "bg-white"}`}
                >
                    {t('buttons.mix')}
                </button>
                <button
                    onClick={() => setLayout("horizontal")}
                    className={`px-3 py-1 border-2 border-black rounded ${currentLayout === "horizontal" ? "bg-pop-yellow" : "bg-white"}`}
                >
                    {t('buttons.row')}
                </button>
                <button
                    onClick={() => setLayout("split")}
                    className={`px-3 py-1 border-2 border-black rounded ${currentLayout === "split" ? "bg-pop-yellow" : "bg-white"}`}
                >
                    {t('buttons.split')}
                </button>
            </div>

            {/* Bottom Controls: Reset */}
            <div className="border-t-2 border-black pt-4 flex flex-col gap-4">
                {/* Reset Button */}
                <button
                    onClick={onReset}
                    className="w-full py-2 text-sm font-bold text-gray-500 hover:text-red-500 border-2 border-gray-300 hover:border-red-500 rounded bg-gray-50 hover:bg-red-50 transition-colors"
                    disabled={isCapturing}
                    title={t('buttons.confirmReset')}
                >
                    {t('buttons.reset')}
                </button>
            </div>
        </div>
    );
}


ControlBar.propTypes = {
    onStart: PropTypes.func.isRequired,
    isCapturing: PropTypes.bool.isRequired,
    hasPhotos: PropTypes.bool.isRequired,
    onDownload: PropTypes.func.isRequired,
    setFrameColor: PropTypes.func.isRequired,
    setFilterStyle: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    currentFrame: PropTypes.string.isRequired,
    currentFilter: PropTypes.string.isRequired,
    currentLayout: PropTypes.string.isRequired,
    onReset: PropTypes.func, // Optional func
    adClicked: PropTypes.bool,
    setAdClicked: PropTypes.func,
};
