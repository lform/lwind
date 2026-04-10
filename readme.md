# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing for the flexibility required to implement designs produced using the Lform design system. The package is lightweight, comprised of a starting Tailwind config and a handful of PostCSS plugins.

- Requires Tailwind 4.0.0+

## Resources

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [TailWind UI KIts](https://www.tailwindawesome.com/?type=kit) - For reference for building components

## Installation

Adding the Lwind system to a project is relatively straight forward:

1. Run `npm i @lform/lwind`
2. Included in the package are example entry files you can copy into your project and adapt as needed:

   * [https://github.com/lform/lwind/blob/master/css/main.example.css](https://github.com/lform/lwind/blob/master/css/main.example.css)
   * [https://github.com/lform/lwind/blob/master/css/editor.example.css](https://github.com/lform/lwind/blob/master/css/editor.example.css)
   * NOTE: To customize or override any of the Lwind CSS files, copy the file in question from the package or create a new one in the appropriate directory and update your imports accordingly. You can also include only the components and vendor files your project needs.
3. Create your main stylesheet entry, typically based on `css/main.example.css`, and adjust the imports for your project.
4. Update the theme tokens in `css/_theme.css` or your local equivalent to match your project's design system.
5. Run the build system to confirm that everything is working.
6. The following `package.json` scripts can be added if there is no existing build system (adjust the paths accordingly):

```json
{
  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.css",
    "watch": "npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.css --watch",
    "prod": "NODE_ENV=production npx @tailwindcss/cli -i ./css/main.css -o ./dist/app.min.css --minify"
  }
}
```

## Building

The following scripts are available in the `package.json` file, if the project uses a build system, the commands may be different.

- `npm run dev` - Builds the development stylesheet from `css/main.css` to `dist/app.css`
- `npm run watch` - Builds the development stylesheet and watches for changes
- `npm run prod` - Builds the minified production stylesheet at `dist/app.min.css`

## Tailwind Config

### Tailwind Plugins

- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Used to provide default baseline form styling

### Breakpoints

The [default breakpoints included in Tailwind are used](https://tailwindcss.com/docs/screens).

### Spacing / Gaps

- Designs are implemented using a base spacing sizing of 8 pixels.
- This is Tailwind's default spacing system, [refer to the documentation as necessary.](https://tailwindcss.com/docs/customizing-spacing)

### Colors

- **Main colors** are named following a `primary`, `secondary`, `tertiary` logic for the main brand colors.

  - Each has a `light` and `dark` (up-shade / down-shade) version
  - Each has a `fg` version for the color to use for foreground text on a background with this color, eg buttons
- **Secondary colors** are added as numeric values to the `accents` list, eg `accent-1`. This allows for as many accents
  to be added as necessary to accommodate a design.
- **Grays** are labeled using Tailwind's numbering system. A full 10-step scale is included: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `950`.
- **Black & whites** are defined in the `black` and `white` keys, as well as their transparent versions
  equivalents `white-transparent` and `black-transparent`
- **Feedback colors** from forms / interactions are specified in the `info`, `success`, `warning`, and `error` colors
- **Social media brand colors** are defined in the `social` keys

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
- `h-ms` = base header font + tight line-height (no size override)
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

##### Header Line Heights

By default, headers are set to a tighter line-height because larger fonts can appear overly spaced out vertically. Override `--leading-header` in your theme tokens if needed.

#### Richtext

A custom rich-text implementation is used for all rich-text areas by adding a `rich-text` class to any area with rich text.

- Add `rich-text inverted` to apply white text and adjusted link/list marker colors for rich text on dark backgrounds.

- Rich text now includes a modernized flow-spacing model, better heading rhythm, improved list styling, cleaner blockquotes, and more robust media/table handling.
- WordPress-specific rich text handling is separated into vendor files so editor and frontend content can share the base `rich-text` styles while still supporting WordPress-specific markup.
- `css/editor.css` is available for editor-specific builds and includes the editor base styles plus the shared component stack needed for rich text authoring.
- Relevant vendor files, enable and disable them as needed:
  - `css/vendors/_wp-richtext.css`
  - `css/vendors/_wp-forms.css`
  - `css/vendors/_wp-pagination.css`
  - `css/vendors/_statamic-forms.css`
  - `css/vendors/_statamic-pagination.css`

## Tailwind Utilities & Components

### Buttons

Buttons are utility-first and are intended to be composed by stacking modifier classes on top of the base `button` utility.

#### Colors

- `button` - Base button and default `primary` solid button
- `button-secondary` - Secondary color variant

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
- They also have a default padding of `1.5rem`.
- Container widths & padding are configured through CSS theme variables
- `container-*` utilities resolve against the matching `--container-*` theme tokens
- If a class of `px-0` is added to a container, the padding will be disabled
- If a class of `mx-0` is added to a container, the auto-centering margin will be disabled.

#### Classes & Default Sizes

- `container` - Default max width of `1440px`
- `container-xs` - `720px`
- `container-sm` - `1024px`
- `container-md` - `1280px`
- `container-lg` - `1440px`
- `container-xl` - `1600px`
- `container-adaptive` - `1440px` - See below for details on this special adaptive container class

#### Adaptive Container

Rather than stretching fluidly to a single max-width, this container snaps through a series of fixed breakpoint widths (`720px` → `1024px` → `1280px` → `1440px`). This keeps the layout at a predictable, design-friendly width at each viewport range and avoids awkward, time-consuming in-between responsive fixes. Useful when a design is defined at specific widths and fluid scaling between them causes layout issues.

#### Pagination

- `pagination` - Base pagination component styling
- `css/components/_pagination.css` contains the shared pagination component styles
- `css/vendors/_wp-pagination.css` adds support for WordPress pagination markup such as `.navigation.pagination`, `.posts-navigation`, and `.post-navigation`
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

#### Vendor Form Support

- `css/vendors/_wp-forms.css` - Gravity Forms baseline styling
- `css/vendors/_statamic-forms.css` - Statamic form styling

#### Example

```html
<div class="form-message success">
	<p class="font-message-header">&#9679; Success</p>
	<p>Your inquiry has been submitted.</p>
</div>
```

### Flex Grid

CSS Grid has a limitation in that it does not support centering columns or aligning them outside of the grid structure. This issue is addressed by using a Flex-based grid, which creates a full-width grid with a specified number of columns. In a Flex Grid, any remaining columns at the bottom can be centered effectively.

- Use the class `flex-grid` to implement a flex grid.
- Flex Grid defaults to a single column. To change this, use `flex-grid-cols-{n}`, replacing `{n}` with the desired number of columns (1 to 10).
- Adjust horizontal spacing between Flex Grid items with `flex-grid-gap-{n}`, using any number from the Tailwind [default spacing scale](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale). The maximum gap is `12` (48px). For larger gaps, add custom classes.
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

- `img-to-white` - Applies CSS filter to turn an image/icon fully white
- `img-to-black` - Applies CSS filter to turn an image/icon fully black

#### Accent Text Coloring

Used to apply brand color to inline `<span>` elements inside a parent, typically for CMS-authored headings where editors wrap a word in a span.

- `has-primary-text` - Colors child `<span>` elements with `text-primary`
- `has-secondary-text` - Colors child `<span>` elements with `text-secondary`

### Layout

Sticky footer layout utilities defined in `css/components/_layout.css`. These work by setting `body` to `flex flex-col min-h-screen` and using flex grow/shrink on the child regions to push the footer to the bottom of the viewport.

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

