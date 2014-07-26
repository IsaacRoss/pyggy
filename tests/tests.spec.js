var pyg;

beforeEach(function(){
	pyg = require('../lib/pyg.js');
})


describe('pyg latin converter', function(){
	it('should be able to convert a simple sentence into pig latin', function(done){
		var sentence = "can we convert simple sentence";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('ancay eway onvertcay implesay entencesay');
		done();
	});

	it('should be able to convert a sentence that is tricky', function(done){
		var sentence = 'this sentence has a few odd words with different rules';
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('isthay entencesay ashay a ewfay odday ordsway ithway ifferentday ulesray');
		done();
	})

	it('should leave punctuation where it finds it', function(done){
		var sentence = 'this is a really great thing to say.';
		var sentence2 = 'will this work?';
		var converted = pyg.processSentence(sentence);
		var converted2 = pyg.processSentence(sentence2);
		expect(converted).toBe('isthay isay a eallyray reatgay ingthay otay aysay.');
		expect(converted2).toBe('illway isthay orkway?');
		done();
	})

	it('should be able to split sentences from text', function(done){
		var text = "This is my first sentence. This is another one. This is also there."
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})

	it('should not miss last sentence when there is no period', function(done){
		var text = "This is my first sentence. This is another one. This is also there"
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})
	it('should get sentences that end in ?', function(done){
		var text = "This is my first sentence. This is another one? This is also there."
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})
});

describe('text reader', function(){
	it('should read the file', function(done){
		var reader = require('../lib/reader');
		reader.read('./tests/test.txt', function(data){
			expect(data.toString()).toContain('something really cool');
			done();
		})
	});
});