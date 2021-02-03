# Japanese Messages for React-Admin

![GitHub Actions Build Status](https://github.com/bicstone/ra-language-japanese/workflows/Node.js%20CI/badge.svg) [![npm](https://img.shields.io/npm/dm/@bicstone/ra-language-japanese.svg?&logo=npm)](https://www.npmjs.com/package/@bicstone/ra-language-japanese)

Japanese messages for [react-admin](https://github.com/marmelab/react-admin).

react-adminの日本語翻訳です。  
直訳せず、読みさすさとシンプルさを優先した意訳をしています。

翻訳の提案がございましたら、お気軽に issue 頂ければ幸いです。

## インストール

### yarn

```sh
yarn add @bicstone/ra-language-japanese
```

### npm

```sh
npm install @bicstone/ra-language-japanese
```

## 使用方法

### v3

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    ja: japaneseMessages
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'ja');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

### v2

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';

const messages = {
    ja: japaneseMessages
};
const i18nProvider = locale => messages[locale];

<Admin locale="ja" i18nProvider={i18nProvider}>
  ...
</Admin>
```

### オリジナルの翻訳と混ぜる

```js
const japaneseDomainMessages = {
    resources:{
        users: {
            name: "ユーザー",
            fields: {
                email: "メールアドレス",
                password: "パスワード"
            }
        }
    }
}
const messages = {
    ja: {
        ...japaneseMessages,
        ...japaneseDomainMessages
    }
};
```

## ライセンス

MIT License
