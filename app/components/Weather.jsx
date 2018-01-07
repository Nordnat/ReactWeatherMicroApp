var React = require('react');
var Form = require('Form');
var Info = require('Info');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function(location) {

        var that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            })
        }, function(errorMessage) {
            alert(errorMessage);
        });
    },
    render: function() {
        var {temp, location} = this.state;

        return (
            <div>
                <h2>Weather Component</h2>
                <Form onSearch={this.handleSearch} />
                <Info location={location} temp={temp} />
            </div>
        )
    }
});

module.exports = Weather;