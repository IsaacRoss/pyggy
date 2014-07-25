var program = require('commander'),
	pkg = require('./package.json');

program
	.version(pkg.version)
	.option('-f --file <path>', 'File to be converted')
	.parse(process.argv);

console.log(program.file);