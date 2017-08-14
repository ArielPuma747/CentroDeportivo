// Dependencies
var ClientCtrl = require('./controllers/usuarios.js');

// Opens App Routes
module.exports = function(express,app) {

// HOME
app.get('/', function(req, res, next) {
  res.sendfile('./index.html');
});

//API
var api = express.Router();
	//Clients
	api.route('/usuarios')  
	  .get(ClientCtrl.findAll)
	  .post(ClientCtrl.add);
	api.route('/usuarios/:id')  
	  .get(ClientCtrl.findById)
	  .put(ClientCtrl.update)
	  .delete(ClientCtrl.delete);
app.use('/', api);  

};  