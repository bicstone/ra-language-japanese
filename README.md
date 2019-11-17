# Japanese Messages for React-Admin

Japanese messages for [react-admin](https://github.com/marmelab/react-admin).

## Installation

```sh
npm install --save ra-language-japanese
```

## Usage

### v3

```js
import japaneseMessages from 'ra-language-japanese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'ja': japaneseMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="ja" i18nProvider={i18nProvider}>
  ...
</Admin>
```

### v2

```js
import englishMessages from 'ra-language-japanese';

const messages = {
    'ja': japaneseMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="ja" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
