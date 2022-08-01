const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://radubalanpro.github.io/notari_impozit_cu_auth/'
    : '/'
})
