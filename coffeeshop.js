// method to get value by selector
const $ = selector => document.querySelector(selector);

//function for directions
$('#my_directions').onclick = directions;
function directions() {
	$('#how_to').innerHTML = "Press the + button next to each cup size to add 1 coffee of that size.<br>Press the - button to remove 1 coffee from that size.<br>Press the clear button to reset all cup numbers to 0.";
}


//global objects and variables

const salesTaxRate = .0925;

let smallCup = new Object();
smallCup.price = 1.75;
smallCup.volume = 9;
smallCup.number = 0; 

let mediumCup = new Object();
mediumCup.price = 1.9;
mediumCup.volume = 12;
mediumCup.number = 0; 

let largeCup = new Object();
largeCup.price = 2.00;
largeCup.volume = 15;
largeCup.number = 0; 

//functions for small cup buttons

$('#add_small').onclick = addSmallCup;
$('#remove_small').onclick = removeSmallCup;

function addSmallCup() {
	smallCup.number += 1; 
	$('#small_number').value = smallCup.number;
	total();

}

function removeSmallCup() {
	//if remove button is clicked and smallCup.number >= 1
	if (smallCup.number >= 1) {
	smallCup.number -= 1; 
	$('#small_number').value = smallCup.number;
	total();

	}
}


//functions for medium cup buttons

$('#add_medium').onclick = addMediumCup;
$('#remove_medium').onclick = removeMediumCup;

function addMediumCup() {
	mediumCup.number += 1; 
	$('#medium_number').value = mediumCup.number;
	total();

}

function removeMediumCup() {
	//if remove button is clicked and mediumCup.number >= 1
	if (mediumCup.number >= 1) {
	mediumCup.number -= 1; 
	$('#medium_number').value = mediumCup.number;
	total();

	}
}

//functions for large cup buttons

$('#add_large').onclick = addLargeCup;
$('#remove_large').onclick = removeLargeCup;

function addLargeCup() {
	largeCup.number += 1; 
	$('#large_number').value = largeCup.number;
	total();

}

function removeLargeCup() {
	//if remove button is clicked and largeCup.number >= 1
	if (largeCup.number >= 1) {
	largeCup.number -= 1; 
	$('#large_number').value = largeCup.number;
	total();

	}
}

//function clear
$('#clear_button').onclick = clearAll;


function clearAll() {
	smallCup.number = 0;
	mediumCup.number = 0;
	largeCup.number = 0; 
	$('#small_number').value = 0;
	$('#medium_number').value = 0;
	$('#large_number').value = 0;
	total();

}

//function for all cups

function total() {
//sum of price
	let sumPriceVariable = smallCup.price * smallCup.number + 
			mediumCup.price * mediumCup.number + 
			largeCup.price * largeCup.number;
	$('#sum_price').value = "$" + sumPriceVariable.toFixed(2);
//tax
	let priceTax = (sumPriceVariable * salesTaxRate);
	$('#price_tax').value = "$" + priceTax.toFixed(2);
//total price including tax
	let priceTotalVariable = (sumPriceVariable + sumPriceVariable * salesTaxRate).toFixed(2);
	$('#price_total').value = "$" + priceTotalVariable;
//total volume
	let volumeTotalVariable = smallCup.volume * smallCup.number + 
			mediumCup.volume * mediumCup.number + 
			largeCup.volume * largeCup.number;
			$('#volume_total').value = volumeTotalVariable + " oz";
}

//function order
$('#complete_order').onclick = order;
function order() {
	$('#order_message').innerHTML = "Thank you for your order.";
}
