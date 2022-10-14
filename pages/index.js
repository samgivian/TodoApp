import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Addtask from "../comps/Addtask";

import { useQuery,ApolloClient, InMemoryCache, ApolloProvider, gql,useMutation,from,HttpLink } from '@apollo/client'

import { onError } from "@apollo/client/link/error";

/*
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
*/
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })
  
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

const GET_LOCATIONS = gql`
query Posts {
  posts {
    Job
  }
}
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return data.posts.map(({ Job}) => (
      <div >
        <h3 style ={{color:"black"}}>{Job}</h3>
      
      </div>
    ));
}

const ADD_TODO = gql`
mutation AddTodo ($text: String!) { 
  addTodo(text: $text)
}
`;
//  <button OnClick ={addTodo({text:"Asdad"})}>Firebase</button>
function AddTodo() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  return (
 
   <div>
   <form
     onSubmit={e => {
       e.preventDefault();
       addTodo({ variables: { text:  input.value} });
       input.value = '';
     }}
   >
     <input
       ref={node => {
         input = node;
       }}
     />
     <button type="submit">Add Todo</button>
   </form>
 </div>
  );
}
 
export default function Home() {
  return (
    <div>
    <ApolloProvider client={client}>
      <DisplayLocations></DisplayLocations>
      <AddTodo></AddTodo>
    
    </ApolloProvider>
   
    <Addtask text="Hello Saman" />
<div className={styles.container}>
      <h1>asdasd</h1>
    </div>
    <Link href="/about"><a>About</a></Link>
    </div>
    
  )
}
