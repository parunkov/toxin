module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|ttf|svg)$/,
          loader: 'file-loader',
          options: {
              name: 'fonts/[name].[ext]'
                   },
                },
            ],
        },
    };
};