var express = require('express');
var router = express.Router();
// var sendEmail = require('../send_email');
var sendit = require('../send_email_custom');
var isEmpty = require('lodash.isempty');
var requiredFields = ['firstname', 'lastname', 'streetaddress', 'zipcode', 'city', 'phonenumber', 'email', 'age', 'salary', 'number_family_members', 'number_kids', 'number_rooms', 'move_in_date'];

var kidsCounter = [
	{ num: 0, textual: 'Inga' },
	{ num: 1, textual: 'Ett' },
	{ num: 2, textual: 'Två' },
	{ num: 3, textual: 'Tre' },
	{ num: 4, textual: 'Fyra' },
];

var familyCounter = [
	{ num: 1, textual: 'En' },
	{ num: 2, textual: 'Två' },
	{ num: 3, textual: 'Tre' },
	{ num: 4, textual: 'Fyra' },
	{ num: 5, textual: 'Fem' },
];

var roomCounter = [
	{ num: 1, textual: 'Ett' },
	{ num: 2, textual: 'Två' },
	{ num: 3, textual: 'Tre' },
	{ num: 4, textual: 'Fyra' },
	{ num: 5, textual: 'Fem' },
];

var fieldMapper = {
	firstname: 'Förnamn',
	lastname: 'Efternamn',
	streetaddress: 'Gatuaddress',
	zipcode: 'postnummer',
	city: 'Stad',
	phonenumber: 'Telefonnummer',
	email: 'Telefonnummer',
	age: 'Ålder',
	salary: 'Årsinkomst',
}

var humanize = function(field) {
	return fieldMapper[field];
}

router.get('/', function(req, res, next) {
	res.render('index', {
		prefilledFields: {
			firstname: '',
			lastname: '',
			streetaddress: '',
			zipcode: '',
			city: '',
			phonenumber: '',
			email: '',
			age: '',
			salary: '',

		},
		familyCounter: familyCounter,
		kidsCounter: kidsCounter,
		roomCounter: roomCounter,
		title: 'Tinfors Fastigheter'
	});
});

router.post('/', function(req, res, next) {

	var missingFields = requiredFields.filter(field => isEmpty(req.body[field]));
	if (!isEmpty(missingFields)) {
		var str = `Det vore bra om du även fyllde i dessa fält: ${missingFields.map(humanize).join(', ')}`
		return res.render('index', {
			prefilledFields: req.body,
			missingFieldsStr: str,
			familyCounter: familyCounter,
			kidsCounter: kidsCounter,
			roomCounter: roomCounter,
			title: 'Tinfors Fastigheter',
			missingFields
		});
	}

	return res.render('result', { title: 'whatever', status: 333 });

	sendit(req.body, function(err, sendgridResponse) {
		res.render('result', {
			title: err ? 'Just nu har vi problem med formuläret. Var god försök senare' : 'Tack för din anmälan! Vi hör av oss!',
			status: sendgridResponse.statusCode
		});
	});
});

module.exports = router;
