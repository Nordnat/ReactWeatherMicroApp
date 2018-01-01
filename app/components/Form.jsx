var React = require('react');

var Form = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="localization"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
})

module.exports = Form;
