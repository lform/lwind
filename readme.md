# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing for the flexibility required to implement designs produced using the Lform design system. The package is a CSS-first Tailwind 4 setup — theme tokens, utilities, and components are all defined in CSS. Lwind is fully aligned to the Lform design system.

- Requires Tailwind 4.0.0+

## Resources

- [Lform Design System](https://github.com/lform/lform-codex/blob/main/design-system-guidelines.md)
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Kits](https://www.tailwindawesome.com/?type=kit) - For reference for building components

## Installation

Adding the Lwind system to a project is relatively straightforward:

1. Run `npm i @lform/lwind`
2. Included in the package are example entry files you can copy into your project and adapt as needed:
   * [https://github.com/lform/lwind/blob/master/css/main.example.css](https://github.com/lform/lwind/blob/master/css/main.example.css)
   * [https://github.com/lform/lwind/blob/master/css/editor.example.css](https://github.com/lform/lwind/blob/master/css/editor.example.css)
   * NOTE: To customize or override any of the Lwind CSS files, copy the file in question from the package or create a new one in the appropriate directory and update your imports accordingly. You can also include only the components and vendor files your project needs.
3. Create your main stylesheet entry, typically based on `css/main.example.css`, and adjust the imports for your project.
4. Update the theme tokens in `css/_theme.css` or your local equivalent to match your project's design system.
5. Run the build system to confirm that everything is working.

## Building

The following scripts are available in the `package.json` file, if the project uses a build system, the commands may be different.

- `npm run dev` - Builds the development stylesheet from `css/main.css` to `dist/app.css`
- `npm run watch` - Builds the development stylesheet and watches for changes
- `npm run prod` - Builds the minified production stylesheet at `dist/app.min.css`

The following `package.json` scripts can be added if there is no existing build system (adjust the paths accordingly):

```json
{
  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.css",
    "watch": "npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.css --watch",
    "prod": "NODE_ENV=production npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.min.css --minify",
    "demo": "mkdir -p ./dist && npm run dev && cp ./demo/kitchen-sink.html ./dist/kitchen-sink.html"
  }
}
```

## Kitchen Sink Demo

A static kitchen sink demo is included for validating the current component and vendor styling in a browser.

- `npm run demo` - Builds `dist/app.css` and copies the demo page to `dist/kitchen-sink.html`

The demo exercises typography, colors, buttons, containers, form messages, flex grid, rich text (standard and inverted), general utilities, WordPress pagination, and Statamic pagination.

## Tailwind Config

Tailwind is configured via `_theme.css` using CSS variables for theme tokens (the standard Tailwind 4 approach to theming). This allows for easy theming and overrides by simply changing the CSS variable values.

> IMPORTANT: Always configure the `_theme.css` file with your project's design tokens BEFORE starting any frontend coding. The default values are there to be customized to align with the project's design system. Implementing them after the fact can lead to a lot of extra work and overrides.

### Tailwind Plugins

- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Used to provide default baseline form styling
- [@iconify/tailwind4](https://iconify.design/docs/usage/css/tailwind/tailwind4/) - Included by default for icon utilities via Iconify

### Breakpoints

The [default breakpoints included in Tailwind are used](https://tailwindcss.com/docs/screens).

### Spacing / Gaps

- Designs are implemented using a base spacing sizing of 4 pixels.
- This is Tailwind's default spacing system, [refer to the documentation as necessary.](https://tailwindcss.com/docs/customizing-spacing)

### Colors

#### Branding Colors

##### Palette

- Primary
  - Default: `primary`
  - Light: `primary-light`
  - Dark: `primary-dark`
  - Foreground: `primary-fg` — text color for use on a `primary` background (e.g. button labels)
- Secondary
  - Default: `secondary`
  - Light: `secondary-light`
  - Dark: `secondary-dark`
  - Foreground: `secondary-fg`
- Tertiary
  - Default: `tertiary`
  - Light: `tertiary-light`
  - Dark: `tertiary-dark`
  - Foreground: `tertiary-fg`

##### Guidelines

- Avoid more than 3 core brand colors unless absolutely necessary.
- Remove tertiary or secondary if not needed for the project.
- All brand colors must have a `light`, `dark`, and `fg` variant defined in `_theme.css`.
- Never use the `fg` color except in the context of text on the matching background color. For example, `primary-fg` should only be used for text on a `primary` background, never on its own or on a different background color.

#### Accent Colors

##### Palette

- `accent-{name}` (example: `accent-cement`, `accent-sand`, `accent-olive`)

##### Guidelines

- Accents are brand-aligned colors that are not grays.
- Naming should be descriptive of the color (e.g. `accent-cement` instead of `accent-1`).
- Use numeric naming as a fallback if no descriptive name fits.
- If the accents are similar, add a tailwind color scale (e.g. `accent-cement-100`, `accent-cement-200`, etc.) for more flexibility.

#### Gray Scale

##### Palette

- `gray-50`
- `gray-100`
- `gray-200`
- `gray-300`
- `gray-400`
- `gray-500`
- `gray-600`
- `gray-700`
- `gray-800`
- `gray-900`
- `gray-950`

##### Guidelines

- Use "gray" (not "grey").
- A full 11-step scale is included by default.
- Add intermediate steps (e.g. `gray-150`) directly in `_theme.css` if a project needs more granularity.

#### Feedback Colors

- `feedback-info`
- `feedback-success`
- `feedback-warning`
- `feedback-error`

#### Constants

- `black`, `white`
- `black-transparent`, `white-transparent` — semi-transparent variants for overlays and tints
- `transparent` — fully transparent

#### Social Colors

Common social media brand colors are pre-defined under the `social-{platform}` namespace (e.g. `social-facebook`, `social-instagram`, `social-youtube`). Include or remove entries in `_theme.css` as needed per project.

### Typography

#### Fonts Available

There are 3 types of fonts in Lwind:

- `font-body` - The body font used on the site by default
- `font-header` - The main header font
- `font-accent` - Usually used for small text items in a utility context, eg blog post dates

#### Font Scaling

The typography system uses a modular scale for token definitions and fluid modular scale utilities for responsive type.

- Base is `16px` with `1.125x` scaling
- The scale included with Lwind goes from `-3` to `13`
- Fixed-size utilities (`text-ms-*`) map directly to pixel values from the scale
- Fluid utilities (`text-fms-*`) use `clamp()` to scale smoothly between viewport sizes — these are used by header and accent classes at positive scale steps
- Refer to the [font scale reference](https://www.modularscale.com/?16&px&1.125) for the full list.

##### Font Size Utilities

  - `-text-ms-3` = 11px
  - `-text-ms-2` = 12px
  - `-text-ms-1` = 14px
  - `text-ms-0` = 16px
  - `text-ms-1` = 18px
  - `text-ms-2` = 20px
  - `text-ms-3` = 22px
  - `text-ms-4` = 25px
  - `text-ms-5` = 28px
  - `text-ms-6` = 32px
  - `text-ms-7` = 36px
  - `text-ms-8` = 41px
  - `text-ms-9` = 46px
  - `text-ms-10` = 51px
  - `text-ms-11` = 58px
  - `text-ms-12` = 65px
  - `text-ms-13` = 73px

##### Fluid Size Utilities

  - `text-fms-1` = ~18px fluid
  - `text-fms-2` = ~20px fluid
  - `text-fms-3` = ~22px fluid
  - `text-fms-4` = ~25px fluid
  - `text-fms-5` = ~28px fluid
  - `text-fms-6` = ~32px fluid
  - `text-fms-7` = ~36px fluid
  - `text-fms-8` = ~41px fluid
  - `text-fms-9` = ~46px fluid
  - `text-fms-10` = ~51px fluid
  - `text-fms-11` = ~58px fluid
  - `text-fms-12` = ~65px fluid
  - `text-fms-13` = ~73px fluid

#### Header and accent utility classes

Modular scale header utility classes have been included that include the header font with a default line-height of `1.2`. Headers with default line-heights will appear too spaced out between the lines, especially at larger font sizes.

##### Header Font Classes

Negative steps use fixed pixel sizes; positive steps use fluid `clamp()` sizing that scales with the viewport.

- `-h-ms-3` = 11px (fixed)
- `-h-ms-2` = 12px (fixed)
- `-h-ms-1` = 14px (fixed)
- `h-ms` = base header font + header line-height (no size override)
- `h-ms-1` = ~18px fluid
- `h-ms-2` = ~20px fluid
- `h-ms-3` = ~22px fluid
- `h-ms-4` = ~25px fluid
- `h-ms-5` = ~28px fluid
- `h-ms-6` = ~32px fluid
- `h-ms-7` = ~36px fluid
- `h-ms-8` = ~41px fluid
- `h-ms-9` = ~46px fluid
- `h-ms-10` = ~51px fluid
- `h-ms-11` = ~58px fluid
- `h-ms-12` = ~65px fluid
- `h-ms-13` = ~73px fluid

##### Accent Font Classes

Accent helpers are generally used for smaller text, labels, and emphasis styles. They apply `font-accent` and the matching scale size.

- `-ac-ms-3` = 11px (fixed)
- `-ac-ms-2` = 12px (fixed)
- `-ac-ms-1` = 14px (fixed)
- `ac-ms` = base accent font (no size override)
- `ac-ms-1` = ~18px fluid
- `ac-ms-2` = ~20px fluid

#### Line Heights

All line-height tokens use unitless ratios, which scale cleanly with each element's font size and avoid the inheritance issues caused by percentage-based values.

- `--leading-header` = `1.2` — Headings and display text, tighter to avoid excessive spacing at large sizes
- `--leading-tight` = `1.25` — Compact UI text
- `--leading-normal` = `1.5` — Body copy and general content
- `--leading-loose` = `1.75` — Spacious layouts or accessibility-sensitive contexts

#### Border Radius

Three radius sizes are defined in `_theme.css` and used throughout components. Override as needed per project.

- `--radius-sm` = `4px` — `rounded-sm`
- `--radius-md` = `8px` — `rounded-md`
- `--radius-lg` = `12px` — `rounded-lg`

#### Richtext

A custom rich-text implementation is used for all rich-text areas by adding a `rich-text` class to any area with rich text.

- Add `rich-text inverted` to apply white text and adjusted link/list marker colors for rich text on dark backgrounds.
- Links inside rich text are always underlined — this is a WCAG requirement and should not be overridden.
- YouTube and Vimeo iframes are automatically forced to `width: 100%` with a `16/9` aspect ratio.
- Includes a modernized flow-spacing model, better heading rhythm, improved list styling, cleaner blockquotes, and robust media/table handling.
- WordPress-specific rich text handling is separated into vendor files so editor and frontend content can share the base `rich-text` styles while still supporting WordPress-specific markup.
- `css/editor.css` is available for editor-specific builds and includes the editor base styles plus the shared component stack needed for rich text authoring.
- Relevant vendor files, enable and disable them as needed:
  - `css/vendors/_wp-richtext.css`

## Tailwind Utilities & Components

### Buttons

Buttons are utility-first and are intended to be composed by stacking modifier classes on top of the base `button` utility.

#### Colors

- `button` - Base button and default `primary` solid button
- `button-secondary` - Secondary color variant
- `button-tertiary` - Tertiary color variant (remove if not needed for the project)

#### Sizing

- `button-sm`
- `button-md` - Default size
- `button-lg`

#### Format

- Solid - Default format via `button`
- `button-outline`

#### Elements

- `button-icon` - Button with an icon, adds padding and size adjustments for icons inside buttons
- `button-full` - Full width button

#### States

- Default - Native button styling
- `button-hover` - Forces hover state styling
- `button-focus` - Forces focus-visible styling
- `button-disabled` - Forces disabled styling

Native states are also included for `:hover`, `:focus-visible`, `:disabled`, `[disabled]`, and `[aria-disabled="true"]`.

#### Examples

- Primary solid medium: `class="button"`
- Secondary outline large: `class="button button-secondary button-outline button-lg"`
- Full width button with icon: `class="button button-full button-icon"`

### Containers

Tailwind's default containers are disabled in favor of a fluid container system backed by theme tokens.

- Containers are auto-centered with `margin-left` & `margin-right` set to `auto`.
- Padding is responsive: `20px` on mobile, `24px` at `768px` and above.
- Container widths & padding are configured through CSS theme variables: `--container-padding` (desktop) and `--container-padding-mobile`
- `container-*` utilities resolve against the matching `--container-*` theme tokens
- If a class of `px-0` is added to a container, the padding will be disabled
- If a class of `mx-0` is added to a container, the auto-centering margin will be disabled.

#### Classes & Default Sizes

- `container` - Default max width of `1440px`
- `container-xs` - `640px`
- `container-sm` - `768px`
- `container-md` - `1024px`
- `container-lg` - `1280px`
- `container-xl` - `1440px` (default)
- `container-2xl` - `1600px`
- `container-adaptive` - See below for details on this special adaptive container class

#### Adaptive Container

Rather than stretching fluidly to a single max-width, this container snaps through a series of fixed breakpoint widths (`768px` → `1024px` → `1280px` → `1440px`). This keeps the layout at a predictable, design-friendly width at each viewport range and avoids awkward, time-consuming in-between responsive fixes. Useful when a design is defined at specific widths and fluid scaling between them causes layout issues.

#### Pagination

- `css/vendors/_wp-pagination.css` adds support for WordPress pagination
- `css/vendors/_statamic-pagination.css` contains Statamic-specific pagination styles

### Forms

Form messaging uses a `form-message` component for displaying inline feedback. The base class provides padding, background, and border-radius; modifier classes apply feedback colors from the theme tokens.

#### Classes

- `form-message` - Base message wrapper
- `form-message-header` - Bold header inside a message block

#### Color Modifiers

- `info` - Uses `--color-feedback-info`
- `success` - Uses `--color-feedback-success`
- `warning` - Uses `--color-feedback-warning`
- `error` - Uses `--color-feedback-error`

#### WCAG Compliance Requirements

- All fields must have visible labels placed above the input
- Required fields must use an asterisk indicator — color alone is not sufficient
- Placeholder text is not a substitute for labels
- Form feedback must not rely on color alone — always include the state name (e.g. "Error: ...")

#### Vendor Form Support

- `css/vendors/_wp-forms.css` - Gravity Forms baseline styling
- `css/vendors/_statamic-forms.css` - Statamic form styling

#### Example

```html
<div class="form-message success">
	<p class="form-message-header">&#9679; Success</p>
	<p>Your inquiry has been submitted.</p>
</div>
```

### Flex Grid

CSS Grid has a limitation in that it does not support centering columns or aligning them outside of the grid structure. This issue is addressed by using a Flex-based grid, which creates a full-width grid with a specified number of columns. In a Flex Grid, any remaining columns at the bottom can be centered effectively.

- Use the class `flex-grid` to implement a flex grid.
- Flex Grid defaults to a single column. To change this, use `flex-grid-cols-{n}`, replacing `{n}` with the desired number of columns (1 to 10).
- Adjust horizontal spacing between Flex Grid items with `flex-grid-gap-{n}`. Gaps from `0.5` to `28` (2px–112px) are included — see the full list below.
- Flex Grid is fully responsive. Use `sm:`, `md:`, and `lg:` prefixes with `flex-grid-cols-{n}` or `flex-grid-gap-{n}` for responsive layouts.
- For vertical spacing, use Tailwind's native `gap-y-{n}` since Flex Grid, powered by Flexbox, does not add vertical spacing by default.
- **IMPORTANT:** Avoid using `margin-left` or `margin-right` on elements with `flex-grid`, as it disrupts the grid layout. Instead, apply margins to a container element.

#### Classes & Sizing

##### Base Class

- `flex-grid`

##### Column Classes

- `flex-grid-cols-1`
- `flex-grid-cols-2`
- `flex-grid-cols-3`
- `flex-grid-cols-4`
- `flex-grid-cols-5`
- `flex-grid-cols-6`
- `flex-grid-cols-7`
- `flex-grid-cols-8`
- `flex-grid-cols-9`
- `flex-grid-cols-10`

##### Gap Classes

- `flex-grid-gap-0.5` = 2px
- `flex-grid-gap-1` = 4px
- `flex-grid-gap-1.5` = 6px
- `flex-grid-gap-2` = 8px
- `flex-grid-gap-2.5` = 10px
- `flex-grid-gap-3` = 12px
- `flex-grid-gap-3.5` = 14px
- `flex-grid-gap-4` = 16px
- `flex-grid-gap-5` = 20px
- `flex-grid-gap-6` = 24px
- `flex-grid-gap-7` = 28px
- `flex-grid-gap-8` = 32px
- `flex-grid-gap-9` = 36px
- `flex-grid-gap-10` = 40px
- `flex-grid-gap-11` = 44px
- `flex-grid-gap-12` = 48px
- `flex-grid-gap-14` = 56px
- `flex-grid-gap-16` = 64px
- `flex-grid-gap-20` = 80px
- `flex-grid-gap-24` = 96px
- `flex-grid-gap-28` = 112px

#### Example Usage

```html
<div class="flex-grid flex-grid-cols-2 md:flex-grid-cols-3 flex-grid-gap-2">
    <!-- A 3 column flex grid with an 8 pixel gap, 2 columns on tablet -->
</div>
```

### General Utilities

Miscellaneous utility classes defined in `css/utilities/_elements.css`.

#### Layout

- `absolute-center` - Absolutely positions an element at the center of its nearest positioned ancestor via `translate(-50%, -50%)`
- `clearfix` - Clears floated children using a `::after` pseudo-element
- `py-section` - Standard section vertical padding, fluid across breakpoints (`py-18` → `2xl:py-28`)

#### Video

- `video-frame` - Forces an `<iframe>` inside to 16:9 aspect ratio using padding-bottom technique; compatible across browsers

#### Image Color Controls

- `svg-to-white` - Applies CSS filter to turn an image/icon fully white
- `svg-to-black` - Applies CSS filter to turn an image/icon fully black

#### Accent Text Coloring

Used to apply brand color to inline `<span>` elements inside a parent, typically for CMS-authored headings where editors wrap a word in a span.

- `has-primary-text` - Colors child `<span>` elements with `text-primary`
- `has-secondary-text` - Colors child `<span>` elements with `text-secondary`

### Iconography

Iconify is baked into Lwind by default through the Tailwind CSS entrypoint:

```css
@plugin "@iconify/tailwind4";
```

The package also includes `@iconify/json`, so developers can use Iconify selectors immediately without extra setup in a standard Lwind install.

#### How To Use It

- Find an icon on [Iconify](https://iconify.design/).
- Copy the Tailwind CSS selector for that icon.
- Use the selector as a class on an inline element such as `span` or `i`.
- Size and color the icon with normal Tailwind utilities.

```html
<span class="icon-[mdi-light--home] inline-block text-2xl text-primary"></span>
<span class="icon-[tabler--arrow-right] inline-block text-gray-700 dark:text-white"></span>
```

#### Notes

- The default selector prefix is `icon-`, so classes follow the `icon-[collection--name]` pattern.
- Icon names use `--` between the icon set prefix and the icon name, for example `mdi-light--home`.
- Icons inherit `currentColor`, so text color utilities also control icon color.
- Use `inline-block`, width, height, or text-size utilities as needed depending on layout.

#### Sourcing Guidance

The sourcing hierarchy still applies across projects:

1. **[Iconify](https://iconify.design/)** — default source for all icons. Use the [Iconify Figma plugin](https://www.figma.com/community/plugin/735098390272716381/iconify) to keep design and development in sync.
2. **[Flaticon](https://www.flaticon.com/)** — fallback when Iconify doesn't have a suitable option.
3. **AI-generated icons** — last resort only. Must be reviewed carefully for style consistency, clarity, licensing risk, and brand fit before use.

Avoid designs that depend on a large number of unique icons unless the project scope explicitly accounts for that work. Use icons where content repeats or follows a clear pattern — header items, footer items, resource lists, and other recurring interface elements.

Relevant documentation:

- [Iconify for Tailwind CSS 4](https://iconify.design/docs/usage/css/tailwind/tailwind4/)
- [Browse Iconify icon sets](https://iconify.design/icon-sets/)
- [Iconify Figma plugin](https://www.figma.com/community/plugin/735098390272716381/iconify)

### Dark Mode

Lwind overrides Tailwind's default dark mode behavior in the CSS entrypoint:

```css
@variant dark (&:where(.dark, .dark *));
```

This means `dark:*` utilities are class-driven and can be scoped to any wrapper, not just the root document. The main use case is block-level theming where one section of a page needs to render in dark mode and another in light mode.

#### How To Use It

- Add `dark:*` utilities exactly as you normally would in Tailwind.
- Add a `.dark` class to the wrapper that should render in dark mode.
- Leave wrappers without `.dark` as the default light version.
- Because the selector is scoped, you can mix light and dark sections on the same page.

```html
<section class="bg-white text-gray-900">
  <h2 class="h-ms-4">Light block</h2>
</section>

<section class="dark bg-gray-900 text-white">
  <h2 class="h-ms-4 dark:text-white">Dark block</h2>
  <p class="text-gray-700 dark:text-gray-200">
    This block opts into the dark variant without changing the rest of the page.
  </p>
</section>
```

#### Practical Guidance

- Treat `.dark` as a theme boundary for a component, section, or CMS block.
- Put the `.dark` class on the highest wrapper that should inherit dark styling.
- If a component must always stay light inside a dark page area, render that component outside the `.dark` wrapper or avoid using `dark:*` utilities inside it.
- Use Tailwind's `scheme-light`, `scheme-dark`, or related `color-scheme` utilities when native form controls need to match the block theme.

Relevant documentation:

- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind color-scheme utilities](https://tailwindcss.com/docs/color-scheme)

### Sticky Footer Layout

Sticky footer layout utilities defined in `css/components/_layout.css`. These work by setting `body` to `flex flex-col min-h-screen` and using flex grow/shrink on the child regions to push the footer to the bottom of the viewport. All projects should use sticky footers to avoid footer-related issues on short pages.

- `site-header` - Flex child that does not grow or shrink
- `site-main` - Flex child that grows to fill available space, pushing the footer down
- `site-footer` - Flex child that does not grow or shrink

#### Example

```html
<body>
  <header class="site-header">...</header>
  <main class="site-main">...</main>
  <footer class="site-footer">...</footer>
</body>
```
