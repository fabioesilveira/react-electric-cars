import NavBar from "../components/Navbar";
import Container from 'react-bootstrap/Container';


import Footer from "../components/Footer";
import lucidEvent from '../../src/assets/images/lucid-launch-event.webp'
import lucid from '../../src/assets/images/Lucid.png'



function Lucid() {
    return (
        <div>
            <NavBar />
            <Container>
            <img className="lucid-img-1" src={lucid}></img>
            <img className="lucid-img-2" src={lucidEvent}></img>
            </Container>

            <Footer />
        </div>
    )
}

export default Lucid;