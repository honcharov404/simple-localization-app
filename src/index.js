class Localization {
    constructor(defaultLanguage = 'en') {
      this.defaultLanguage = defaultLanguage;
      this.translations = {};
    }

    addTranslation(language, translations) {
      this.translations[language] = translations;
    }

    setDefaultLanguage(language) {
      this.defaultLanguage = language;
    }

    translate(key, language) {
      const targetLanguage = language || this.defaultLanguage;

      if (!this.translations[targetLanguage]) {
        console.warn(`Translations for language '${targetLanguage}' not found.`);
        return key;
      }

      const languageTranslations = this.translations[targetLanguage];

      if (!languageTranslations[key]) {
        console.warn(`Translation for key '${key}' not found in '${targetLanguage}' language.`);
        return key;
      }

      return languageTranslations[key];
    }
  }

  // Example usage:

  // const localization = new Localization();

  // Adding translations
  // localization.addTranslation('en', { hello: 'Hello', goodbye: 'Goodbye' });
  // localization.addTranslation('es', { hello: 'Hola', goodbye: 'Adiós' });

  // Setting default language
  // localization.setDefaultLanguage('en');

  // Translating
  // console.log(localization.translate('hello')); // Output: Hello
  // console.log(localization.translate('goodbye', 'es')); // Output: Adiós
  // console.log(localization.translate('welcome', 'fr')); // Output: welcome (fallback to key if translation not found)