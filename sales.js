'use strict';

console.log('sale.js loaded');

for(var i = 0; i < places.length; i++) {
  var currentPlace = places[i];
  console.log(currentPlace.nameOfStore);
  var newListName = document.createElement('ul');
  var newText = document.createTextNode(currentPlace.nameOfStore);
  newListName.appendChild(newText);

  for(var j = 0; j < hours.length; j++) {
    console.log(currentPlace.cookiesEachHour[j]);
    var newListItem = document.createElement('li');
    var newLineText = document.createTextNode(`${hours[j]}: cookies: ${currentPlace.cookiesEachHour[j]}`);
    newListItem.appendChild(newLineText);
    newListName.appendChild(newListItem);
  }

  var totalCookies = document.createElement('li');
  var totalCookiesText = document.createTextNode(`Total cookies: ${currentPlace.totalCookiesDaily}`);
  totalCookies.appendChild(totalCookiesText);
  newListName.appendChild(totalCookies);

  var whereIStickIt = document.getElementsByTagName('body')[0];
  whereIStickIt.appendChild(newListName);

}