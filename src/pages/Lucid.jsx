import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import lucidEvent from '../../src/assets/images/lucid-launch-event.webp'
import lucid from '../../src/assets/images/Lucid.png'
import { lucidCars } from "../data";



function Lucid() {
    return (
        <div>
            <NavBar />
            <Container>
                <img className="lucid-img-1" src={lucid}></img>
                <img className="lucid-img-2" src={lucidEvent}></img>

                <h2 className="chekout-cars-h2">CHECK THE CARS OUT</h2>

                {lucidCars.map((element, index) => (
                    <div>
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

export default Lucid;