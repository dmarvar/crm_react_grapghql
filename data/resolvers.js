import mongoose from 'mongoose';
import { Clientes } from './db';

// El resolver: Es la funcion que nos va a dar el resultado de las consultas

export const resolvers = {
	Query: {
		getClientes: () => {
			return Clientes.find({});
		},
		getCliente: (root, { id }) => {
			return Clientes.findById(id);
		}
	},
	Mutation: {
		crearCliente: (root, { input }) => {
			const nuevoCliente = new Clientes({
				nombre: input.nombre,
				apellido: input.apellido,
				empresa: input.empresa,
				emails: input.emails,
				tipo: input.tipo,
				pedidos: input.pedidos
			});
			nuevoCliente.id = nuevoCliente._id;

			return new Promise((resolve, object) => {
				nuevoCliente.save((error) => {
					if (error) rejects(error);
					else resolve(nuevoCliente);
				});
			});
		},
		actualizarCliente: (root, { input }) => {
			return new Promise((resolve, object) => {
				Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, cliente) => {
					if (error) rejects(error);
					else resolve(cliente);
				});
			});
		},
		eliminarCliente: (root, { id }) => {
			return new Promise((resolve, object) => {
				Clientes.findOneAndRemove({ _id: id }, (error) => {
					if (error) rejects(error);
					else resolve('Se eliminó correctamente');
				});
			});
		}
	}
};
