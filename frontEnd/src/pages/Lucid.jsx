import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Footer from "../components/Footer";
import { lucidCars } from "../data/data";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsLucid } from "../data/dataImages";

function Lucid() {
    return (
        <div>
            <NavBar />
            <Container>
                <ImageBrand imgs={imgsLucid}/>

                <ListCars cars={lucidCars}/>
            </Container>

            <Footer />
        </div>
    )
}

export default Lucid;