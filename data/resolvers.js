import mongoose from 'mongoose';
import { Clientes } from './db';

// El resolver: Es la funcion que nos va a dar el resultado de las consultas

export const resolver = {
	Query: {
		getCliente: ({ id }) => {
			return new Cliente(id, clientesDB[id]);
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
		}
	}
};
