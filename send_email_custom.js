var sendGrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

var createContent = function(data) {
	return `
Namn: ${data.firstname} ${data.lastname}
Gatuaddress: ${data.streetaddress}
Postnummer: ${data.zipcode}
Stad: ${data.city}
Telefonnummer: ${data.phonenumber}
E-post: ${data.email}
Ålder: ${data.age}
Lön: ${data.salary}
Antal sökande: ${data.number_family_members} varav ${data.number_kids} är barn
Önskat antal rum: ${data.number_rooms}
Önskat inflyttningsdatum: ${data.move_in_date}

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
			to: [ { email: 'jens.tinfors@gmail.com', }, ],
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
