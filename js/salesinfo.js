'use strict';
console.log('saleinfo.js loaded');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//constructor function for orginal stores//

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

///render to table shit///
Store.prototype.render = function() {
  this.calccustomersEachHour();
  this.calccookiesEachHour();
  this.calcTotalCookies();
  //this.totalCookiesEachHour();
  var newListName = document.createElement('tr');
  var nameInTd = document.createElement('td');
  var newText = document.createTextNode(this.nameOfStore);
  nameInTd.appendChild(newText);
  newListName.appendChild(nameInTd);


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

////// total cookie row ///////////
function TotalRow(){
  this.rowData = [];
}

TotalRow.prototype.totalCookiesEachHour = function() {
  var hourlyCookies = ['TOTAL'];
  for(var i =0; i < hours.length; i++) {
    var cookiesNao = 0;
    for(var j = 0; j < places.length; j++ ) {
      cookiesNao += places[j].cookiesEachHour[i];
    } 
    hourlyCookies.push(cookiesNao);
  }
  this.rowData = hourlyCookies;
}; 

TotalRow.prototype.render = function() {
  this.totalCookiesEachHour();
  var finalRow = document.createElement('tr');
  finalRow.classList.add('bottom');
  
  this.rowData.forEach(function(item){
    var finalRowData = document.createElement('td');
    var finalRowTextbits = document.createTextNode(item);
    finalRowData.appendChild(finalRowTextbits);
    finalRow.appendChild(finalRowData);
  });

  var whereIStickIt = document.getElementsByTagName('table')[0];
  whereIStickIt.appendChild(finalRow)

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

var totalRow= new TotalRow();

var places = [storePike, seatleCenter, airport, capitolHill, alki];
console.log(places);


for(var i = 0; i < places.length; i++) {
  var currentPlace = places[i];
  currentPlace.render();
}

totalRow.render();




//////////////////////// ADD NEW STORES FROM FORM MADNESS ////////////////////////////

var fuckingform = document.getElementById('fuckingform');

function addStoreFromForm (event) {
  event.preventDefault();
  var store = event.target.store.value;
  var minimum = parseInt(event.target.minimum.value);
  var maximum = parseInt(event.target.maximum.value);
  var average = parseFloat(event.target.average.value);
  if (!store || store === '') {
    alert('Store cannot be blank');
    return false;
  }
  if (isNaN(minimum)) {
    alert('Minimum must be a Number');
    return false;
  }
  if (isNaN(maximum)) {
    alert('Maximum must be a Number');
    return false;
  }
  if (isNaN(average)) {
    alert('Average must be a Number');
    return false;
  }
  if (minimum > maximum) {
    alert('Minimum MUST be smaller than Maximum');
    return false;
  }
  var newStore = new Store(store, minimum, maximum, average);
  places.push(newStore);
  var findbottom = document.getElementsByClassName('bottom')[0];
  findbottom.parentNode.removeChild(findbottom);
  newStore.render();
  totalRow.render();
  fuckingform.reset();
}

fuckingform.addEventListener('submit', addStoreFromForm);