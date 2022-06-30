const mailgun = require("mailgun-js");
const DOMAIN = 'ql6625.live';
const mg = mailgun({apiKey: '588ff89e602bcbe9a9f3c90d2f35abec-77985560-58fd725d', domain: DOMAIN});
const data = {
	from: 'postmaster@ql6625.live',
	to: 'tuanto002@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body,error);
});