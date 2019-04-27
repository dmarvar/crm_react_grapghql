import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

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
				<h1>Hola Mundo</h1>
			</ApolloProvider>
		</div>
	);
}

export default App;