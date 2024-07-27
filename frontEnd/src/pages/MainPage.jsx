import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electric from '../../src/assets/images/eletric.png'
import Electric2 from '../../src/assets/images/eletric-2.png'
import NavBar from "../components/Navbar";
import '../App.css'
import Footer from "../components/Footer";
import Cars from '../components/Cars';

function MainPage() {
    return (
        <main>
           <NavBar />
           <h1 className="title-h1">Be smart and GoElectric!</h1>
            <Container>
                <Cars />
                <Row>

                    <Col >
                        <img class="home-pic" src={Electric}></img>
                        <img class="home-pic" src={Electric2}></img>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </main>
    )
};

export default MainPage;