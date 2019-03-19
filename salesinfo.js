'use strict';
console.log('saleinfo.js loaded');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

var storePike = {
  nameOfStore: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesDaily: 0,

  calccustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  calccookiesEachHour: function() {
    for(var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerSale));
    }
  },
  calcTotalCookies: function() {
    for(var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalCookiesDaily += this.cookiesEachHour[i];
    }
  },
};

storePike.calccustomersEachHour();
storePike.calccookiesEachHour();
storePike.calcTotalCookies();
console.log(storePike);

var places = [storePike];

// var places = [storePike, airport, seatleCenter, capitolHill, alki];




//to fix my decimal numbers if i need to... eg 9.2 is actually 9.199999999987459874252 fuck all)
// function roundMyFloats(float) {
//   var decimalNumber = Math.round(float * 10)/10;
//   return decimalNumber;
// }

