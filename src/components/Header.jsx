import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        const current = i18n.resolvedLanguage || i18n.language;
        i18n.changeLanguage(current.startsWith('ko') ? 'en' : 'ko');
    };

    const currentLang = i18n.resolvedLanguage || i18n.language;

    return (
        <header className="w-full flex justify-between items-center py-8 relative max-w-6xl mx-auto px-4">
            {/* Spacer to balance the absolute center title if needed, or just flex */}
            <div className="w-10"></div>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-pop-pink text-center drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] tracking-wider whitespace-nowrap">
                    {t('header.title')}
                </h1>
            </Link>

            <button
                onClick={toggleLang}
                className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-full flex items-center justify-center text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all z-10 hover:bg-gray-50 bg-cover bg-center"
                title={currentLang.startsWith('ko') ? "Switch to English" : "한국어로 변경"}
            >
                {currentLang.startsWith('ko') ? '🇺🇸' : '🇰🇷'}
            </button>
        </header>
    );
}
