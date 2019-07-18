# Renault Digital ESLint config

[![Build Status](https://img.shields.io/travis/renault-digital/eslint-config.svg)](https://travis-ci.org/renault-digital/eslint-config)
[![Npm Version](https://img.shields.io/npm/v/@renault-digital/eslint-config.svg)](https://www.npmjs.com/package/@renault-digital/eslint-config)

- [Installation](#Installation)
- [Usage](#Usage)
- [Examples](#Examples)
- [Contribute](#Contribute)

## Installation

Using `npm` :

```sh
npm install --save-dev @renault-digital/eslint-config
```

Or using `yarn` :

```sh
yarn add --dev @renault-digital/eslint-config
```

## Usage

Please follow [configure ESLint](https://eslint.org/docs/user-guide/configuring) for configuration.

The follow rules are available (you can combine them) :

- `@renault-digital` : General JS rules
- `@renault-digital/common` : Same as above
- `@renault-digital/node` : Rules specific to NodeJS
- `@renault-digital/mocha` : Rules specific to Mocha
- `@renault-digital/server` : Group of rules for NodeJS application

A basic usage will be in a file `.eslintrc.json`:

```json
{
  "extends": "@renault-digital/eslint-config"
}
```

And after :

```sh
yarn eslint .
```

## Examples

Bellow are some recommended usage.

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

## Contribute

### Proposing changes

Major changes should be discussed GitHub.

### Semver policy

Same approach as in ESLint, see [Semantic Versioning Policy](https://github.com/eslint/eslint#user-content-semantic-versioning-policy).
