
import style from "../styles/Card.module.css"
const TodoCard = (props) => {
    console.log(props.text);
    return (
            <span style={{backgroundColor:"#7371fc",width:"75vw",borderRadius:"10px",   display: "flex",
            alignItems: "center",padding:"10px"}} >
              <div style ={{width:"20px",height:"20px",marginRight:"15px"}}>   
              <span className={style.CardBtn}>  </span>
              </div>
               {props.text}
                </span>
  
  
    );  
  };
  export default TodoCard;
