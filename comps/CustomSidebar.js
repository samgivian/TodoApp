import { Nav } from "react-bootstrap";
import "../pages/CustomSideBar.module.css";
import Button from "react-bootstrap/Button";
import {
  BsFillSunFill,
  BsFillStarFill,
  BsFillCartFill,
  BsFillLightbulbFill,
  BsHouseFill,
  BsFillSkipStartFill,
  BsHandThumbsUpFill
} from "react-icons/bs";

import { IoIosSettings } from "react-icons/io";

import Link from "next/link";

const CustomSidebar = () => {
  const activateLasers = () => {
    console.log("button click success");
  };
  return (
    <div>
      <h6 style={{ margin: "5px", textAlign: "center" }}>My Todo List</h6>

      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#F1E6C1",
          width: "40px",
          height: "40px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, padding: 0, color: "black" }}>SG</p>
      </div>

      <p
        style={{
          fontSize: "12px",
          display: "inline-block",
          marginLeft: "10px",
        }}
      >
        Saman Givian
      </p>
      <p style={{ fontSize: "12px" }}> samgivian2015@gmail.com</p>

  
      {/* All */}
      <div
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          width: "14vw",
          height: "20px",
          marginTop: "20px",
        }}
        onClick={() => activateLasers()}
      >
        <BsFillLightbulbFill
          style={{ width: "20px", height: "20px", marginBottom: "5px" }}
        />
        <p style={{ display: "inline-block", marginLeft: "5px" }}>All</p>
      </div>

      {/* Grocessory */}
      <div
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          width: "14vw",
          height: "20px",
          marginTop: "20px",
        }}
        onClick={() => activateLasers()}
      >
        <Link href="/Grocery">
          <a>
            <BsFillCartFill
              style={{
                width: "20px",
                height: "20px",
                marginBottom: "5px",
                color: "White",
              }}
            />
            <p style={{ display: "inline-block", marginLeft: "5px" }}>
              Grocery
            </p>
          </a>
        </Link>
      </div>

      {/* Tasks */}
      <div
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          width: "14vw",
          height: "20px",
          marginTop: "20px",
        }}
        onClick={() => activateLasers()}
      >
        <Link href="/Tasks">
          <a>
            <BsHouseFill
              style={{
                width: "20px",
                height: "20px",
                marginBottom: "5px",
                color: "white",
              }}
            />
            <p style={{ display: "inline-block", marginLeft: "5px" }}>Tasks</p>
          </a>
        </Link>
      </div>

      {/* End Task */}

      {/* Divider */}
      <div
        style={{
          backgroundColor: "grey",
          width: "15vw",
          height: "1px",
          marginTop: "20px",
        }}
      ></div>
      {/* End Divider */}

      {/* Getting Started */}
      <div
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          width: "14vw",
          height: "20px",
          marginTop: "20px",
        }}
        onClick={() => activateLasers()}
      >
        <Link href="/GettingStarted">
          <a>
            <  BsHandThumbsUpFill
              style={{
                width: "20px",
                height: "20px",
                marginBottom: "5px",
                color: "orange",
              }}
            />
            <p style={{ display: "inline-block", marginLeft: "5px",color:"orange" }}>Getting Started</p>
          </a>
        </Link>
      </div>
      {/* End Getting Started */}

      
      {/* Setting */}
      <div
        style={{
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          width: "14vw",
          height: "20px",
          marginTop: "20px",
          position: "absolute",
          bottom: "20px",
        }}
        onClick={() => activateLasers()}
      >
        <Link href="/Setting">
          <a>
            <IoIosSettings
              style={{
                width: "20px",
                height: "20px",
                marginBottom: "5px",
                color: "grey",
              }}
            />
            <p style={{ display: "inline-block", marginLeft: "5px" }}>
              Setting
            </p>
          </a>
        </Link>
      </div>
      {/* End Setting */}
    </div>
  );
};
export default CustomSidebar;
