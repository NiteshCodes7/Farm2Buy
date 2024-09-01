import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "farmer": "FARMER",
      "to": "TO",
      "buyer": "BUYER",
      "connecting": "Connecting Farmers and Consumers - Bringing Fresh",
      "no_middleman": "No Middleman",
      "explore_now": "Explore Now",
      "our_centers": "Our Centers",
      "how_to_use": "How to Use"
    }
  },
  hi: {
    translation: {
      "farmer": "किसान",
      "to": "से",
      "buyer": "खरीदार",
      "connecting": "किसानों और उपभोक्ताओं को जोड़ना - ताजा लाना",
      "no_middleman": "कोई बिचौलिया नहीं",
      "explore_now": "अभी अन्वेषण करें",
      "our_centers": "हमारे केंद्र",
      "how_to_use": "कैसे उपयोग करें"
    }
  },
  pa: {
    translation: {
      "farmer": "ਕਿਸਾਨ",
      "to": "ਤੋਂ",
      "buyer": "ਖਰੀਦਾਰ",
      "connecting": "ਕਿਸਾਨਾਂ ਅਤੇ ਗਾਹਕਾਂ ਨੂੰ ਜੋੜਨਾ - ਤਾਜਾ ਲਿਆ ਰਹੇ ਹਾਂ",
      "no_middleman": "ਕੋਈ ਬਿਚੋਲੀਆ ਨਹੀਂ",
      "explore_now": "ਹੁਣੇ ਖੋਜੋ",
      "our_centers": "ਸਾਡੇ ਕੇਂਦਰ",
      "how_to_use": "ਇਸਤਮਾਲ ਕਿਵੇਂ ਕਰੀਏ"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
