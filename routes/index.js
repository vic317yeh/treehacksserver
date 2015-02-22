module.exports = function(app) {

	app.get('/apiCall',function(req,res) {
		res.send('hi');
	})
	
}