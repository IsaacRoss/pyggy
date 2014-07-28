var pyg;

beforeEach(function(){
	pyg = require('../lib/pyg.js');
})


describe('pyg latin converter', function(){
	xit('should be able to convert a simple sentence into pig latin', function(done){
		var sentence = "can we convert simple sentence";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('ancay eway onvertcay implesay entencesay');
		done();
	});

	xit('should be able to convert a sentence that is tricky', function(done){
		var sentence = 'this sentence has a few odd words with different rules';
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('isthay entencesay ashay a ewfay odday ordsway ithway ifferentday ulesray');
		done();
	})

	xit('should leave punctuation where it finds it', function(done){
		var sentence = 'this is a really great thing to say.';
		var sentence2 = 'will this work?';
		var converted = pyg.processSentence(sentence);
		var converted2 = pyg.processSentence(sentence2);
		expect(converted).toBe('isthay isay a eallyray reatgay ingthay otay aysay.');
		expect(converted2).toBe('illway isthay orkway?');
		done();
	});

	xit('should convert sentence with numbers', function(done){
		var sentence = "this is 1 way to do it";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe("isthay isay 1 ayway otay oday itay");
		done();
	});

	xit('should leave any numbers alone', function(done){
		var sentence = "there are 365 of cases";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe("erethay areay 365 ofay asescay");
		done();
	})

	it('should work out numbers followed by commas', function(done){
		var sentence = "this is 2014, so act like it";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe("isthay isay 2014, osay actay ikelay itay");
		done();
	})


	xit('should leave any percentage numbers alone', function(done){
		var sentence = "there are 25% of cases";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe("erethay areay 25% ofay asescay");
		done();
	})

	xit('should convert sentence with commas', function(done){
		var sentence = "this, is not easy";
		var converted = pyg.processSentence(sentence);
		expect(converted).toBe('isthay, isay otnay easyay');
		done();
	})

	xit('should be able to split sentences from text', function(done){
		var text = "This is my first sentence. This is another one. This is also there."
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})

	xit('should not miss last sentence when there is no period', function(done){
		var text = "This is my first sentence. This is another one. This is also there"
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	})
	xit('should get sentences that end in ?', function(done){
		var text = "This is my first sentence. This is another one? This is also there."
		var split = pyg.getSentences(text);
		expect(split.length).toBe(3);
		done();
	});

	xit('should handle sentences with numbers', function(done){
		var text = "this is 1 of those things. there are 2 versions.";
		var split = pyg.getSentences(text);
		expect(split.length).toBe(2);
		done();
	});

	xit('should handle sentences with commas', function(done){
		var text = "this, is one sentence. this is another.";
		var split = pyg.getSentences(text);
		expect(split[0]).toBe('this, is one sentence.');
		done();
	});

});

describe('text reader', function(){
	xit('should read the file', function(done){
		var reader = require('../lib/reader');
		reader.read('./tests/test.txt', function(data){
			expect(data.toString()).toContain('one two three.');
			done();
		})
	});
});