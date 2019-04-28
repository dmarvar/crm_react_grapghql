import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Clientes from './components/clientes';
import EditarCliente from './components/editarCliente';
import NuevoCliente from './components/nuevoCliente';

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	onError: ({ networkError, graphqlErrors }) => {
		console.log('graphQlError', graphqlErrors);
		console.log('networkErrors', networkError);
	}
});

function App() {
	return (
		<div>
			<ApolloProvider client={client}>
				<Router>
					<Fragment>
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Clientes} />
								<Route exact path="/cliente/editar/:id" component={EditarCliente} />
								<Route exact path="/cliente/nuevo" component={NuevoCliente} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
