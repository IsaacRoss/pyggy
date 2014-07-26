var isVowel = function(char){
	char = char.toLowerCase();
	return char == "a" || char == "e" || char == "i" ||
		char == "o" || char == "u";
}

var hasPunctuation = function(sentence){
	return sentence.charAt(sentence.length -1) == '.' ||
		sentence.charAt(sentence.length -1) == '?' ||
		sentence.charAt(sentence.length -1) == '!';
}


module.exports = {
	processSentence: function(sentence){
		var s = [],
		punctuation = '';
		if(hasPunctuation(sentence)){
				punctuation = sentence.slice(sentence.length -1);
			sentence = sentence.substr(0, sentence.length -1);
		
		}
		sentence.split(' ').map(function(w){
			if(w.length > 1){
				if(isVowel(w[0])){
					w = w + "ay";
				}else if(w[0] + w[1] == "th" || w[0] + w[1] == "sh"){
					w = w.substr(2, w.length) + w[0] + w[1] + "ay";
				}else{
					w = w.substr(1, w.length) + w[0] + "ay";
				}
				
			}
			s.push(w);
		})
		return s.join(' ') + punctuation;
	},
	getSentences: function(text){
		var pattern = /[a-z\s]+[\.!\?]/ig,
			matchArray, 
			results = [],
			index;

		while((matchArray = pattern.exec(text)) !==null){
			results.push(matchArray[0]);
			index = pattern.lastIndex;
		}
		if(index < text.length){
			results.push(text.substr(index, text.length))
		}

		return results;
	}
}