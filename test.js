const mailgun = require("mailgun-js");
const DOMAIN = 'ql6625.live';
const mg = mailgun({apiKey: '09774f605413053c3ae4ab3a90994230-77985560-178da071', domain: DOMAIN});
const data = {
	from: 'postmaster@ql6625.live',
	to: 'tuanto002@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body,error);
});