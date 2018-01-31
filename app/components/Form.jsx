var React = require('react');

var Form = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="localization"/>
                <button className="hollow button expended" type="submit">Submit</button>
            </form>
        )
    }
})

module.exports = Form;
