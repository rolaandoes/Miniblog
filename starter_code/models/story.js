var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PhraseSchema = new Schema({
	author:String,
	text:String
});

var Phrase = mongoose.model('stories', PhraseSchema);
module.exports = Phrase;
