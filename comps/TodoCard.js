import style from "../styles/Card.module.css";
import {
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useMutation,
  from,
  HttpLink,
  useLazyQuery,
  NetworkStatus,
} from "@apollo/client";

const DELETE = gql`
  mutation DElete($id: String!, $page: String!) {
    Delete_(id: $id, page: $page)
  }
`;
const TodoCard = (props) => {
  const [Delete_, { data }] = useMutation(DELETE);
  function deleteTask() {
    Delete_({ variables: { id:props.id , page: props.page } })
    alert("Refresh to see the item gone");
    console.log(props.id)
    console.log(props.page)
    console.log(props.Job)
  }
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
      onClick={()=>deleteTask()}
    >
      <div style={{ width: "20px", height: "20px", marginRight: "15px" }}>
        <span className={style.CardBtn}> </span>
      </div>
      {props.Job}
    </span>
  );
};
export default TodoCard;
