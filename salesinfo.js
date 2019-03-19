'use strict';
console.log('saleinfo.js loaded');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


//***************************************************storePike (THE FIRST STORE) **************************************/
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

//************************************************* seatleCenter (THE SECOND STORE)*****************************************
var seatleCenter = {
  nameOfStore: 'Seatle Center',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookiesPerSale: 3.7,
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
seatleCenter.calccustomersEachHour();
seatleCenter.calccookiesEachHour();
seatleCenter.calcTotalCookies();

//****************************************************airport (THE THIRD STORE) *****************************************/
var airport = {
  nameOfStore: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookiesPerSale: 1.2,
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
airport.calccustomersEachHour();
airport.calccookiesEachHour();
airport.calcTotalCookies();

//*******************************************************capitolHill (THE FOURTH PLACE) *****************************************/

var capitolHill = {
  nameOfStore: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookiesPerSale: 2.3,
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
capitolHill.calccustomersEachHour();
capitolHill.calccookiesEachHour();
capitolHill.calcTotalCookies();

//**************************************************** alki (THE FIFTH STORE)*********************************************/

var alki = {
  nameOfStore: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookiesPerSale: 4.6,
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
alki.calccustomersEachHour();
alki.calccookiesEachHour();
alki.calcTotalCookies();

var places = [storePike, seatleCenter, airport, capitolHill, alki];

// var places = [storePike, airport, seatleCenter, capitolHill, alki];




//to fix my decimal numbers if i need to... eg 9.2 is actually 9.199999999987459874252 fuck all)
// function roundMyFloats(float) {
//   var decimalNumber = Math.round(float * 10)/10;
//   return decimalNumber;
// }

