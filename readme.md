# Lwind - Lform Tailwind Setup

The Lwind frontend styling system is designed to use as many Tailwind default-approaches as possible while also allowing for the flexibility required to implement designs produced using the Lform design system. The package is lightweight, comprised of a starting Tailwind config and a handful of PostCSS plugins.

- Requires Tailwind 3.4.0+

## Resources

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [PostCSS Plugins](https://github.com/postcss/postcss) - No longer used directly, all plugins from this package have been included in this package as the PostCSS package is no longer updated, it was just a wrapper for those packages.
- [TailWind UI KIts](https://www.tailwindawesome.com/?type=kit) - For reference for building components

## Installation

Adding the Lwind system to a project is relatively straight forward:

1. Run `npm i @lform/lwind`
2. Included in the package is an example starting PCSS file `css/main.example.pcss`, copy this into your project's CSS root and name it accordingly:

   * [https://github.com/lform/lwind/blob/master/css/main.example.pcss](https://github.com/lform/lwind/blob/master/css/main.example.pcss)
   * NOTE: To customize or override any of the Lwind pcss files, just copy the file in question from the package or create a new one in the appropriate directory, and adjust the path accordingly in your `main.pcss` (or however you named the file). You can also use the components that are needed, and disable the others.
3. Create or update the `postcss.config.js` file based on the package version:

   * [https://github.com/lform/lwind/blob/master/postcss.config.js](https://github.com/lform/lwind/blob/master/postcss.config.js)
   * NOTE: Some build systems will have an alternative method of loading PostCSS plugins, you will need to add the same entries as the `postcss.config.js` to that system, using its method / format.
4. Copy the `tailwind.config.js` file from the package into your project:

   * [https://github.com/lform/lwind/blob/master/tailwind.config.js](https://github.com/lform/lwind/blob/master/tailwind.config.js)
5. Update the `tailwind.config.js` to match your project's design specifications.
6. Run the build system to confirm that everything is working.
7. The following `package.json` scripts can be added if there is no build system (adjust the paths accordingly):

   "scripts": {
       "dev": "npx tailwindcss -i ./css/main.pcss -o ./dist/app.css",
       "watch": "npx tailwindcss -i ./css/main.pcss -o ./dist/app.css --watch",
       "prod": "NODE_ENV=production npx tailwindcss -i ./css/main.pcss -o ./dist/app.min.css --minify"
   },
## Building

The following scripts are available in the `package.json` file, if the project uses a build system, the commands may be different.- `npm run dev` - Builds development version of tailwind file
- `npm run watch` - Builds development version of tailwind file and watches files
- `npm run prod` - Builds development version of tailwind file


## Included PostCSS Plugins

The following PostCSS plugins are used by default:

- [autoprefixer](https://github.com/postcss/autoprefixer) - Autoprefixes CSS for browser compatibility
- [postcss-advanced-variables](https://github.com/csstools/postcss-advanced-variables) - Used to add SCSS-style variables in PCSS, has more advanced functionality than CSS variables.
- [postcss-atroot](https://github.com/OEvgeny/postcss-atroot) - Used to add `@at-root` functionality to PCSS, bubbling nested styling up to the root-level selectors.
- [postcss-extend-rule](https://github.com/csstools/postcss-extend-rule) - Used to add SCSS-style `@extend` functionality to PCSS, allowing for the extension of existing classes.
- [postcss-import](https://github.com/postcss/postcss-import) - Used to import other PCSS / CSS files.
- [tailwindcss/nesting](https://www.npmjs.com/package/@tailwindcss/nesting) - Wraps `postcss-nested` and acts as a compatibility layer to make sure your nesting plugin of choice properly understands custom syntax like `@apply` and `@screen`.

### Recommend Plugins

The following PostCSS plugins are recommend depending on your needs:

- [postcss-rem](https://github.com/pierreburel/postcss-rem) - Used to convert pixel values to rem, adds a `rem-convert()` function that can be invoked in PCSS. `px` must be specified, or it will not function, eg `width: rem-convert(100px)`.

### PostCSS Imports & Overriding Lwind

You can override the Lwind CSS by adding a file with the same path & filename in the project's PCSS directory and adjusting the `@import` statement in the `main.pcss` file.

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
- **Greys** are labeled using Tailwind's numbering system, `100`, `300`, `500`, `700`, `900` are included by default.
- **Black & whites** are defined in the `black` and `white` keys, as well as their transparent versions
  equivalents `white-transparent` and `black-transparent`
- **Feedback colors** from forms / interactions are specified in the `success`, `warning`, and `error` colors
- **Social media brand colors** are defined in the `social` keys

### Typography

#### Fonts available

There are 3 types of fonts in Lwind:

- `font-body` - The body font used on the site by default
- `font-header` - The main header font
- `font-subheader` - Usually used for small text items in a utility context, eg blog post dates

#### Font scaling

The font-scaling system uses Modular Scale instead of Tailwind's default

- Base is `16px` with `1.125x` scaling
- The scale included with Lwind goes from `-3` to `12`
- Below are the scales, or you refer to the [font scale reference](https://www.modularscale.com/?16&px&1.125) for the full list:

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

#### Header and subheader utility classes

Modular scale header utility classes have been included that include the header font with a default line-height of `1.2`. Headers with default line-heights will appear too spaced out between the lines, especially at larger font sizes.

##### Header Classes

- `-h-ms-3` = 11px
- `-h-ms-2` = 12px
- `-h-ms-1` = 14px
- `h-ms` = 16px
- `h-ms-1` = 18px
- `h-ms-2` = 20px
- `h-ms-3` = 22px
- `h-ms-4` = 25px
- `h-ms-5` = 28px
- `h-ms-6` = 32px
- `h-ms-7` = 36px
- `h-ms-8` = 41px
- `h-ms-9` = 46px
- `h-ms-10` = 51px
- `h-ms-11` = 58px
- `h-ms-12` = 65px
- `h-ms-13` = 73px

##### Subheader Classes

Subheaders are generally smaller in size, their available classes are as follows:

- `-sh-ms-3` = 11px
- `-sh-ms-2` = 12px
- `-sh-ms-1` = 14px
- `sh-ms` = 16px
- `sh-ms-1` = 18px
- `sh-ms-2` = 20px

##### Header Line Heights

By default, headers are set to `1.25` line-height as larger fonts can appear overly spaced out vertically. To override this, extend `lineHeight` with a `header` value in the Tailwind config file.

#### Richtext

A custom rich-text implementation is used for all rich-text areas by adding a `rich-text` class to any area with rich text. The rich text settings can be found in the tailwind config file.

## Tailwind Utilities & Components

### Buttons

Button classes are baked into Lwind and can be invoked with the following options. Buttons use the baseclass and modifier syntax.

#### Colors

- `button` - The default button, uses the `primary` color as its background and `primary-fg` as the text color
- `button-secondary` - The secondary color button, uses the `secondary` color as its background and `secondary-fg` as the text color
- `button-tertiary` - The tertiary color button, uses the `tertiary` color as its background and `tertiary-fg` as the text color

#### Sizing

- `button-xs`
- `button-sm`
- `button` - Default size
- `button-lg`
- `button-xl`

#### Examples

- Default button, small: `.button .button-sm`
- Secondary color button, large: `.button .button-secondary .button-sm`

### Containers

Tailwind's default containers are disabled in favor of a fluid container system. There are five container sizes that match the [default breakpoint sizes](https://tailwindcss.com/docs/screens).

- Containers are auto-centered with `margin-left` & `margin-right` set to `auto`.
- They also have a default padding of `1.5rem`.
- Container widths & padding can be configured in the Tailwind config under the `containers` section
- If a class of `px-0` is added to a container, the padding will be disabled
- If a class of `mx-0` is added to a container, the auto-centering margin will be disabled.

#### Classes & Default Sizes

- `container` - Max of `1536px`
- `container-2xl` - Max of `1536px`
- `container-xl` - Max of `1280px`
- `container-lg` - Max of `1024px`
- `container-md` - Max of `768px`
- `container-sm` - Max of `640px`

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

#### Example Usage

```html
<div class="flex-grid flex-grid-cols-2 md:flex-grid-cols-3 flex-grid-gap-2">
    <!-- A 3 column flex grid with an 8 pixel gap, 2 columns on tablet -->
</div>
```
