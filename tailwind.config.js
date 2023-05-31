/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./content/**/*.md",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@catppuccin/tailwindcss')({
            // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
            // default is `false`, which means no prefix
            prefix: 'ctp',
            // which flavour of colours to use by default, in the `:root`
            defaultFlavour: 'frappe'
        }),

    ],
}

