import style from "../styles/Card.module.css";
const TodoCard = (props) => {
  return (
    <span
      style={{
        backgroundColor: "#7371fc",
        width: "62.4vw",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        margin: "20px auto",
      }}
    >
      <div style={{ width: "20px", height: "20px", marginRight: "15px" }}>
        <span className={style.CardBtn}> </span>
      </div>
      {props.text}
    </span>
  );
};
export default TodoCard;
