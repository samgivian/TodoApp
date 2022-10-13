import {Nav} from "react-bootstrap";
import '../pages/CustomSideBar.module.css'

const CustomNavbar = () =>{
    return(
     <div  >
       <h6 style ={{margin:"5px"}}>My Todo List</h6>
       <div style={{borderRadius:"50%",backgroundColor:"#F1E6C1",width:"40px",height:"40px", display: "inline-flex",justifyContent:"center",alignItems:"center"}}>
         <p style={{margin:0,padding:0,color:"black"}}  >SG</p>
       </div>
       <p>Saman Givian</p>
     </div>
    

    )
}
export default CustomNavbar; 