var express = require('express');
var router = express.Router();
var sendEmail = require('../send_email');

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

router.get('/', function(req, res, next) {
	res.render('index', {
		familyCounter: familyCounter,
		kidsCounter: kidsCounter,
		roomCounter: roomCounter,
		title: 'Tinfors Fastigheter'
	});
});

router.post('/', function(req, res, next) {
	console.log('Attempting to send email with this body => ', req.body);

	sendEmail(req.body, function(err, res) {
		console.log('status from sendGrid => ', res.statusCode);
		console.log('body from sendGrid => ', res.body);
		console.log('headers from sendGrid => ', res.headers);
		res.render('result', {
			title: err ? 'Fail..' : 'Success!',
			status: res.statusCode,
			body: res.body
		});
	});
});

module.exports = router;
