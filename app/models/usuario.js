var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usuarioSchema = new Schema({  
  nombre:    { type: String, required: true },
  apellido:    { type: String, required: true },
  carnet:    { type: String, required: true },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
usuarioSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Usuario', usuarioSchema);  