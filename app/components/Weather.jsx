var React = require('react');
var Form = require('Form');
var Info = require('Info');

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Weather Component</h2>
                <Form />
                <Info />
            </div>
        )
    }
});

module.exports = Weather;