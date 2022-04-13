# Japanese Messages for React-Admin

![GitHub Actions Build Status](https://github.com/bicstone/ra-language-japanese/workflows/Node.js%20CI/badge.svg) [![npm](https://img.shields.io/npm/dm/@bicstone/ra-language-japanese.svg?&logo=npm)](https://www.npmjs.com/package/@bicstone/ra-language-japanese)

Japanese messages for [React-admin](https://github.com/marmelab/react-admin).

[React-admin](https://github.com/marmelab/react-admin) の日本語翻訳です。  
直訳せず、読みさすさとシンプルさを優先した意訳をしています。

## Installation

### version 4

```sh
yarn add @bicstone/ra-language-japanese@latest

# or

npm install @bicstone/ra-language-japanese@latest
```

### version 2 or 3

```sh
yarn add @bicstone/ra-language-japanese@^3

# or

npm install @bicstone/ra-language-japanese@^3
```

## Usage

### version 3 or 4

```jsx
import polyglotI18nProvider from 'ra-i18n-polyglot';
import japaneseMessages from '@bicstone/ra-language-japanese';

const i18nProvider = polyglotI18nProvider(() => japaneseMessages, 'ja');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>
```

See React-admin [documentation](https://marmelab.com/react-admin/Translation.html) for more information.

### version 2

```jsx
import japaneseMessages from '@bicstone/ra-language-japanese';

const i18nProvider = () => japaneseMessages;

<Admin locale="ja" i18nProvider={i18nProvider}>
  ...
</Admin>
```

See React-admin [documentation](https://marmelab.com/react-admin/doc/2.9/Translation.html) for more information.

## License

MIT License

## Contributors

Thanks goes to all the people who contribute.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bicstone.me/"><img src="https://avatars.githubusercontent.com/u/47806818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oishi Takanori</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=bicstone" title="Code">💻</a> <a href="https://github.com/bicstone/ra-language-japanese/commits?author=bicstone" title="Documentation">📖</a> <a href="#maintenance-bicstone" title="Maintenance">🚧</a> <a href="#platform-bicstone" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/bicstone/ra-language-japanese/pulls?q=is%3Apr+reviewed-by%3Abicstone" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/toknsi"><img src="https://avatars.githubusercontent.com/u/26852981?v=4?s=100" width="100px;" alt=""/><br /><sub><b>toknsi</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=toknsi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.yukinobu.jp/tdiary/"><img src="https://avatars.githubusercontent.com/u/5938690?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yukinobu Nagayasu</b></sub></a><br /><a href="https://github.com/bicstone/ra-language-japanese/commits?author=yukinobu" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ohbarye.github.io/"><img src="https://avatars.githubusercontent.com/u/1811616?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masato Ohba</b></sub></a><br /><a href="#maintenance-ohbarye" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
