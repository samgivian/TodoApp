import Link from "next/link";
import TodoCard from "../comps/TodoCard";
import { useEffect } from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
import Addtask from "../comps/Addtask"
import Query from "../comps/Query";

const GettingStarted = () => {

  return (
    <div
      style={{
        backgroundColor: "#13293d",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2vh",
        }}
      >
        <BsHandThumbsUpFill
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            marginBottom: "10px",
            color: "orange",
          }}
        />
        <h2 style={{ display: "inline-block", marginLeft: "5px" }}>
          Getting Started
        </h2>
      </div>
      {/* End Header*/}
      <Addtask page="GettingStarted" />
    </div>
  );
};
export default GettingStarted;
/*
<Link href="/">
        <a>Home</a>
      </Link>
      */