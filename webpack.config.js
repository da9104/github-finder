module.exports = {
        mode: 'development',
        entry: "./src/index.js",
        output: {
          path: __dirname + '/dist',
          filename: "main.js"
        },
        devServer: {
            static: './dist',
         //  contentBase: __dirname + '/dist'
        },
        module: {
           rules: [
               {
                   test: /\.js$/,
                   use: [{loader: "babel-loader"}],
                   exclude: /node_modules/
               }
           ] 
        },
        
};