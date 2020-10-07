import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Jumbotron, Button } from 'react-bootstrap';
import "../App.css";

function Hero(props) {
    const history = useHistory();
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }

    const handleButtonClick = () => {

    }
 
    return (
        < >
            <Jumbotron className="hero-background" tag="div">
                <div className="hero-content">
                    <h1 tag="div" className="hero-title">Carmen Johnson | Web Developer</h1>
                    <Button className="primary-button" onClick={}>View Portfolio</Button>
                   
                </div>
            </Jumbotron>
        </>
    )
}

export default Hero;