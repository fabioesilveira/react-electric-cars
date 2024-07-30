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

    if (!myCars) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            {myCars.map((element, index) => (
                <div key={index}>
                    <h2 className="div-h2-cars">{element.model}</h2>
                    <h4 className="div-h4-cars">PRICE {element.price} / RANGE {element.range}</h4>
                    <div>
                        {myCars[index].show ? <YoutubeVideo video={element.srcVideo} /> : ""}

                    </div>

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

                    <Button size="lg" variant="outline-success" onClick={(event) => handleClick(event, index)} className="tesla-btn-youtube" >Open Youtube Video</Button>{' '}
                </div>
            ))}
        </>
    )
}

export default ListCars;