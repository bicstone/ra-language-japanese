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

## 貢献

コントリビューターの皆様に感謝いたします。

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bicstone.me/"><img src="https://avatars.githubusercontent.com/u/47806818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Takanori Oishi</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=bicstone" title="Code">💻</a> <a href="https://github.com/bicstone/ra-language-japanese/commits?author=bicstone" title="Documentation">📖</a> <a href="#maintenance-bicstone" title="Maintenance">🚧</a> <a href="#platform-bicstone" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/bicstone/ra-language-japanese/pulls?q=is%3Apr+reviewed-by%3Abicstone" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/toknsi"><img src="https://avatars.githubusercontent.com/u/26852981?v=4?s=100" width="100px;" alt=""/><br /><sub><b>toknsi</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=toknsi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.yukinobu.jp/tdiary/"><img src="https://avatars.githubusercontent.com/u/5938690?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yukinobu Nagayasu</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=yukinobu" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ohbarye.github.io/"><img src="https://avatars.githubusercontent.com/u/1811616?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masato Ohba</b></sub></a><br /><a href="#maintenance-ohbarye" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
