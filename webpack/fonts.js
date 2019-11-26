module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff|ttf|svg)$/,
          include: /fonts/,
          loader: 'file-loader',
          options: {
              name: 'fonts/[name].[ext]'
                   },
                },
            ],
        },
    };
};