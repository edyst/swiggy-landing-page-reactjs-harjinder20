import './jumbo.css'
import { BiCurrentLocation } from "react-icons/bi";
import nav_logo from './nav_logo.png';  //swiggy logo

function Jumbo(){
    return(
        <section className="container" >
            <div className='first_div'>
                <nav>
                    <div className='logo_container'><img src={nav_logo} alt="logo" /></div>
                    <button id="loginBtn" className="commonBtns">Login</button>
                    <button id="signupBtn" className="commonBtns">Sign Up</button>
                </nav>
                <h1>Unexpected guests?</h1>
                <h3>Order food from favourite restaurants near you.</h3>
                <div className="searchDiv">
                    <input type="text" placeholder="Enter your delivery location"></input>
                    <button id="locateBtn"><BiCurrentLocation/>Locate Me</button>
                    <button id="findBtn">FIND FOOD</button>
                </div>
                    <p>POPULAR CITIES IN INDIA</p>
                    <p><span>Ahmedabad</span> Banglore <span>Chennai</span> Delhi <span>Gurgaon</span> Hydrebad <span>Kolkata</span> Mumbai <span>Pune</span> &#38; more.</p>
            </div>
            <div className='second_div'></div>
        </section>
    );
}

export default Jumbo;