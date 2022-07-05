module.exports =  {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-combine-media-query'),
        (process.env.NODE_ENV === 'production' ?  require('cssnano')  :  null),
    ]
}