var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');



var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  sendArray: function(){
    return _tweets;
  }
});

_tweets = [];
function textSubmit(e){
var strArray = e.item.split(" ");
var strLen = strArray.length;
var myFlag = 1;
for(var i = 0; i< strLen ; i++)
{
  var textCheck = strArray[i].toLowerCase();
  console.log(textCheck);
  if(textCheck.trim() == 'shit' || textCheck.trim() == 'fuck' || textCheck.trim() == 'fuckshit' || textCheck.trim() == 'shitfuck' || textCheck.trim() == 'fucking' || textCheck.trim() == 'shitting')
  {
      myFlag = 0;
  }
}

//
// for(var i = 0; i< strLen ; i++)
// {
//   console.log(strArray[i]);
// var textCheck = strArray[i].toLowerCase();
// if(textCheck.trim() == 'shit' && textCheck.trim() == 'fuck' && textCheck.trim() == 'fuckshit' && textCheck.trim() == 'shitfuck' && textCheck.trim() == 'fucking' && textCheck.trim() == 'shitting')
//   {
//     alert("invalid vocabulary");
//     return;
//   }
//   else {
//
//
if(myFlag == 1)
  {
  for(var i = 0; i< strLen ; i++)
  {


        var firstItem = strArray[i].charAt(0);
        if(firstItem === '#') {
          var mydiv = document.getElementById('main2');
          var aTag = document.createElement('a');
          var divTag = document.createElement('div');
          aTag.setAttribute('href',"yourlink.htm");
          aTag.innerHTML = strArray[i];
          mydiv.appendChild(aTag);
          mydiv.appendChild(divTag);


      }
    }
    _tweets.push(e.item);
  }
else {
  alert("invlaid vocabulary");
}
}

AppDispatcher.register(function(payload){
  if(payload.action.actionType === "SUBMIT_ITEM"){

      textSubmit(payload.action);
      AppStore.emitChange();
  }
  console.log(payload);
  return true;
});

module.exports = AppStore;
