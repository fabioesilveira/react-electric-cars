import { cars, teslaCars } from "../data";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electric from '../../src/assets/images/eletric.png'
import Electric2 from '../../src/assets/images/eletric-2.png'
import { Navbar } from "react-bootstrap";
import NavBar from "../components/Navbar";

function MainPage() {
    return (
        <main>
           <NavBar />
            
            <Container>
                <Row>

                    <Col >
                        <h1 class="h1">Be smart and GoElectric!</h1>
                        <img class="home-pic" src={Electric}></img>
                        <img class="home-pic" src={Electric2}></img>
                    </Col>

                </Row>
            </Container>
        </main>
    )
};

export default MainPage;