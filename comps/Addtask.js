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
  mutation AddTodo($text: String!) {
    addTodo(text: $text)
  }
`;

var a = "Asd";
const AddTodo = (task) => {
  console.log("button click");
  console.log(task);
};
//const [task, setTask] = useState("");
const Addtask = () => {
  const [task, setTask] = useState("a");
  function handleClick() {
    console.log(task);
    setTask("asd")
  }
  function handleChange(event) {
    console.log(event.target.value);
    setTask(event.target.value)
  }
  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
      <input
      type="text"
      name="firstName"
      onChange={handleChange}
    />
    
    </div>
  );
}
export default Addtask;

/*
function AddTodo() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { text: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
*/


/*
<InputGroup style={{ width: "70vw", margin: "auto" }}>
        <InputGroup.Text id="basic-addon1">
          <IoIosAddCircle
            style={{
              width: "20px",
              height: "20px",
              color: "grey",
            }}
          />
        </InputGroup.Text>
        <Form.Control
          
          placeholder="Add task"
          aria-label="Add task"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      */

      /*
        <InputGroup style={{ width: "70vw", margin: "auto" }}>
        <InputGroup.Text id="basic-addon1">
          <IoIosAddCircle
            style={{
              width: "20px",
              height: "20px",
              color: "grey",
            }}
          />
        </InputGroup.Text>
        <Form.Control
       
        onChange={(e)=>{handleChange(e)}}
          placeholder="Add task"
          aria-label="Add task"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      */