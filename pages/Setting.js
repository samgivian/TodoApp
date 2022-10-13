import Link from "next/link";
import { useEffect } from "react";
const Tasks = () => {
  useEffect(() => {
    console.log("use effect");
  }, []);
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
      <h1>Setting</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};
export default Tasks;
