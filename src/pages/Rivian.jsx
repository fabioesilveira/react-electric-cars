import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import rivian1 from '../../src/assets/images/rivian-logo.png'
import rivian2 from '../../src/assets/images/rivian-img.webp'
import { rivianCars } from "../data";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Rivian() {
    return (
        <div>
            <NavBar />
            
            <Container>

                <img className="rivian-image-1" src={rivian1}></img>
                <img className="rivian-image-2" src={rivian2}></img>

                <h2 className="chekout-cars-h2">CHECK THE CARS OUT</h2>

                {rivianCars.map((element, index) => (
                    <div key={index}>
                        <h2 className="div-h2-cars">{element.model}</h2>
                        <h4 className="div-h4-cars">PRICE {element.price} / RANGE {element.range}</h4>
                        <Carousel className="lucid-images-carousel">
                            {element.images.map((e, i) => (
                                <Carousel.Item  key={i}>
                                    <img
                                        className="d-block w-100 lucid-images-carousel"
                                        src={e}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                ))}

            </Container>
            <Footer />
        </div>
    )
}

export default Rivian;