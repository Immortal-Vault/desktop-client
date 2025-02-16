import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ru from './ru.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        lng: 'ru', // Язык по умолчанию
        fallbackLng: 'en', // Запасной язык
        interpolation: {
            escapeValue: false, // Не экранируем HTML в строках
        },
    });

export default i18n;
