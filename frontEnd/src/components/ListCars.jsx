import { Button, Carousel } from "react-bootstrap";
import YoutubeVideo from "./YoutubeVideo";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';


function ListCars({ data }) {

    const [myCars, setMyCars] = useState(data)

    function handleClick(event, index) {
        event.preventDefault()
        const newCars = [...myCars]; //newCars = myCars
        newCars[index].show = !newCars[index].show
        setMyCars(newCars)
    }

    return (
        <>
            {myCars.map((element, index) => (
                <div key={index}>
                    <h2 className="div-h2-cars">{element.car_name}</h2>
                    <h4 className="div-h4-cars">PRICE {element.price} / RANGE {element.range}</h4>
                    <div>
                        {myCars[index].show ? <YoutubeVideo video={element.video} /> : ""}

                    </div>

                    <Carousel className="img-cars-tesla">

                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-cars-tesla"
                                src={element.image_1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-cars-tesla"
                                src={element.image_2}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-cars-tesla"
                                src={element.image_3}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-cars-tesla"
                                src={element.image_4}
                                alt="First slide"
                            />

                        </Carousel.Item>

                    </Carousel>

                    <Button size="lg" variant="outline-success" onClick={(event) => handleClick(event, index)} className="tesla-btn-youtube" >Open Youtube Video</Button>{' '}
                </div>
            ))}
        </>
    )
}

export default ListCars;