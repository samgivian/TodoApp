import Link from "next/link";
import { useEffect } from "react";
import Addtask from "../comps/Addtask"

const All = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.imgur.com/LArzY0A.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{textAlign:"center"}}>Tasks</h1>
      <Addtask page="Tasks" />
    </div>
  );
};
export default All;
