'use strict';
console.log('saleinfo.js loaded');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//constructor function//

function Store(nameOfStore, minCustomer, maxCustomer, averageCookiesPerSale) {
  this.nameOfStore = nameOfStore;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookiesPerSale = averageCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesDaily = 0;
}

Store.prototype.calccustomersEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
  }
};

Store.prototype.calccookiesEachHour = function() {
  for(var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerSale));
  }
};

Store.prototype.calcTotalCookies = function() {
  for(var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalCookiesDaily += this.cookiesEachHour[i];
  }
};

Store.prototype.render = function() {
  this.calccustomersEachHour();
  this.calccookiesEachHour();
  this.calcTotalCookies();
  var newListName = document.createElement('tr');
  var newText = document.createTextNode(this.nameOfStore);
  newListName.appendChild(newText);

  for(var j = 0; j < hours.length; j++) {
    var newListItem = document.createElement('td');
    var newLineText = document.createTextNode(`Cookies: ${this.cookiesEachHour[j]}`);
    newListItem.appendChild(newLineText);
    newListName.appendChild(newListItem);
  }

  var totalCookies = document.createElement('td');
  var totalCookiesText = document.createTextNode(`Total cookies: ${this.totalCookiesDaily}`);
  totalCookies.appendChild(totalCookiesText);
  newListName.appendChild(totalCookies);

  var whereIStickIt = document.getElementsByTagName('table')[0];
  whereIStickIt.appendChild(newListName);
};

function createTable() {
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var locationHeadings = document.createElement('th');
  locationHeadings.textContent = 'Location';
  tableRow.appendChild(locationHeadings);

  for(var i = 0; i <hours.length; i++) {
    var tableHeading = document.createElement('th');
    tableHeading.textContent =hours[i];
    tableRow.appendChild(tableHeading);
  }
  table.appendChild(tableRow);
  document.body.appendChild(table);
}

createTable();

var storePike = new Store('1st and Pike', 23, 65, 6.3);
var seatleCenter = new Store('Seattle Center', 11, 38, 3.7);
var airport = new Store('SeaTac Airport', 3, 24, 1.2);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


var places = [storePike, seatleCenter, airport, capitolHill, alki];
console.log(places);

for(var i = 0; i < places.length; i++) {
  var currentPlace = places[i];
  currentPlace.render();
}


//////////////////////// ADD NEW STORES FROM FORM MADNESS ////////////////////////////
var fuckingform = document.getElementById('fuckingform');

function AnotherStore (store, minimum, maximum, average) {
  this.store = store;
  this.minimum = minimum;
  this.maximum = maximum;
  this.average = average;

}

function addStoreFromForm (event) {
  event.preventDefault();
  var store = event.target.store.value;
  var minimum = parseInt(event.target.minimum.value);
  var maximum = parseInt(event.target.maximum.value);
  var average = parseFloat(event.target.average.value);
  var newStore = new Store(store, minimum, maximum, average);
  places.push(newStore);
  newStore.render();
  fuckingform.reset();
}

fuckingform.addEventListener('submit', addStoreFromForm);


//var addNewStore = new AnotherStore(store, minimum, maximum, average);  ///////????up to line 83ish??////


//to fix my decimal numbers if i need to... eg 9.2 is actually 9.199999999987459874252 fuck all)

// function roundMyFloats(float) {
//   var decimalNumber = Math.round(float * 10)/10;
//   return decimalNumber;
//}