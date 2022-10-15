import Link from "next/link";
import { useEffect } from "react";
import Addtask from "../comps/Addtask"

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://ze-robot.com/images/source/39666.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 style={{textAlign:"center",color:'black'}}>All</h1>
      <Addtask page="All" />
    </div>
  );
};
export default Home;
