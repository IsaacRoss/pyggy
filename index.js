#!/usr/bin/env node

var fs = require('fs'), 
	program = require('commander'),
	pkg = require('./package.json'),
	reader = require('./lib/reader'),
	pyg = require('./lib/pyg');

program
	.version(pkg.version)
	.option('-f --file <path>', 'File to be converted')
	.option('-d --destination <path>', 'File to make')
	.parse(process.argv);


if(program.file && program.destination){
	var wstream = fs.createWriteStream(program.destination);
	reader.read(program.file, function(data){
		var sentences = pyg.getSentences(data.toString());
		sentences.forEach(function(s){
			var piggy = pyg.processSentence(s);
			wstream.write(piggy);
		})
		wstream.end();
		process.exit(0);
	})
}else{
	console.error('not how you use this. use --help for usage.');
	process.exit(1);
}