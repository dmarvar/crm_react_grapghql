import gql from 'graphql-tag';

//  Execute query
export const CLIENTES_QUERY = gql`
	{
		getClientes {
			id
			nombre
			apellido
			empresa
		}
	}
`;
