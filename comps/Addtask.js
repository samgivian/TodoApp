import InputGroup from "react-bootstrap/InputGroup";
import { IoIosAddCircle } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";

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

const ADD_TODO = gql`
  mutation AddTodo($text: String!,$page: String!) {
    addTodo(text: $text, page: $page)
  }
`;

const GET_LOCATIONS = gql`
  query Posts($text: String!) {
    posts(text: $text) {
      Job
    }
  }
`;
const Query = (props) =>{
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { text: "GettingStarted" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.posts.map(({ Job }) => (
    <TodoCard text={Job} />
   
  ));
}

const Addtask = (props) => {

 
  
  const [count, setCount] = useState(0);
  let input;
  const [addTodo, { data }] = useMutation(ADD_TODO);
  const { dataq } = useQuery(GET_LOCATIONS, {
    variables: { text: "GettingStarted" },
  });
  let listItems = Query("GettingStarted")
  
  function test(){
    addTodo({ variables: { text: input.value,page: props.page} });
    setCount(count + 1)
  }
 
  return (
    <div>
    <div
    style={{
     padding:"20px",
      width:"83.3vw",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
     
     
    <p>{count}</p>
    {listItems}
    </div>
    <div style={{position:"absolute",bottom:"20px",margin: "0 auto",width:"83.3vw"}}>
    <div style={{ width: "70vw", margin: "auto" }}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        test();
        input.value = "";
      }}
    >
        <InputGroup style={{ width: "70vw", margin: "auto" }}>
      
        <InputGroup.Text id="basic-addon1" >
        <button  style={{border:"none",width:"100%",height:"100%"}}  type="submit">
          <IoIosAddCircle 
            style={{
              width: "20px",
              height: "20px",
              color: "grey",
            }}
         
          />
            </button >
                </InputGroup.Text>
        
        <Form.Control
           ref={(node) => {
            input = node;
          }}
          placeholder="Add task"
          aria-label="Add task"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
     
      
    </form>
  </div>
  </div>
  </div>
  );
}
export default Addtask;

