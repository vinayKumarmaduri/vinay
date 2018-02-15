var mongoose = require('mongoose');  
var User = new mongoose.Schema({
	id: { type: String },
    name: { type: String },
	date:date,
  rating: number,
  language:{ type: String },
});

mongoose.model('User', User);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected');