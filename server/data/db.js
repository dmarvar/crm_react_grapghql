import mongoose from 'mongoose';

// Vamos a crear una conexion y para eso es el promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', { useNewUrlParser: true }).then((err) => {
	console.log('Conexion exitosa a la base de datos mongo');
});

// Definimos schema de clientes

const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	empresa: String,
	emails: Array,
	tipo: String,
	pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };
