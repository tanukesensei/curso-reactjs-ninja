'use strict'

let React = require('react')

let Title = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Titulo')}
})

// let Title = React.createClass({
//     render: function() {
//         return <h1>Titulo</h1>
//     }
// });

module.exports = Title