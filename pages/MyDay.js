import Link from "next/link";
import { useEffect } from "react";
const MyDay = () => {
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("https://ze-robot.com/images/source/39666.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"   ,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Hello MyDay</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};
export default MyDay;
