var fs = require('fs');

module.exports = {
	read: function(path, callback){
		fs.readFile(path, function(err, data){
			if(err){
				throw err;
			}
			callback(data);
		})
	}
}