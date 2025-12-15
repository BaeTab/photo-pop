import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function InfoSection() {
    const { t } = useTranslation();

    return (
        <section className="w-full max-w-4xl mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-gray-800 font-sans">
            <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 font-pop text-pop-pink">{t('info.mainTitle')}</h2>
                <p className="text-gray-600">{t('info.mainDesc')}</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-yellow inline-block">{t('info.introTitle')}</h3>
                    <p className="mb-4 leading-relaxed">
                        <Trans i18nKey="info.introDesc" components={{ strong: <strong /> }} />
                    </p>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-cyan inline-block">{t('info.featuresTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                        <li><Trans i18nKey="info.feat1" components={{ strong: <strong /> }} /></li>
                        <li><Trans i18nKey="info.feat2" components={{ strong: <strong /> }} /></li>
                        <li><Trans i18nKey="info.feat3" components={{ strong: <strong /> }} /></li>
                        <li><Trans i18nKey="info.feat4" components={{ strong: <strong /> }} /></li>
                        <li><Trans i18nKey="info.feat5" components={{ strong: <strong /> }} /></li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-pink inline-block">{t('info.tipsTitle')}</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                        <li>{t('info.tip1')}</li>
                        <li>{t('info.tip2')}</li>
                        <li>{t('info.tip3')}</li>
                        <li>{t('info.tip4')}</li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-800 inline-block">{t('info.privacyTitle')}</h3>
                    <p className="mb-2 leading-relaxed">
                        {t('info.privacyDesc')}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        © 2025 Photo Pop. {t('footer.rights')}<br />
                        {t('info.contact')}: b_h_woo@naver.com
                    </p>
                </article>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                <p>{t('info.footerTag')}</p>
            </div>
        </section>
    );
}
