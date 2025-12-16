import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import InfoSection from './InfoSection';

export default function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-pop-yellow flex flex-col items-center font-pop">
            {/* Hero Section */}
            <header className="w-full bg-white/30 backdrop-blur-md border-b-4 border-black py-20 px-4 flex flex-col items-center text-center">
                <h1 className="text-6xl md:text-8xl font-black text-pop-pink drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6 animate-bounce-slow">
                    PHOTO POP!
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mb-10 leading-relaxed">
                    {t('info.mainDesc')}
                </p>

                <button
                    onClick={() => navigate('/app')}
                    className="group relative px-8 py-4 bg-pop-cyan text-white text-2xl font-bold rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-2 active:translate-y-2"
                >
                    <span className="flex items-center gap-3">
                        📸 {t('buttons.start')}
                    </span>
                </button>

                <div className="mt-12 flex gap-4 overflow-hidden opacity-80">
                    {/* Decorative visual elements - could be static images in future */}
                    <div className="w-32 h-40 bg-white border-2 border-black rotate-[-6deg] shadow-md flex items-center justify-center text-4xl">😎</div>
                    <div className="w-32 h-40 bg-pop-pink border-2 border-black rotate-[3deg] shadow-md flex items-center justify-center text-4xl">✨</div>
                    <div className="w-32 h-40 bg-pop-lime border-2 border-black rotate-[-3deg] shadow-md flex items-center justify-center text-4xl">🎞️</div>
                </div>
            </header>

            {/* SEO / Content Section */}
            <main className="w-full flex justify-center p-4 md:p-8 bg-pattern">
                <InfoSection />
            </main>
        </div>
    );
}
