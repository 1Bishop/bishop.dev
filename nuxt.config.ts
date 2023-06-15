// https://nuxt.com/docs/api/configuration/nuxt-config


// @ts-ignore
export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'},
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxt/content'],
    content: {
        highlight: {
            theme: 'nord'
        }
    }
})
