import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return (
        <div className="">
            <h1>Home</h1>
            <p>
                <Link to="/">
                Home
                </Link>
                <a href="https://github.com/Slimjim145">
                    GitHub 
                </a>
            </p>
             </div>
    );

}
export default Home;