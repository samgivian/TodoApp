import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosAddCircle } from "react-icons/io";
import Form from 'react-bootstrap/Form';

function add_task(){

}
const Addtask = (props) => {
    
    console.log(props.text);
    return (
        <InputGroup style={{width:"70vw",margin:"auto"}}>
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
  
    );  
  };
  export default Addtask;
