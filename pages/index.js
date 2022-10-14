import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { useQuery,ApolloClient, InMemoryCache, ApolloProvider, gql,useMutation } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
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
mutation AddNewPet ($name: String!) { 
  addPet(name: $name ) { # mutation name
    name
  }
}
`;

function AddTodo() {
  let input;
  const [AddNewPet, { data, loading, error }] = useMutation(ADD_TODO);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  return (
    <button OnClick ={()=>AddNewPet("Asd","Asdad")}>adasd</button>
  );
}

export default function Home() {
  return (
    <div>
    <ApolloProvider client={client}>
      <DisplayLocations></DisplayLocations>
      <AddTodo></AddTodo>
    
    </ApolloProvider>
   
<div className={styles.container}>
      <h1>asdasd</h1>
    </div>
    <Link href="/about"><a>About</a></Link>
    </div>
    
  )
}
