import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Footer from "../components/Footer";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsLucid } from "../data/dataImages";
import { useEffect, useState } from "react";
import axios from "axios";
import MySpinner from "../components/MySpinner";


function Lucid() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        async function fetchAPI() {
            const url = "http://localhost:3000/cars"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.filter((element) => element.model === "Lucid")
            setCars(newData)
        }
        fetchAPI()

    }, [])

    return (
        <div>
            <NavBar />
            <Container>
                <ImageBrand imgs={imgsLucid} />

                {cars ? <ListCars data={cars} /> : <MySpinner />}
            </Container>

            <Footer />
        </div>
    )
}

export default Lucid;