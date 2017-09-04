module.exports = {
  plugins: [
    require('cssnano'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-inline-media')
  ]
}
