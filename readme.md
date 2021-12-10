# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing
for the flexibility required to implement designs produced using the Lform design system.

-   Requires Tailwind 3.0+
-   Requires Gulp 4.0+ for build system

## Resources

-   [Tailwind Documentation](https://tailwindcss.com/docs)

-   [PostCSS Plugins](https://github.com/postcss/postcss)

-   [TailWind UI KIts](https://www.tailwindawesome.com/?type=kit) - For reference for building components

## Building

-   `npm run dev` - Builds development version of tailwind file and watches files
-   `npm run prod` - Builds development version of tailwind file

### Gulp

Gulp builds tailwind via the gulp PostCss plugin. To manually invoke gulp, there are the following tasks available:

-   `npx gulp watch` - Watches files
-   `npx gulp styles` - Builds site & editor styles
-   `npx gulp styles:site` - Builds site styles
-   `npx gulp styles:editor` - Builds editor styles
-   `npx gulp build` - Builds everything

### JIT Compiling

By default, Tailwind 3.0 uses the JIT compiling method which means it scans your markup in Html, Twig, and Javascript files for the classes you're using and only builds the classes it finds. If classes do not seem to work, this is likely the culprit.

Previously Tailwind built everything and then purge was run afterwards, but this is no longer the case. JIT results in far faster compile times.

Refer to [the documentation for more information].(https://tailwindcss.com/docs/content-configuration)

## PostCSS Plugins

The following PostCSS plugins are used:

-   [postcss-import](https://github.com/postcss/postcss-import) - Used to import other PCSS files
-   [autoprefixer](https://github.com/postcss/autoprefixer) - Autoprefixes CSS for browser compatibility
-   [precss](https://github.com/csstools/precss) - Used to allow nesting and other SCSS-like functionality
-   [postcss-rem](https://github.com/pierreburel/postcss-rem) - Used to convert pixel values to rem, adds `rem()` function that can be invoked in PCSS. `px` must be specified or it will not function, eg `width: rem(100px)`.
-

### PostCSS Imports & Overriding Lwind

Imports are setup to read two paths:

-   `public/assets/css`
-   `node_modules/@lform/lwind/css`

It first checks the project's `css` directory and uses the matching file if its found, otherwise it falls back to the `lwind` NPM package CSS

To override the `lwind` package styling, add a file with a matching path & filename in the project `css` directory

## Tailwind Config

### Tailwind Plugins

-   [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - Used to provide rich-text styling
-   [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Used to provide default baseline form styling

### Breakpoints

The [default breakpoints included in Tailwind are used](https://tailwindcss.com/docs/screens).

### Spacing / Gaps

-   Designs are implemented using a base spacing sizing of 8 pixels.
-   This is Tailwind's default spacing system, [refer to the documentation as necessary.](https://tailwindcss.com/docs/customizing-spacing)
-   Adds 5 spacing-helper class suffixes:
    -   `xs` = extra small gap of `5.28px` or `0.33rem`
    -   `s` = small gap of `8px` or `0.5rem`
    -   `m` = medium gap of `16px` or `1rem`
    -   `l` = medium gap of `32px` or `2rem`
    -   `xl` = medium gap of `48px` or `3rem`

### Colors

-   **Main colors** are named following a `primary`, `secondary`, `tertiary` logic for the main brand colors.

    -   Each has a `light` and `dark` (up-shade / down-shade) version
    -   Each has a `foreground` version for the color to use for foreground text on a background with this color, eg buttons

-   **Secondary colors** are added as numeric values to the `accents` list, eg `accent-1`. This allows for as many accents
    to be added as necessary to accommodate a design.
-   **Greys** are labeled using Tailwind's numbering system, `100`, `300`, `500`, `700`, `900` are included by default.
-   **Black & whites** are defined in the `black` and `white` keys, as well as their transparent versions
    equivalents `white-transparent` and `black-transparent`
-   **Feedback colors** from forms / interactions are specified in the `success`, `warning`, and `error` colors
-   **Social media brand colors** are defined in the `social` keys

### Typography

#### Fonts available

There are 3 types of fonts in Lwind:

-   `font-body` - The body font used on the site by default
-   `font-header` - The main header font
-   `font-subheader` - Usually used for small text items in a utility context, eg blog post dates

#### Font scaling

The font-scaling system uses Modular Scale instead of Tailwind's default

-   Base is `16px` with `1.125x` scaling
-   The scale included with Lwind goes from `-3` to `12`
-   Below are the scales, or you refer to the [font scale reference](https://www.modularscale.com/?16&px&1.125) for the full list:

    -   `-text-ms-3` = 10px
    -   `-text-ms-2` = 12px
    -   `-text-ms-1` = 14px
    -   `text-ms-0` = 16px
    -   `text-ms-1` = 18px
    -   `text-ms-2` = 20px
    -   `text-ms-3` = 22px
    -   `text-ms-4` = 25px
    -   `text-ms-5` = 28px
    -   `text-ms-6` = 32px
    -   `text-ms-7` = 36px
    -   `text-ms-8` = 41px
    -   `text-ms-9` = 46px
    -   `text-ms-10` = 52px
    -   `text-ms-11` = 58px
    -   `text-ms-12` = 65px

#### Header utility classes

Modular scale header utility classes have been included that include the header font with a default line-height of `1.2`

These are invoked with the pattern `text-hms-1`, `text-hms-2` and so on

#### Richtext

Tailwind's typography plugin is used for all rich-text areas. The main differences from the default setup are:

-   `rich-text` is configured as the typography class name instead of the default of `prose`
-   By default, the plugin sets a `max-width: 65ch` on all richtext areas, this has been replaced with `max-width: 100%`

## Tailwind Utilities & Components

### Buttons

Button classes are baked into Lwind and can be invoked with the following options. Buttons use the baseclass and modifier syntax.

#### Colors

-   `button` - The default button, uses the `primary` color as its background and `primary-foreground` as the text color
-   `button-secondary` - The secondary color button, uses the `secondary` color as its background and `secondary-foreground` as the text color
-   `button-tertiary` - The tertiary color button, uses the `tertiary` color as its background and `tertiary-foreground` as the text color

#### Sizing

-   button-xs
-   button-sm
-   button - Default size
-   button-lg
-   button-xl

#### Examples

-   Default button, small: `.button .button-sm`
-   Secondary color button, large: `.button .button-secondary .button-sm`

### Containers

Tailwind's default containers are disabled in favor of a fluid container system. There are five container sizes that match the [default breakpoint sizes](https://tailwindcss.com/docs/screens).

-   Containers are auto-centered with `margin-left` & `margin-right` set to `auto`.
-   They also have a default padding of `px-4`.

#### Classes

-   `container` - Max of the `2xl` screen size
-   `container-xl` - Max of the `xl` screen size
-   `container-lg` - Max of the `lg` screen size
-   `container-md` - Max of the `md` screen size
-   `container-sm` - Max of the `sm` screen size

## TODOS

-   Create component demo sheet to see Lpress styling at a glance
-   Implement drilldown kit - https://mmenujs.com/
-   Implement components
    -   Gallery
