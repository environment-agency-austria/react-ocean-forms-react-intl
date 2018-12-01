const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * The source path
 */
const srcPath = path.resolve(__dirname, 'src');

module.exports = (_env, arg) => {
  const config = {
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          include: srcPath,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          // This loader is used to transpile the .ts and .tsx files
          // After that to js the output is transpiled
          // using babel-loader.
          test: /\.(tsx?)$/,
          include: srcPath,
          use: [
            'babel-loader', {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.build.json'),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.ts', '.tsx'],
    },
    externals: {
      react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
      'react-intl': 'commonjs react-intl',
      'react-ocean-forms': 'commonjs react-ocean-forms',
    },
    plugins: [
      new CleanWebpackPlugin(['build/*']),
      new webpack.NamedModulesPlugin(),
    ],
  };

  if (arg.mode === 'development') {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin(),
    );
  }

  return config;
};
