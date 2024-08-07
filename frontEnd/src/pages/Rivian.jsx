import { Container} from "react-bootstrap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsRivian } from "../data/dataImages";
import { useEffect, useState } from "react";
import axios from "axios";
import MySpinner from "../components/MySpinner";

function Rivian() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        async function fetchAPI() {
            const url = "http://localhost:3000/cars"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.filter((element) => element.model === "Rivian")
            setCars(newData)
        }

        fetchAPI();
    }, [])


    return (
        <>
            <NavBar />

            <Container>

                <ImageBrand imgs={imgsRivian} />

                {cars ? <ListCars data={cars} /> : <MySpinner />}

            </Container>
            <Footer />
        </>
    )
}

export default Rivian;