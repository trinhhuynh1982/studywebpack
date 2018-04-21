const path = require('path');

module.exports = {
    entry : {
        bundle : './src/index.js'
    },
    output : {
        path : path.join(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : '/\.js$/',
                exclude : /node_modules/
            },
            {
                use : [
                    'css-loader',
                    'style-loader'
                ],
                test : '/\.css$/'
            }
        ]
    }
}