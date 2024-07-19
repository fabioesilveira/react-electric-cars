import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { luxuryCars } from "../data/data";
import ListCars from "../components/ListCars";



function LuxuryCars() {
    return (
        <>
            <NavBar />

            <Container>

                <ListCars cars={luxuryCars} />
                
            </Container>

            <Footer />
        </>
    )
}

export default LuxuryCars;