'use strict';

console.log('sale.js loaded');

for(var i = 0; i < places.length; i++) {
  console.log(places[i].nameOfStore)
  var newHeader = document.createElement('h2');
  var newText = document.createTextNode(places[i].nameOfStore);
  newHeader.appendChild(newText);

  var whereIStickIt = document.getElementsByTagName('body')[0];

  whereIStickIt.appendChild(newHeader);

}



