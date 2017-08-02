/******************/
/* Business Logic*/
/******************/
/* 1. Constructor used to create instances of Contact type */
function Contact(first, last) {
	this.firstName = first;
	this.lastName = last;
	this.addresses = [];
}

/* 2. Constructor to be pushed to .addresses property of Contact object */
function Address(street, city, state) {
	this.street = street;
	this.city = city;
	this.state = state;
}

/* 3. Contact Prototype fullName method */
Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

/* 4. Address Prototype fullAddress method */
Address.prototype.fullAddress = function() {
	return this.street + ", " + this.city + ", " + this.state;
}

/* 5. Reset input fields function preprocessed before document ready */
function resetFields() {
	$('input#new-first-name').val("");
	$('input#new-last-name').val("");
	$("input.new-street").val("");
	$("input.new-city").val("");
	$("input.new-state").val("");
}

/******************/
/* UI Logic */
/******************/
$(document).ready(function() {
	/* Another address button */
	$('#add-address').click(function() {
		$('#new-addresses').append('<div class="new-address">' + 
															  	'<div class="form-group">' +
															  		'<label for="new-street">Street</label>' +
															  		'<input type="text" class="form-control new-street">' +
															  	'</div>'	+
															  	'<div class="form-group">' +
																		'<label for="new-city">City</label>' +
																		'<input type="text" class="form-control new-city">' +
																	'</div>' +
																	'<div class="form-group">' +
																		'<label for="new-state">State</label>' +
																		'<input type="text" class="form-control new-state">' +
																	'</div>' +
															 '</div>');
	});

	/* Form Submit */
	$('form#new-contact').submit(function(event) {
		event.preventDefault();

		var inputtedFirstName = $('input#new-first-name').val();
		var inputtedLastName = $('input#new-last-name').val();
		console.log(inputtedFirstName);
		console.log(inputtedLastName);

		var newContact = new Contact(inputtedFirstName, inputtedLastName);
		console.log("newContact is " + newContact);

		/* .each Loop for addresses */
		$('.new-address').each(function() {
			var inputtedStreet = $(this).find('input.new-street').val();
			var inputtedCity = $(this).find('input.new-city').val();
			var inputtedState = $(this).find('input.new-state').val();
			var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
			newContact.addresses.push(newAddress);
		});

		// $('ul#contacts').append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

		$('ul#contacts').append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

		$('.contact').last().click(function() {
			$('#show-contact').show();
			$('#show-contact h2').text(newContact.firstName);
			$('.first-name').text(newContact.firstName);
			$('.last-name').text(newContact.lastName);
			$('ul#addresses').text("");
			newContact.addresses.forEach(function(address) {
				// $('ul#addresses').append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
				$('ul#addresses').append("<li>" +  "*" + address.fullAddress() + "</li>");
			});
		});

		resetFields();
	});
});
