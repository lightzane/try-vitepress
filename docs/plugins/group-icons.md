# vitepress-plugin-group-icons

## Getting Started

https://vp.yuy1n.io/

## Install

::: code-group

```sh [npm]
npm install -D vitepress-plugin-group-icons
```

```sh [yarn]
yarn add -D vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add -D vitepress-plugin-group-icons
```

```sh [bun]
bun add -D vitepress-plugin-group-icons
```

:::

## Configuration

```ts {2,7,12} [.vitepress/config.ts]
import { defineConfig } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
```

```ts {2} [.vitepress/theme/index.ts]
import Theme from 'vitepress/theme';
import 'virtual:group-icons.css';

export default Theme;
```

## Iconify

- Home: https://iconify.design/
- Icons: https://icon-sets.iconify.design/

::: code-group

```sql [postgres]
select * from db.books;
```

<<< @/snippets/graphql/schema.graphql#query

:::

::: code-group

```ts [config.mts]
import { iGraphql, iPostgres } from './iconify'; // [!code ++]
// ...other imports...

export default defineConfig({
  // ...other configs...

  vite: {
    plugins: [
      groupIconVitePlugin() // [!code --]
      groupIconVitePlugin({ // [!code ++]
        customIcon: { // [!code ++]
          postgres: iPostgres, // [!code ++]
          graphql: iGraphql, // [!code ++]
          gql: iGraphql, // [!code ++]
        }, // [!code ++]
      }), // [!code ++]
    ],
  },
});
```

<<< @/.vitepress/iconify.ts{4}

:::
