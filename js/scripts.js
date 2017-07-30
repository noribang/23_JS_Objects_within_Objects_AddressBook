/******************/
/* Business Logic*/
/******************/
/* 1. Constructor used to create instances of Contact type */
function Contact(first, last) {
	this.firstName = first;
	this.lastName = last;
	this.addresses = [];
}
/* Contact prototype method */
Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

/* 2. Constructor to be pushed to .addresses property of Contact object */
function Address(street, city, state) {
	this.street = street;
	this.city = city;
	this.state = state;
}

/******************/
/* UI Logic */
/******************/
$(document).ready(function() {
	$('form#new-contact').submit(function(event) {
		event.preventDefault();

		var inputtedFirstName = $('input#new-first-name').val();
		var inputtedLastName = $('input#new-last-name').val();
		console.log(inputtedFirstName);
		console.log(inputtedLastName);

		var newContact = new Contact(inputtedFirstName, inputtedLastName);
		console.log("newContact is " + newContact);

		// $('ul#contacts').append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

		$('ul#contacts').append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

		$('input#new-first-name').val("");
		$('input#new-last-name').val("");

		$('.contact').last().click(function() {
			$('#show-contact').show();
			$('#show-contact h2').text(newContact.firstName);
			$('.first-name').text(newContact.firstName);
			$('.last-name').text(newContact.lastName);
		});
	});
});
