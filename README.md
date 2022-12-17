# pnpm+vite

> ts+pnpm+vite+react+antd+tailwindcss+changesets+eslint+husky+prettier

## What's inside?

### Apps and Packages

#### apps
- `admin`: admin manage web page
- `portal`: portal web page


- `ui`: a stub component & utility library shared by both `web` and `docs` applications
- `tailwind-config`: tailwind configurations
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit vercel/turbo/examples/with-vite with-vite
cd with-vite
pnpm install
git init . && git add . && git commit -m "Init"
```
