var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var familyMembers = [
		{ num: 1, textual: 'En' },
		{ num: 2, textual: 'Två' },
		{ num: 3, textual: 'Tre' },
		{ num: 4, textual: 'Fyra' },
		{ num: 5, textual: 'Fem' },
	]
	res.render('index', { familyMembers: familyMembers, title: 'Tinfors Fastigheter' });
});

router.post('/', function(req, res, next) {
	res.render('success', { title: 'Success' });
});

module.exports = router;
