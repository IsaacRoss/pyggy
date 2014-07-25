describe('pyg latin converter', function(){
	it('should be able to convert a sentence into pig latin', function(done){
		var pyg = require('../lib/pyg');
		var sentence = "I would love this to be converted";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('I ouldway ovelay histay otay ebay onvertedcay');
		done();
	});

	it('should be able to split sentences from text', function(done){
		var pyg = require('../lib/pyg');
		var text = "This is my first sentence. This is another one. This is also there."
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})

	it('should not miss last sentence when there is no period', function(done){
		var pyg = require('../lib/pyg');
		var text = "This is my first sentence. This is another one. This is also there"
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})
});

describe('text reader', function(){
	it('should be able to read text from a file', function(done){
		var reader = require('../lib/reader');
		var text = reader.read('./tests/test.txt', function(data){
			console.log(data.tostring());
			expect(data.toString().toContain('Across'))
			done();
		});
		
	})
})