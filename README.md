# Renault Digital ESLint config

![Travis (.org)](https://img.shields.io/travis/renault-digital/eslint-config.svg?style=flat-square)
![npm](https://img.shields.io/npm/v/@renault-digital/eslint-config.svg?style=flat-square)

## Installation

```sh
npm install --save-dev @renault-digital/eslint-config

# or

yarn add --dev @renault-digital/eslint-config
```

Then, [configure ESLint](https://eslint.org/docs/user-guide/configuring) with one or more `.eslintrc.json` files as
appropriate.

## Example configurations

Bellow are some recommended uses.

### A common usage

`.eslintrc.json`:

```json
{
  "extends": "@renault-digital/eslint-config"
}
```

### A typical Server project with NodeJS and Mocha tests

`.eslintrc.json`:

```json
{
  "extends": "@renault-digital/eslint-config/server"
}
```

## Proposing changes

Major changes should be discussed GitHub.

## Semver policy

Same approach as in ESLint, see [Semantic Versioning Policy](https://github.com/eslint/eslint#user-content-semantic-versioning-policy).
