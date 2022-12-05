var sendGrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

var createContent = function(data) {
	return `
Namn: ${data.firstname} ${data.lastname}\n
Gatuaddress: ${data.streetaddress}\n
Postnummer: ${data.zipcode}\n
Stad: ${data.city}\n
Telefonnummer: ${data.phonenumber}\n
E-post: ${data.email}\n
Ålder: ${data.age}\n
Lön: ${data.salary}\n
Antal sökande: ${data.number_family_members} varav ${data.number_kids} är barn\n
Önskat antal rum: ${data.number_rooms}\n
Önskat inflyttningsdatum: ${data.move_in_date}\n
\n
${data.other}
`
}

var sendit = function(body, callback) {
	var request = sendGrid.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: {
		personalizations: [
		  {
			cc: [ { email: body.email } ],
			to: [ { email: 'thomas@tinfors.se', }, ],
			subject: `Intresseanmälan från ${body.firstname} ${body.lastname}`,
		  },
		],
		from: { email: body.email, },
		content: [
		  {
			type: 'text/plain',
			value: createContent(body)
		  },
		],
	  },
	});

	sendGrid.API(request, callback);
}

module.exports = sendit;
