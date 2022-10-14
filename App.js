
const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const {ApolloServer,gql} = require("apollo-server-express")
const serviceAccount = require("./todoapp-94338-firebase-adminsdk-70r6a-19846a8317.json")
const admin = require("firebase-admin")


admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:"https://todoapp-94338-default-rtdb.firebaseio.com"
})




const typeDefs = gql`
type Post{
    Job:String
}
type Query{
    posts:[Post]
}


type Mutation {
  addTodo(text:String):String
}
`;
/*
mutation AddNewPet ($name: String!, $petType: PetType) { 
    addPet(name: $name, petType: $petType) { # mutation name
      name
      petType
    }
  }

  type Mutation {
    addPet (name: String!, petType: PetType): AddPetResult!
  }
  */
const resolvers = {
    Query: {
        posts: () =>
        admin
          .database()
          .ref("Tasks")
          .once("value")
          .then(snap => snap.val())
          .then(val => Object.keys(val).map(key => val[key]))
    },
    Mutation: {
      addTodo: async (root, args, context) => {
          return args.text
        }
      }
  };


const app = express();
async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(4000, () => {
    console.log(`Server is listening on port ${4000}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);

