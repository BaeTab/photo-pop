import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-white/80 border-t-2 border-black mt-12 py-8 px-4 text-center font-sans tracking-tight">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 font-bold text-gray-700">
                <Link to="/" className="hover:text-pop-pink transition-colors">{t('footer.home')}</Link>
                <Link to="/terms" className="hover:text-pop-pink transition-colors">{t('footer.terms')}</Link>
                <Link to="/privacy" className="hover:text-pop-pink transition-colors">{t('footer.privacy')}</Link>
            </div>

            <p className="text-sm text-gray-500 mb-2">
                © 2025 Photo Pop. {t('footer.rights')}
            </p>
            <p className="text-xs text-gray-400">
                <Trans i18nKey="footer.desc" components={{ br: <br /> }} />
            </p>
        </footer>
    );
}
