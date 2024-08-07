import { Container} from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ListCars from "../components/ListCars";
import { useEffect, useState } from "react";
import axios from "axios";
import MySpinner from "../components/MySpinner";



function LuxuryCars() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        async function fetchAPI() {
            const url = "http://localhost:3000/cars"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.filter((element) => element.model === "Luxury Cars")
            setCars(newData)
        }
        fetchAPI()

    }, [])

    return (
        <>
            <NavBar />

            <Container>

                {cars ? <ListCars data={cars} /> : <MySpinner />}

            </Container>

            <Footer />
        </>
    )
}

export default LuxuryCars;