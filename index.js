import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
	res.send('Hola Mundo');
});

app.use(
	'/graphql',
	graphqlHTTP({
		// El esquema que se va a utilizar
		schema: schema,
		// Utilizar Graphical
		graphiql: true,
		customFormatErrorFn: (error) => ({
			message: error.message,
			locations: error.locations,
			stack: error.stack ? error.stack.split('\n') : [],
			path: error.path
		})
	})
);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
