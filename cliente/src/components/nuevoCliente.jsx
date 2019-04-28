import React, { Component, Fragment } from 'react';
import { NUEVO_CLIENTE } from '../mutations';
import { Mutation } from 'react-apollo';

//PENDIENTE VALIDACION DE FORM

export default class NuevoCliente extends Component {
	state = {
		cliente: {
			nombre: '',
			apellido: '',
			empresa: '',
			tipo: '',
			edad: ''
		}
	};
	changeValue = (e) => {
		this.setState({ cliente: { ...this.state.cliente, [e.currentTarget.name]: e.currentTarget.value } });
	};
	submitForm = (crearCliente, e) => {
		e.preventDefault();
		const input = { ...this.state.cliente, edad: Number(this.state.cliente.edad) };
		crearCliente({ variables: { input } });
	};
	render() {
		const cliente = this.state;
		return (
			<Fragment>
				<h2 className="text-center">Nuevo Cliente</h2>
				<div className="row justify-content-center">
					<Mutation mutation={NUEVO_CLIENTE} onCompleted={() => this.props.history.push('/')}>
						{(crearCliente) => (
							<form className="col-md-8 m-3" onSubmit={this.submitForm.bind(this, crearCliente)}>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Nombre</label>
										<input
											type="text"
											className="form-control"
											placeholder="Nombre"
											name="nombre"
											onChange={this.changeValue}
											value={cliente.nombre}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Apellido</label>
										<input
											type="text"
											className="form-control"
											placeholder="Apellido"
											name="apellido"
											onChange={this.changeValue}
											value={cliente.apellido}
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Empresa</label>
										<input
											type="text"
											className="form-control"
											placeholder="Empresa"
											name="empresa"
											onChange={this.changeValue}
											value={cliente.empresa}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Email"
											name="email"
											onChange={this.changeValue}
											value={cliente.email}
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Edad</label>
										<input
											type="number"
											className="form-control"
											placeholder="Edad"
											name="edad"
											onChange={this.changeValue}
											value={cliente.edad}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Tipo Cliente</label>
										<select
											className="form-control"
											name="tipo"
											onChange={this.changeValue}
											value={cliente.tipo}
										>
											<option value="">Elegir...</option>
											<option value="PREMIUM">PREMIUM</option>
											<option value="BASICO">BÁSICO</option>
										</select>
									</div>
								</div>
								<button type="submit" className="btn btn-success float-right">
									Agregar Cliente
								</button>
							</form>
						)}
					</Mutation>
				</div>
			</Fragment>
		);
	}
}
