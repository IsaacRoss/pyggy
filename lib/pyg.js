var startsWithVowel = function(word){
	return /^[a|e|i|o|u]/i.test(word);
}

var hasPunctuation = function(sentence){
	return /[\.\?!;]$/.test(sentence);
}

var makePyggy = function(word){
	return /(^th|^sh|[^0-9%])/i.exec(word);
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
			if(w === '/n'){
				return s.push(w);
			}
			if(w.length > 1){
				if(startsWithVowel(w)){
					w = w + suffix;
				}else{
					var result = makePyggy(w),
						extraction = '';
					if(result){
						if(result.input.slice(result.input.length - 1) == ','){
							if(/[\d]*,$/.test(w)){
								return s.push(w);
							}
							extraction = ',';
							console.log(result.input);
							w = w.substr(0, w.length -1);
						}
						w = w.substr(result[0].length, w.length) + result[0] + suffix + extraction;
					}
				}			
			}
			s.push(w);
		});
		return s.join(' ') + punctuation;
	},
	getSentences: function(text){
		var pattern = /[a-z\s\d,]+[\.!\?]/ig,
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