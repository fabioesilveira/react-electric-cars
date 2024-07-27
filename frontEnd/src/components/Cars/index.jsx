import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';



function Cars() {

    const [cars, setCars] = useState(false)
    useEffect(() => {
        async function fetchAPI() {
            const url = "http://localhost:3000/cars"
            const response = await axios.get(url)
            console.log(response.data)
            const data = response.data
            const newData = data.filter((element) => element.model === "Tesla")
            console.log(newData)
            setTimeout(() => {
                setCars(newData)
            }, 2000)

        }
        fetchAPI()


    }, [])


    if (!cars) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <h2>Hello</h2>
            {cars.map((element) => (
                <div>
                    <h2>{element.car_name}</h2>
                </div>
            ))}
        </>
    )
}

export default Cars;