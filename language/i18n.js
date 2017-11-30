import I18n from 'react-native-i18n';
import en from './en.js';
import zh from './zh.js';
import ar from './ar.js';

I18n.fallbacks = true;
I18n.translations = {
	en: en,
	ar: ar,
	zh: zh,
	'zh-Hans': zh,
}
export default I18n;