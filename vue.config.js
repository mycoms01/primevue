module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/primevue-v2/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}