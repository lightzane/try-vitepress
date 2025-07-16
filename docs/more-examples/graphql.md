---
outline: deep
---

# GraphQL

## Overview

Importing code snippets and region

## Query

https://vitepress.dev/guide/markdown#import-code-snippets

### Code Group

Using regions from a single `schema.graphql` file

::: code-group

<<< @/snippets/graphql/schema.graphql#query [query.gql]

<<< @/snippets/graphql/schema.graphql#mutation [mutation.gql]

<<< @/snippets/graphql/schema.graphql#book-input {3,5} [input.gql]

:::

### Entire Schema

<<< @/snippets/graphql/schema.graphql { gql:line-numbers 30-36}

Using a region

<<< @/snippets/graphql/schema.graphql#query [query.gql]

## Variables

::: code-group

<<< @/snippets/graphql/variables.json

<<< @/snippets/graphql/variables.json#book-subscription [example1.json]

<<< @/snippets/graphql/variables.json#book-input [example2.json]

<<< @/snippets/graphql/variables.json#update-book-input [example3.json]

:::
