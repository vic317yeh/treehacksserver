module.exports = function(app,sendgrid) {

	app.get('/apiCall',function(req,res) {
		res.send('hi');
	});

	app.post('/reset',  function(req, res) {

            var email = new sendgrid.Email(JSON.parse(req.body.email));
            sendgrid.send(email, function(err, json) {
            if (err) { return console.error(err); }
               console.log(json);
              res.send('success');
           });
 	});
	
		var request = require('request');



function translate(lang,text,cb) {
	var watson = require('watson-developer-cloud-alpha');
	var transStr="mt-";
	transStr+=langMatch("english")+"-";
	transStr+=langMatch(lang);
	console.log(lang+" " +text);
	var machine_translation = watson.machine_translation({
		version:'v1',
		username: '62efd022-99c9-4c79-8b87-861aa3cc4e92',
		password: 'ohNMVz4TMdhT'
	});
	machine_translation.translate({from:'enus', to: langMatch(lang), text: text}, cb);
	};

function langMatch(lang) {
	switch(lang) {
		case "english":
			return "enus";
		case "portuguese":
			return "ptbr";
		case "spanish":
			return "eses";
		case "french":
			return "frfr";
		default:
			return "";
	}

}

	app.get('/translate',function(req,res) {
		var msg="";
		translate(req.query.lang,req.query.text, function (err, result) {
			if (err)
			msg=err
			else
			msg=result.translation;
			res.send(msg);
		}) ;


	});

}
