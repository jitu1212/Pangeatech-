import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Hearder({filter,revenuetype,loading,currRev}) {
    

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Line Bar Chart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={currRev} id="basic-nav-dropdown" >
            <NavDropdown.Item name={"All"}  onClick={(e)=>filter(e)}>All Revenue</NavDropdown.Item>
             
            {loading && revenuetype.map((item,index)=>{
                return<NavDropdown.Item name={item} key={index} onClick={(e)=>filter(e)} >{item}</NavDropdown.Item>
            })}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Hearder;