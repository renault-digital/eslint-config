# Renault Digital ESLint config

![Travis (.org)](https://img.shields.io/travis/renault-digital/lint-config.svg?style=flat-square)
![npm](https://img.shields.io/npm/v/@renault-digital/lint-config.svg?style=flat-square)

## Installation

```sh
npm install --save-dev @renault-digital/lint-config

# or

yarn add --dev @renault-digital/lint-config
```

Then, [configure ESLint](https://eslint.org/docs/user-guide/configuring) with one or more `.eslintrc.json` files as
appropriate.

## Example configurations

Bellow are some recommended uses:

### A typical Server project with NodeJS and Mocha tests

`.eslintrc.json`:

```json
{
  "extends": "@renault-digital/lint-config/server"
}
```

### Lint your Gherkin features

`package.json` :

```json
{
    "test:lint:gherkin" : "gherkin-lint -c node_modules/@renault-digital/lint-config/gherkin.json"
}
```

### Lint your Markdown

`package.json` :

```json
{
    "test:lint:md" : "markdownlint *.md --config node_modules/@renault-digital/lint-config/markdownlint.json"
}
```

## Proposing changes

Major changes should be discussed GitHub.

## Semver policy

Same approach as in ESLint, see [Semantic Versioning Policy](https://github.com/eslint/eslint#user-content-semantic-versioning-policy).
