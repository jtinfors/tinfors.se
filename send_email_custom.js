var sendGrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

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
			value: JSON.stringify(body),
		  },
		],
	  },
	});

	sendGrid.API(request, callback);
}

module.exports = sendit;
