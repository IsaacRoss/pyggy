module.exports = {
	processSentence: function(sentence){
		var s = [];
		sentence.split(' ').map(function(w){
			if(w.length > 1){
				w = w.substr(1, w.length) + w[0] + "ay";
			}
			s.push(w);
		})
		return s.join(' ');
	},
	getSentences: function(text){
		var i = 0,
			len = text.length,
			results = [];

		while(text.indexOf('.') != -1){
			var sentence = text.substr(0, text.indexOf('.'));
			text = text.substr(sentence.length + 1, text.length).trim();
			results.push(sentence);
		}
		if(text.length > 0){
			results.push(text);
		}

		return results;
	}
}