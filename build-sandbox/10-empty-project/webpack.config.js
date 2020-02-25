const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin:CleanPlugin} = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Hello world',
    buildTime: new Date(),
    template: 'public/index.html'
});

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: 'main-[hash:8].css'
});

console.log(CleanPlugin)

const clean = new CleanPlugin();

module.exports = ({mode = 'development'} = {}) => {
    const PROD = 'production';
    const DEV = 'development';

    const isProd = mode === PROD;
    const isDev = mode === DEV;

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        if (isProd)
            return [htmlPlugin, miniCssPlugin, clean];

        return [htmlPlugin, clean];
    };

    return {
        mode: isProd ? PROD : isDev && DEV,

        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                //` loading images
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                //` loading fonts
                {
                    test: /\.(ttf|otf|eof|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                //`  loading css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                //`  loading scss/sass
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true
        }
    }
};

