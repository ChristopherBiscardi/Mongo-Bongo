module.exports = function(app,db,config){
	app.get('/', function(req, res){
		res.render('index',{
			title: 'Express CMS'
		});
	});
	require('./custom/index')(app,db,config);
};