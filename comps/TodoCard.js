

const TodoCard = (props) => {
    console.log(props.text);
    return (
      
            <span style={{backgroundColor:"#7371fc",width:"75vw",borderRadius:"10px",   display: "flex",
            alignItems: "center",padding:"10px"}} >
                <span style ={{borderRadius:"50%",backgroundColor:"red",width:"20px",height:"20px",display:"inline-block",marginRight:"10px"}}>
                </span>
                {props.text}
                </span>
  
  
    );  
  };
  export default TodoCard;
