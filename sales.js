'use strict';

console.log('sale.js loaded');

for(var i = 0; i < places.length; i++) {
  var currentPlace = places[i];
  console.log(currentPlace.nameOfStore)
  var newListName = document.createElement('ul');
  var newText = document.createTextNode(currentPlace.nameOfStore);
  newListName.appendChild(newText);

  var whereIStickIt = document.getElementsByTagName('body')[0];
  whereIStickIt.appendChild(newListName);

  for(var j = 0; j < hours.length; j++) {
    console.log(currentPlace.cookiesEachHour[j]);
    
  }
}