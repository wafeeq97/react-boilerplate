import React from 'react';
var {NavItem} = require('react-bootstrap');

var MenuItem = React.createClass({
    render: function() {
        return (
            <NavItem className="menu-item" eventKey={this.props.key} href={this.props.route}>
                {this.props.text}
            </NavItem>
        );
    }
});

module.exports = MenuItem;
