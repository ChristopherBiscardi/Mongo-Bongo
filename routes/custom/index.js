
module.exports = function (app,db,config) {
	config.find({}).forEach(function(){
		console.log('inhere');
		//require(path)(app, db)
	})

}