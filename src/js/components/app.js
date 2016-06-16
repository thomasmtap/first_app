/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


  var App = React.createClass({
    getInitialState: function(){
      return{item: ''};
    },
    textSubmit:function(){
      AppActions.submitItem(this.state.item);
    },
    onChange: function(e){
      this.setState({item: e.target.value});
    },
    render: function(){
      return(
        <div>
          <input type="text" ref="item" onChange={this.onChange} onDoubleClick={this.textSubmit} value={this.state.item}/>
          <input type="button" onClick={this.textSubmit} value="tweet"/>
          </div>
      );
    }
  });


module.exports = App;
