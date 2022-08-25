export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const defaultLanguage = () => {
  const lang = navigator.language.split('-')[0];
  return ['uk', 'ru'].includes(lang) ? lang : 'ru';
};
