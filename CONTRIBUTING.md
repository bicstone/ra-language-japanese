# Contributing

Thanks for wanting to contributions.

## Code of Conduct

This repository has adopted the [Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) as its Code of Conduct.

## Make a Pull Request

Pull Requests are always welcome, but please discuss larger changes via issue before your work.

1. Fork the repository.
1. Install the dependencies with npm. `npm ci`
1. Create a new topic branch. `git checkout -b fix/topic`
1. Make changes `/src/index.tx` .
1. **Run format & build.** `npm run build`
1. Commit and push. `git push -u origin HEAD`
1. Make a Pull Request.

## License

By contributing your code to this repository, you agree to your contribution under the MIT license.

# 翻訳の更新 (owner's memo)

1. dependabotが自動的に依存関係( `ra-language-english` )を最新にする
1. `tsc` で型定義エラーがあれば、React-admin側で更新されている
1. 型定義エラーを参考に、 `/src/index.tx` 翻訳を更新する
1. `npm run build`
1. `npm version <new version>`
1. リリース (パブリッシュは自動)
