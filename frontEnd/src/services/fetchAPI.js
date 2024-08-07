import axios from "axios";

export async function fetchAPI(model) {
    const url = "http://localhost:3000/cars"
    const response = await axios.get(url)
    const data = response.data
    const newData = data.filter((element) => element.model === model)
    return newData
    
}