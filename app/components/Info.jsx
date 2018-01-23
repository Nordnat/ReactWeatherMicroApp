var React = require('react');


var Info = ({temp, location}) => {

    return (
        <h2>It's {temp} degree in {location}</h2>
    )
}

module.exports = Info;
