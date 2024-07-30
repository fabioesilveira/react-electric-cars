import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsTesla } from "../data/dataImages";
import axios from "axios";


function Tesla() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        async function fetchAPI() {
            const url = "http://localhost:3000/cars"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.filter((element) => element.model === "Tesla")
            setCars(newData)
        }
        fetchAPI()

    }, [])

    return (

        <div>
            <NavBar />
            <Container>
                <ImageBrand imgs={imgsTesla} />

                {cars ? <ListCars data = {cars}/> : "nao"}
            </Container>

            <Footer />
        </div>
    )
};

export default Tesla;