# Japanese Messages for React-Admin

Japanese messages for [react-admin](https://github.com/marmelab/react-admin).

直訳せず、読みさすさとシンプルさを優先した意訳をしています。

翻訳の提案がございましたら、お気軽に issue か Pull request をください :bow:

## Installation

```sh
npm install --save @bicstone/ra-language-japanese
```

## Usage

### v3

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';
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

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';

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
