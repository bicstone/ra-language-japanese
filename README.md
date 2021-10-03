# Japanese Messages for React-Admin

![GitHub Actions Build Status](https://github.com/bicstone/ra-language-japanese/workflows/Node.js%20CI/badge.svg) [![npm](https://img.shields.io/npm/dm/@bicstone/ra-language-japanese.svg?&logo=npm)](https://www.npmjs.com/package/@bicstone/ra-language-japanese)

Japanese messages for [react-admin](https://github.com/marmelab/react-admin).

react-admin の日本語翻訳です。  
直訳せず、読みさすさとシンプルさを優先した意訳をしています。

翻訳の提案がございましたら、お気軽に issue 頂ければ幸いです。

## インストール

`react-admin@>=2.0.0-alpha1` で使用可能です。  
後方互換性がありますので、 react-admin の依存バージョンに関わらず最新版をインストールしてください。

### yarn

```sh
yarn add @bicstone/ra-language-japanese@latest
```

### npm

```sh
npm install @bicstone/ra-language-japanese@latest
```

## 使用方法

### v3

```jsx
import polyglotI18nProvider from 'ra-i18n-polyglot';
import japaneseMessages from '@bicstone/ra-language-japanese';

const i18nProvider = polyglotI18nProvider(() => japaneseMessages, 'ja');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

### v2

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';

const i18nProvider = () => japaneseMessages;

<Admin locale="ja" i18nProvider={i18nProvider}>
  ...
</Admin>
```

### オリジナルの翻訳と混ぜる

```js
import japaneseCoreMessages from '@bicstone/ra-language-japanese';

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

const japaneseMessages = {
    ...japaneseCoreMessages,
    ...japaneseDomainMessages
};
```

## ライセンス

MIT License
