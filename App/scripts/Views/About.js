import React from 'react';
var {about} = require('../config');

var About = React.createClass({
    render: function() {
        return (
            <div className="about">
                <h2 className="header">{about.header}</h2>
                <div className="content">{about.content}</div>
            </div>
        );
    }
});

module.exports = About;
