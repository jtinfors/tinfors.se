var helper = require('sendgrid').mail;
var from_email = new helper.Email('no-reply@tinfors.se');
var to_email = new helper.Email('jens.tinfors@gmail.com');
var subject = 'Intresseanmälan';
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var sendEmail = function(body, callback) {
	var content = new helper.Content('text/plain', 'Hello, Email!');
	var mail = new helper.Mail(from_email, subject, to_email, content);

	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, callback);
}

module.exports = sendEmail;
