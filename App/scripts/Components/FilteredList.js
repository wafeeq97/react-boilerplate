import React from 'react';
var { ListGroup, ListGroupItem, FormControl } = require('react-bootstrap');

var FilteredList = React.createClass({

  propTypes: {
    list: React.PropTypes.array
  },

  getInitialState: function(){
      return({
        searchValue: ""
    });
  },

  getDefaultProps: function(){
    return ({
      list:[]
    });
  },

  onSearchValueUpdate: function(e){
    //console.log(e.target.value);
    this.setState({
      searchValue: e.target.value
    });
  },

  renderListItemProperties: function(listItem){
      var listItemProps = [];

      for(var prop in listItem){
          var propName = prop.toUpperCase();
          var propValue = listItem[prop];

          listItemProps.push(
              <div>
                <b>{propName}:  </b>
                <span>{propValue}</span>
              </div>
          );
      }
      return listItemProps;
  },

  renderListItem(listItem, index) {
    var searchString = this.state.searchValue.toUpperCase();

    for(var prop in listItem){
      var propertyValue = listItem[prop].toString().toUpperCase()
        // true if the name contains the value of the searchString, else nothing is returned (returns undefined')
        if(propertyValue.indexOf(searchString) > -1){
          return (
            <ListGroupItem>
                    { this.renderListItemProperties(listItem) }
            </ListGroupItem>
          )
        }
      }
  },

  render: function() {
    console.log("Search Value: " + this.state.searchValue)
      return (
        <div>
          <FormControl type="text" placeholder="Enter Name" onChange={this.onSearchValueUpdate}/>
          <br/>
          <ListGroup className="filtered-list">
            {

            this.props.list.map(this.renderListItem)

            }
          </ListGroup>
        </div>
      );
  }

});

module.exports = FilteredList;
