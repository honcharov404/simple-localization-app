# Simple Localization Package

This is a lightweight JavaScript package for managing translations in web applications.

## Installation

You can install the package using npm:

```bash
npm install simple-localization-package
```

## Usage

### Importing the Package

```javascript
const Localization = require('simple-localization-package');
const localization = new Localization();
```

### Adding Translations

```javascript
// Adding translations
localization.addTranslation('en', { hello: 'Hello', goodbye: 'Goodbye' });
localization.addTranslation('es', { hello: 'Hola', goodbye: 'Adiós' });
```

### Setting Default Language

```javascript
// Setting default language
localization.setDefaultLanguage('en');
```

### Translating

```javascript
// Translating
console.log(localization.translate('hello')); // Output: Hello
console.log(localization.translate('goodbye', 'es')); // Output: Adiós
console.log(localization.translate('welcome', 'fr')); // Output: welcome (fallback to key if translation not found)
```

## Contributing

If you would like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.