import React from 'react';

var Logo = React.createClass({
    getDefaultProps: function() {
        return {
            src: " ",
            height: 100,
            padding: 10
        }
    },

    render: function() {
        return (
            <div className="logo">
                <img src={this.props.src} height={this.props.height} />
            </div>
        );
    }
});

module.exports = Logo;
