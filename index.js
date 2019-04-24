import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// El resolver: Es la funcion que nos va a dar el resultado de las consultas

const root = { hola: () => "Hola Mundo desde GraphQL" };

app.use(
  "/graphql",
  graphqlHTTP({
    // El esquema que se va a utilizar
    schema,
    // Resolver se pasa como rootValue
    rootValue: root,
    // Utilizar Graphical
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
