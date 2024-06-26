import NavBar from "../components/Navbar";
import Tesla1 from '../../src/assets/images/tesla.jpg'
import Tesla2 from '../../src/assets/images/tesla2.png'
import { teslaCars } from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Tesla() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/")
    }

    return (

        <div>

            <NavBar />
            <Container>
                <img class="img-tesla2" src={Tesla2}></img>
                <img class="img-tesla1" src={Tesla1}></img>
                
        

                {teslaCars.map((element, index) => (
                    <div key={index}>
                        <h2 className="div-h2-tesla">{element.model}</h2>

                        <Carousel className="img-cars-tesla">
                        {element.images.map((e, i) => (
                             <Carousel.Item key={i}>
                             <img
                               className="d-block w-100 img-cars-tesla"
                               src={e}
                               alt="First slide"
                             />
                            <p>{element.paragraph}</p>
                           </Carousel.Item>
                           
                        ))}
                        </Carousel>

                        <Button variant="outline-success" onClick={handleClick}>Checkout tesla webpage</Button>{' '}
                    </div>
                ))}
            </Container>

            <Footer />
        </div>
    )
};

export default Tesla;