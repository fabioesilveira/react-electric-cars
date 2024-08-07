import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsTesla } from "../data/dataImages";
import axios from "axios";
import MySpinner from "../components/MySpinner";
import { fetchAPI } from "../services/fetchAPI";


function Tesla() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        async function getAPI() {
            const newData = await fetchAPI("Tesla")
            setCars(newData)
        }
        getAPI()

    }, [])

    return (

        <div>
            <NavBar />
            <Container>
                <ImageBrand imgs={imgsTesla} />

                {cars ? <ListCars data={cars} /> : <MySpinner />}
            </Container>

            <Footer />
        </div>
    )
};

export default Tesla;