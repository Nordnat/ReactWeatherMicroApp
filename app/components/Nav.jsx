var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
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
                    <ul className="menu">
                        <li><input type="search" placeholder="Search"></input></li>
                        <li><button type="button" className="button">Get the weather</button></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

module.exports = Nav;   