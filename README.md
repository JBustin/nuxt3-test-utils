# How to test

Clone this repo

```sh
npm ci
npm run test
```

Result:

```
> test
> vitest run --no-watch

stderr | components/Header.nuxt.spec.ts
[Vue Router warn]: No match found for location with path "/"

stderr | components/Header.nuxt.spec.ts
[Vue Router warn]: No match found for location with path "/"

stderr | components/Header.nuxt.spec.ts
[nuxt] error caught during app initialization H3Error: Page not found: /
```
