import React from "react";
import {Link} from "react-router-dom";
import Project from "../components/Project";

function Projects(){
    return (
        <div>
            <h1>Projects</h1>
            <p>
                <Link to="/">
                Home
                </Link>
                <a href="https://github.com/Slimjim145">
                    GitHub 
                </a>
                <Project title="Example Project">
                    <p> This is adescription of the Project </p>
                </Project>
            </p>
             </div>
    );

}
export default Projects;