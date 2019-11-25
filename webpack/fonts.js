module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|ttf|svg)$/,
          exclude: /pages/,
          loader: 'file-loader',
          options: {
              name: 'fonts/[name].[ext]'
                   },
                },
            ],
        },
    };
};