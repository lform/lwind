# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing
for the flexibility required to implement designs produced using the Lform design system.

-   Requires Tailwind 2.0+
-   Requires Gulp 4.0+ for build system

## Building

-   `npm run dev` - Builds development version of tailwind file

-   `npm run watch` - Watches & builds development version of tailwind file

-   `npm run production` - Builds development version of tailwind file

### Gulp

-   TODO Explain gulp setup

### PostCSS Plugins

-
-   TODO Explain plugins and purpose

## Resources

-   [Tailwind Documentation](https://tailwindcss.com/docs)

-   [PreCSS Package](https://github.com/csstools/precss)

-   [PostCSS Plugins](https://github.com/postcss/postcss)

-   [TailWind UI KIts](https://www.tailwindawesome.com/?type=kit) - For reference for building components

## Tailwind Config

### Gaps

-   Designs are implemented using a base gap sizing of 8 pixels.
-   This is Tailwind's default gap system, refer to the documentation as necessary.
-   Adds 5 gap-helper class suffixes:
    -   `xs` = extra small gap of `5.28px` or `0.33rem`
    -   `s` = small gap of `8px` or `0.5rem`
    -   `m` = medium gap of `16px` or `1rem`
    -   `l` = medium gap of `32px` or `2rem`
    -   `xl` = medium gap of `48px` or `3rem`

### Colors

-   **Main colors** are named following a `primary`, `secondary`, `tertiary` logic for the main brand colors.

    -   Each has a `light` and `dark` (up-shade / down-shade) version
    -   Each has a `fore` version for the color to use for foreground text on a background with this color, eg buttons

-   **Secondary colors** are added as numeric values to the `accents` list, eg `accent-1`. This allows for as many accents
    to be added as necessary to accommodate a design.
-   **Greys** are labeled using Tailwind's numbering system, `100`, `300`, `500`, `700`, `900` are included by default.
-   **Black & whites** are defined in the `black` and `white` keys, as well as their transparent
    equivalents `white-transparent` and `black-transparent`
-   **Feedback colors** from forms / interactions are specified in the `success`, `warning`, and `error` colors
-   **Social media brand colors** are defined in the `social` keys

### Typography

-   TODO Explain font sizing scale system
-   TODO Explain header utility classes
-   TODO Explain rich-text / prose usage

### Plugins

-   [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

    -   Configured to use the `rich-text` class instead of `prose`
    -   Line-heights customized

-   [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)

## Tailwind Utilities

### Typography

-   TODO Explain

## Components

### Buttons

-   TODO Explain

### Containers

-   TODO Explain

## TODOS

-   Create component demo sheet to see Lpress styling at a glance
-   Implement drilldown kit - https://mmenujs.com/
-   Configure PurgeCSS
-   Implement components
    -   Form Messages
    -   Gallery
