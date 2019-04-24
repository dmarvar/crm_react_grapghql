import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const root = resolvers;

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
