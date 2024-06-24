import NavBar from "../components/Navbar";
import Tesla1 from '../../src/assets/images/tesla.jpg'
import Tesla2 from '../../src/assets/images/tesla2.png'

function Tesla() {
    return (

    
        <div>
            <NavBar />

            
                <img class="img-tesla2" src={Tesla2}></img>
                <img class="img-tesla1" src={Tesla1}></img>
           
            
        </div>
        
    )
}

export default Tesla;