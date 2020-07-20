import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return (
        <div className="jumbotron">
            <h1>Fabian Guerrier</h1>
            <p>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <a href="https://github.com/Slimjim145">
                    GitHub 
                </a>
            </p>
             </div>
    );

}
export default Header;