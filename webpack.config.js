https://css-tricks.com/css-modules-part-2-getting-started/

module.exports = {
    entry: './src',
    mode: 'production',
    output: {
      path: __dirname + '/build',
      filename: 'tkg-templates.js',
    },
    
    module: {
        rules: [
            {
              test: /\.js/,
              loader: 'babel-loader',
              include: __dirname + '/src',
            },
            {
              test: /\.css/,
              loaders: ['style-loader', 'css-loader']
            }
          ],
    }
};