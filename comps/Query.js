import Link from "next/link";

import TodoCard from "../comps/TodoCard";

import {
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useMutation,
  from,
  HttpLink,
} from "@apollo/client";


const GET_LOCATIONS = gql`
  query Posts($text: String!) {
    posts(text: $text) {
      Job
    }
  }
`;

function Query(props) {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { text: "GettingStarted" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.posts.map(({ Job }) => (
    <TodoCard text={Job} />
   
  ));
}

export default Query;