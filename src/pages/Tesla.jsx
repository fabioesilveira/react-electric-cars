import NavBar from "../components/Navbar";
import Tesla1 from '../../src/assets/images/tesla.jpg'
import Tesla2 from '../../src/assets/images/tesla2.png'
import { teslaCars } from "../data";
import Container from 'react-bootstrap/Container';
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

                <h2 className="tesla-h2">CHECK THE CARS OUT</h2>

                {teslaCars.map((element, index) => (
                    <div key={index}>
                        <h2 className="div-h2-tesla">{element.model}</h2>
                        <h4 className="div-h4-tesla">PRICE {element.price} / RANGE {element.range}</h4>

                        <Carousel className="img-cars-tesla">
                            {element.images.map((e, i) => (
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100 img-cars-tesla"
                                        src={e}
                                        alt="First slide"
                                    />

                                </Carousel.Item>

                            ))}

                        </Carousel>
                       
                        <Button size="lg" variant="outline-success" className="tesla-btn-youtube" onClick={handleClick}>Checkout Youtube Video</Button>{' '}
                    </div>
                ))}
            </Container>

            <Footer />
        </div>
    )
};

export default Tesla;