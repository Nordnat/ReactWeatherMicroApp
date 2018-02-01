var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var searchValue = this.refs.searchInputValue.value;

        var encodedLocation = encodeURIComponent(searchValue);
        if (searchValue.length > 0) {
            this.refs.searchInputValue.value = "";
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function() {
        return (
            <div className="grid-container full">
                <div className="top-bar">
                    <div className="top-bar-left">
                    <ul className="menu medium-horizontal">
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                    </div>
                    <div className="top-bar-right">
                        <form action="" onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li><input type="search" ref="searchInputValue" placeholder="Search"></input></li>
                                <li><button type="submit" className="button">Get the weather</button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
    
});

module.exports = Nav;   