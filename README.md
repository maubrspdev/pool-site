# POOL-SITE

todo

## Documentation

https://nextra.site

## Development

### Installation

The Nextra repository uses [PNPM Workspaces](https://pnpm.io/workspaces) and
[Turborepo](https://github.com/vercel/turborepo). To install dependencies, run
`pnpm install` in the project root directory.

### Build `nextra`

```bash
pnpm --filter nextra build
```

Watch mode: `pnpm --filter nextra dev`

### Build `nextra-theme-docs`

```bash
pnpm --filter nextra-theme-docs build
```

### Development

You can also debug them together with a website locally. For instance, to start
`apps/docs` locally, run

```bash
pnpm --filter example-docs dev
```

Any change to `example/docs` will be re-rendered instantly.

If you update the core or theme packages, a rebuild is required. Or you can use
the watch mode for both Nextra and the theme in separated terminals.
