import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import ListCars from "../components/ListCars";
import { economyCars } from "../data/data";
import Footer from "../components/Footer";

function EconomyCars() {
    return (
        <>
            <NavBar />

            <Container>

                <ListCars cars={economyCars} />

            </Container>

            <Footer />


        </>
    )
}

export default EconomyCars;