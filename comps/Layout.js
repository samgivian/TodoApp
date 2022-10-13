import CustomNavbar from "./CustomSidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Layout = ({children}) => {
  return (
    <Container style ={{margin:0,padding:0,color:"white"}}>
        <Row style ={{height:"100vh",margin:0,padding:0,width:"100vw"  }}>
        <Col md={2} style={{backgroundColor: "#4d5e72",}}>   <CustomNavbar /></Col>
        <Col md={10} style ={{margin:0,padding:0}}>  {children}</Col>
      </Row>
   
      </Container>
 
  );
};
export default Layout;