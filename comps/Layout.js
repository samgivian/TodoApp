import CustomNavbar from "./CustomNavbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Layout = ({children}) => {
  return (
    <Container style ={{margin:0,padding:0,color:"white"}}>
        <Row style ={{height:"100vh",margin:0,padding:0,width:"100vw"  }}>
        <Col md={2} style={{backgroundColor: "#4d5e72",}}>   <CustomNavbar /></Col>
        <Col md={10} style ={{backgroundImage: `url("https://ze-robot.com/images/source/39666.jpg")`,
    backgroundPosition:'center',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>  {children}</Col>
      </Row>
   
      </Container>
 
  );
};
export default Layout;