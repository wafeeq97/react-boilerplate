import React from 'react';

var FilteredList = require('../Components/FilteredList');

var {contact} = require('../config');

var Contact = React.createClass({


  // getInitialState: function(){
  //     return({
  //       searchValue: ""
  //   });
  // },
  //
  // onSearchValueUpdate: function(e){
  //   //console.log(e.target.value);
  //   this.setState({
  //     searchValue: e.target.value
  //   });
  // },
  //
  // renderContact(person) {
  //   var searchString = this.state.searchValue.toUpperCase();
  //   var nameToCompare = person.name.toUpperCase();
  //
  //   // true if the name contains the value of the searchString, else nothing is returned (returns undefined')
  //   if(nameToCompare.indexOf(searchString) > -1){
  //     return (
  //       <ListGroupItem>
  //               <a href="#">{person.name}</a><br/>
  //               <small>{person.phone}</small>
  //       </ListGroupItem>
  //     )
  //   }
  // },
  //
  render: function() {
    //console.log("Search Value" + this.state.searchValue)
      return (
        <div className="app-view container">
            <h2 className="header">{contact.header}</h2>
            <FilteredList list={contact.contacts} />
        </div>
      );
    }
})

module.exports = Contact;
