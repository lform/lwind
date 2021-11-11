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

-   Design system reference: https://docs.google.com/document/d/1slOYiJ_frHlN9aBx77GASkSxLsiuc_njQ62zQG1an20/edit#

-   Lpress
    Templates: https://xd.adobe.com/view/0b97ba04-4ab1-44a1-ab2b-c871b46dfe42-5ec4/screen/46f924da-14ab-4862-a659-d9effd3ec3f9

-   Lpress Privacy Templates: https://xd.adobe.com/view/ed8a8031-ba1f-4099-8857-19caf1b5b0b7-b8d9/

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

-   Create build system for Tailwind using Gulp
-   Create component demo sheet to see Lpress styling at a glance
-   Phase out SASS, use Precss - https://github.com/csstools/precss
-   Add tailwind plugins as default: prose, forms
-   Define preflight options for 'a' color, 'input' background, body, etc - https://tailwindcss.com/docs/preflight
-   Check out ui kits like https://daisyui.com/core/typography/
-   Checkout drilldown kit - https://mmenujs.com/
-   Configure PurgeCSS
-   Implement base styles
    -   `a` tags
    -   Base typography
    -   Body styling
-   Implement utilities
    -   Containers
    -   Headers
-   Implement components
    -   Buttons
    -   Form components & inputs
    -   Form Messages
    -   Richtext (prose)
    -   Pagination
    -   Navigation
    -   Gallery
-   Implement Lpress Templates

    -   Global - Header
    -   Global - Header Navigation
    -   Global - Footer
    -   Page - Content Listing
    -   Page - Content Detail
    -   Page - Blog Listing
    -   Page - Blog Detail
    -   Page - Resources Listing
    -   Page - Contact
    -   Page - Staff Listing
    -   Page - Staff Detail
    -   Page - Testimonial Listing
    -   Page - Glossary Listing
    -   Page - Partner Listing
    -   Page - Search Listing
    -   Page - 404 Page
    -   Global - Privacy Banner
    -   Page - Cookies Page
    -   Page - Privacy Page
    -   Page - Home

-   Agree on breakpoints - DONE
-   Agree on color naming - DONE
-   Agree on components to be defined - DONE
    -   Buttons
    -   Form components
    -   Form Messages
    -   Containers
    -   Richtext (prose)
    -   Pagination
    -   Navigation
-   Agree on precss mixins - DONE
-   Agree on defaults - DONE
