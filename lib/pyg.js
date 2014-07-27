var startsWithVowel = function(word){
	return /^[a|e|i|o|u]/.test(word);
}

var hasPunctuation = function(sentence){
	return /[\.\?!;]$/.test(sentence);
}

var makePyggy = function(word){
	return /(^th|^sh|^\w)/.exec(word);
}


module.exports = {
	processSentence: function(sentence){
		var s = [],
		punctuation = '',
		suffix = 'ay';
		if(hasPunctuation(sentence)){
			punctuation = sentence.slice(sentence.length -1);
			sentence = sentence.substr(0, sentence.length -1);	
		};

		sentence.split(' ').map(function(w){
			if(w.length > 1){
				if(startsWithVowel(w)){
					w = w + suffix;
				}else{
					var result = makePyggy(w);
					if(result){
						w = w.substr(result[0].length, w.length) + result[0] + suffix;
					}
					
				}			
			}
			s.push(w);
		});
		return s.join(' ') + punctuation;
	},
	getSentences: function(text){
		var pattern = /[a-z\s]+[\.!\?]/ig,
			matchArray, 
			results = [],
			index;

		while((matchArray = pattern.exec(text)) !== null){
			results.push(matchArray[0]);
			index = pattern.lastIndex;
		}
		if(index < text.length){
			results.push(text.substr(index, text.length))
		}

		return results;
	}
}