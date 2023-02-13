// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: [
        '~/assets/style.scss'
    ],

    alias: {
        // Vue
        '@': '/<rootDir>/',

        '@store': '/<rootDir>./store/',
        '@pages': '/<rootDir>./pages/',
        '@templates': '/<rootDir>./templates/',
        '@components': '/<rootDir>./components/',
        '@ui': '/<rootDir>./components/UiComponents/',
        // Assets
        '@fonts': '/<rootDir>./assets/fonts/',
        '@icons': '/<rootDir>./assets/icons/',
        '@images': '/<rootDir>./assets/images/',
        '@styles': '/<rootDir>./assets/styles/',
        '@video': '/<rootDir>./assets/video/',
        // Utils
        '@helpers': '/<rootDir>./helpers/',
        '@validation': '/<rootDir>./helpers/validation/',
    },

})
