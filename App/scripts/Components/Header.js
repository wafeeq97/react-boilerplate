import React from 'react';
import Router from 'react-router';
var {RouteHandler} = Router;
var {Nav} = require('react-bootstrap');

import MenuItem from './MenuItem';
import Logo from './Logo';

var {header} = require('../config');

var Header = React.createClass({

    render: function() {

        return (
            <div>
                <header className="app-header" style={ {width: "100%"} }>
                    <div className="container" style={style}>
                        <Logo src={header.logo.src} height={header.logo.height} padding={header.logo.padding} />
                         <Nav bsStyle='pills' activeKey={1}>
                        {
                            header.menu.map(function(menuItem, index){
                                return (
                                    <MenuItem route={"#/" + menuItem.route} text={menuItem.text} key={index} />
                                )
                            })
                        }
                        </Nav>
                    </div>
                </header>
                <RouteHandler/>
            </div>
        );
    }

});

module.exports = Header;
