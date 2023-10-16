import React from "react";
import '../pages/about.css'


export default function About() {
    return ( 
    <div className="info">
        <h1 className="header">About</h1>
        <p>This site is to allow users to make a list of places to visit in Mexico City.
            Users are given a set list of locations that they can manipulate by adding, deleting, or updating it. 
        </p> <br/>
        <h3 className="header2">
            Other websites to learn about attractions and other sight-seeing locations to vist in Mexico.
            <ul>
                <a href="https://www.cntraveler.com/gallery/best-things-to-do-in-mexico-city">28 Best Things to Do in Mexico City</a><br/>
                <a href="https://www.mexicodesconocido.com.mx/100-cosas-hacer-ciudad-mexico.html">100 cosas que hac en la Ciudad de Mexico</a>
            </ul>
        </h3>
    </div>
    );
}
