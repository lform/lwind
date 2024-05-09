# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing
for the flexibility required to implement designs produced using the Lform design system.

-   Requires Tailwind 3.4.0+
-   Requires Gulp 5.0+ for build system

## Resources

-   [Tailwind Documentation](https://tailwindcss.com/docs)

-   [PostCSS Plugins](https://github.com/postcss/postcss) - No longer used directly, all plugins from this package have been included in this package as the PostCSS package is no longer updated, it was just a wrapper for those packages.

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

Refer to [the documentation for more information](https://tailwindcss.com/docs/content-configuration).

## PostCSS Plugins

The following PostCSS plugins are used by default:

-   [postcss-import](https://github.com/postcss/postcss-import) - Used to import other PCSS files
-   [autoprefixer](https://github.com/postcss/autoprefixer) - Autoprefixes CSS for browser compatibility
-   [postcss-advanced-variables](https://github.com/csstools/postcss-advanced-variables) - Used to define SCSS-style variables in PCSS with more advanced functionality than CSS variables
-   [postcss-atroot](https://github.com/OEvgeny/postcss-atroot) - Used to add `@at-root` functionality to PCSS, bubbling nested styling up to the root-level selectors.
-   [postcss-extend-rule](https://github.com/csstools/postcss-extend-rule) - Used to add SCSS-style `@extend` functionality to PCSS, allowing for the extension of existing classes.
-   [tailwindcss/nesting](https://www.npmjs.com/package/@tailwindcss/nesting) - Wraps `postcss-nested` and acts as a compatibility layer to make sure your nesting plugin of choice properly understands custom syntax like `@apply` and `@screen`.

### Recommend Plugins

The following PostCSS plugins are recommend depending on your needs:

- [postcss-rem](https://github.com/pierreburel/postcss-rem) - Used to convert pixel values to rem, adds a `rem-convert()` function that can be invoked in PCSS. `px` must be specified, or it will not function, eg `width: rem-convert(100px)`. 

### PostCSS Imports & Overriding Lwind

You can override the Lwind CSS by adding a file with the same path & filename in the project's PCSS directory and adjusting the `@import` statement in the `main.pcss` file. 

## Tailwind Config

### Tailwind Plugins

-   [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Used to provide default baseline form styling

### Breakpoints

The [default breakpoints included in Tailwind are used](https://tailwindcss.com/docs/screens).

### Spacing / Gaps

-   Designs are implemented using a base spacing sizing of 8 pixels.
-   This is Tailwind's default spacing system, [refer to the documentation as necessary.](https://tailwindcss.com/docs/customizing-spacing)

### Colors

-   **Main colors** are named following a `primary`, `secondary`, `tertiary` logic for the main brand colors.

    -   Each has a `light` and `dark` (up-shade / down-shade) version
    -   Each has a `fg` version for the color to use for foreground text on a background with this color, eg buttons

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

#### Header and subheader utility classes

Modular scale header utility classes have been included that include the header font with a default line-height of `1.25` (`leading-tight` in tailwind)

These are invoked in one of 4 ways:

* `h-ms-1` - Bold Header, MS 1
* `hl-ms-1` - Light Header, MS 1
* `sh-ms-1` - Bold SubHeader, MS 1
* `shl-ms-1` - Light SubHeader, MS 1

For the default font size, remove the number at the end:

* `h-ms` - Bold Header, MS 0
* `hl-ms` - Light Header, MS 0
* `sh-ms` - Bold SubHeader, MS 0
conver#### Richtext

A custom rich-text implementation is used for all rich-text areas by adding a `rich-text` class to any area with rich text. The rich text settings can be found in the tailwind config file.

## Tailwind Utilities & Components

### Buttons

Button classes are baked into Lwind and can be invoked with the following options. Buttons use the baseclass and modifier syntax.

#### Colors

-   `button` - The default button, uses the `primary` color as its background and `primary-fg` as the text color
-   `button-secondary` - The secondary color button, uses the `secondary` color as its background and `secondary-fg` as the text color
-   `button-tertiary` - The tertiary color button, uses the `tertiary` color as its background and `tertiary-fg` as the text color

#### Sizing

-   `button-xs`
-   `button-sm`
-   `button` - Default size
-   `button-lg`
-   `button-xl`

#### Examples

-   Default button, small: `.button .button-sm`
-   Secondary color button, large: `.button .button-secondary .button-sm`

### Containers

Tailwind's default containers are disabled in favor of a fluid container system. There are five container sizes that match the [default breakpoint sizes](https://tailwindcss.com/docs/screens).

-   Containers are auto-centered with `margin-left` & `margin-right` set to `auto`.
-   They also have a default padding of `1.5rem`.
-   Container widths & padding can be configured in the Tailwind config under the `containers` section
-   If a class of `px-0` is added to a container, the padding will be disabled
-   If a class of `mx-0` is added to a container, the auto-centering margin will be disabled.

#### Classes & Default Sizes

-   `container` - Max of `1536px`
-   `container-2xl` - Max of `1536px`
-   `container-xl` - Max of `1280px`
-   `container-lg` - Max of `1024px`
-   `container-md` - Max of `768px`
-   `container-sm` - Max of `640px`
