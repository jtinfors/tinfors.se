var express = require('express');
var router = express.Router();
var sendit = require('../send_email_custom');

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
	sendit(req.body, function(err, sendgridResponse) {
		if (err) console.log('Error when sending email => ', err);
		res.render('result', {
			title: err ? 'Just nu har vi problem med formuläret. Var god försök senare' : 'Tack för din anmälan! Vi hör av oss!'
		});
	});
});

module.exports = router;
