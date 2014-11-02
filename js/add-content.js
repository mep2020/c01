var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total	 = price * quantity;

var el = document.getElementById('cost');
el.textContent = 'Cost is $' + total;
