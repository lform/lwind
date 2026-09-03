# AGENTS.md

## Project overview

Lwind is the CSS-first Tailwind CSS 4 styling package used by the Lform design system. It publishes theme tokens, base styles, utilities, reusable components, vendor integrations, example entry points, and social-media SVG assets under the `@lform/lwind` package.

## Repository map

- `css/_theme.css`: Tailwind theme tokens for fonts, colors, type scales, containers, radii, and rich-text styling.
- `css/main.css`: complete local stylesheet entry point.
- `css/editor.css`: reduced editor stylesheet entry point.
- `css/*.example.css`: package-consumer entry points that import from `@lform/lwind`.
- `css/base/`: global and site preflight styles.
- `css/utilities/`: custom Tailwind utilities.
- `css/components/`: reusable layout and UI utilities/components.
- `css/vendors/`: WordPress and Statamic integration styles.
- `demo/kitchen-sink.html`: static visual regression and component demo page.
- `icons/social-media/`: source SVG icons.
- `dist/`: generated build output; it is gitignored and must not be edited by hand.
- `readme.md`: public usage and design-system documentation.

## Working agreements

- Keep the project CSS-first. Use Tailwind 4 directives such as `@theme`, `@utility`, `@variant`, `@plugin`, and `@apply`; do not introduce a JavaScript Tailwind config unless the task explicitly requires it.
- Treat `css/_theme.css` as the source of truth for shared design tokens. Prefer existing tokens and utilities over one-off values.
- Preserve the semantic color contract: foreground tokens such as `primary-fg` are only for text on their matching background. Use `gray`, not `grey`, in token and utility names.
- Follow the established 4 px spacing scale and the existing modular typography helpers (`text-ms-*`, `text-fms-*`, `h-ms-*`, and `ac-ms-*`).
- Add broadly reusable patterns as named utilities or components in the appropriate partial. Keep CMS-specific selectors in `css/vendors/`.
- Maintain the import organization and layer placement in `css/main.css`, `css/editor.css`, and the example entry files. When adding a public partial, update every relevant entry point.
- Match the formatting and nesting style of the file being edited. Keep selectors scoped and avoid unnecessary specificity or `!important`; retain it only where an existing compatibility pattern requires it.
- Preserve accessibility behavior. Interactive styles need visible keyboard focus, disabled states must remain distinguishable, and form changes must satisfy the WCAG guidance documented in `readme.md`.
- If a public token, utility, component, entry point, or usage pattern changes, update `readme.md` and the kitchen-sink demo in the same change.
- Keep `package-lock.json` synchronized with `package.json`. Do not edit generated files in `dist/` or dependency files in `node_modules/`.

## Commands

- `npm install`: install the locked dependencies.
- `npm run dev`: compile `css/main.css` to `dist/app.css`.
- `npm run watch`: run the development compiler in watch mode.
- `npm run prod`: produce the minified `dist/app.min.css` build.
- `npm run demo`: compile the development CSS and copy the kitchen-sink page to `dist/kitchen-sink.html`.

## Validation

There is no automated test or lint suite. Use the build as the minimum validation:

1. Run `npm run dev` after any CSS, entry-point, or dependency change.
2. Run `npm run demo` and inspect `dist/kitchen-sink.html` for changes that affect components, utilities, themes, forms, rich text, pagination, or vendor styles.
3. Run `npm run prod` for release-related work or changes to the build toolchain.
4. Check `git status` before handing off; generated `dist/` output should remain untracked.

Keep validation proportional to the change, and report any command that could not be run.
