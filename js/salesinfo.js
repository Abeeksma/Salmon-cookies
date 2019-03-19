'use strict';
console.log('saleinfo.js loaded');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//constructor function//

function Store(nameOfStore, minCustomer, maxCustomer, averageCookiesPerSale) {
  this.nameOfStore = nameOfStore,
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.averageCookiesPerSale = averageCookiesPerSale,
  this.customersEachHour = [],
  this.cookiesEachHour = [],
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

Store.prototype. calcTotalCookies = function() {
  for(var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalCookiesDaily += this.cookiesEachHour[i];
  }
};

var storePike = new Store('1st and Pike', 23, 65, 6.3);
var seatleCenter = new Store('Seattle Center', 11, 38, 3.7);
var airport = new Store('SeaTac Airport', 3, 24, 1.2);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


var places = [storePike, seatleCenter, airport, capitolHill, alki];
console.log(places);


//to fix my decimal numbers if i need to... eg 9.2 is actually 9.199999999987459874252 fuck all)

// function roundMyFloats(float) {
//   var decimalNumber = Math.round(float * 10)/10;
//   return decimalNumber;
// }