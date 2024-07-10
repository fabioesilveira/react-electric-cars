import NavBar from "../components/Navbar";
import { teslaCars } from "../data/data";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import ListCars from "../components/ListCars";
import ImageBrand from "../components/ImageBrand";
import { imgsTesla } from "../data/dataImages";

function Tesla() {
    return (

        <div>
            <NavBar />
            <Container>
                <ImageBrand imgs={imgsTesla}/>

                <ListCars cars={teslaCars} />
            </Container>

            <Footer />
        </div>
    )
};

export default Tesla;