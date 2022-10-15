import InputGroup from "react-bootstrap/InputGroup";
import { IoIosAddCircle } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useState } from "react";
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


const Addtask = (props) => {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  function test(){
    addTodo({ variables: { text: input.value,page: props.page} });
    window.location.reload(false);
  }

  return (
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

  );
}
export default Addtask;

