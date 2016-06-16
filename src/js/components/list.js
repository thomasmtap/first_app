/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');



var ListItem = React.createClass({
  propTypes: {
    value: React.PropTypes.string
  },
  render: function(){
    return (<li>{this.props.value}</li>);
   }
 });
var List = React.createClass({
  getInitialState: function(){
    return{item : AppStore.sendArray()};
  },
  componentDidMount: function() {
    AppStore.addListener(this.onItemChange);
  },
  componentWillUnmount: function() {
    AppStore.removeListener(this.onItemChange);
  },
  onItemChange: function(){
    this.setState({item: AppStore.sendArray()});
  },
  render: function() {
    var createItem = function(item) {
      return ( <ListItem value={item}></ListItem> );
    };
    return <ul>{this.state.item.map(createItem)}</ul>;
  }
});






module.exports = List;
