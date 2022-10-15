import Link from "next/link";
import { useEffect } from "react";
import Addtask from "../comps/Addtask"

const Grocery = () => {
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >

      <h1 style={{textAlign:"center",color:'black',fontWeight:"bold"}}>Grocery</h1>
      <Addtask page="Grocery" />
    </div>
  );
};
export default Grocery;
