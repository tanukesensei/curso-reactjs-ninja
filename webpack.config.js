'use strick'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'src', 'index'),
        filename: 'bundle.js',
        publicPath: '/static/' /* esse static está apenas em memória. */   
        // publicPath: '/index/' /* também  pode ser usado assim se estiver em produção. */     
    }
}