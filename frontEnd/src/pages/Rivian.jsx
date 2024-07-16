import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { rivianCars } from "../data/data";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsRivian } from "../data/dataImages";

function Rivian() {
    return (
        <>
            <NavBar />

            <Container>

                <ImageBrand imgs={imgsRivian}/>

                <ListCars cars={rivianCars} />

            </Container>
            <Footer />
        </>
    )
}

export default Rivian;