var React = require('react');

var Info = React.createClass({
    render: function() {
        var {temp, location} = this.props;
        return (
            <h2>It's {temp} degree in {location}</h2>
        )
    }
})

module.exports = Info;
