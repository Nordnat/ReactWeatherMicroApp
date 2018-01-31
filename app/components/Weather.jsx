var React = require('react');
var Form = require('Form');
var Info = require('Info');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {

        var that = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage () {
            if(isLoading) {
                return <h3>Fetching weatcher</h3>
            } else if (temp && location) {
                return (
                    <Info location={location} temp={temp} />
                )
            }
        }

        return (
            <div>
                <h1 className="text-center">Weathert</h1>
                <Form onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;