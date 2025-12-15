import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEO() {
    const { t, i18n } = useTranslation();

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{t('meta.title')}</title>
            <meta name="description" content={t('meta.description')} />
            <meta name="keywords" content={t('meta.keywords')} />
            <meta property="og:title" content={t('meta.title')} />
            <meta property="og:description" content={t('meta.description')} />
            <meta property="twitter:title" content={t('meta.title')} />
            <meta property="twitter:description" content={t('meta.description')} />
        </Helmet>
    );
}
