import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Events extends Component {

    render(){
        return(
            <section id="events">
                <Link to="/nickandmal">
                    <h1> Amaro Tasting for Nick & Mal </h1>
                </Link>
                <p className="infoLabel"><span> when: </span> <em className="infoText"> October 31, 2020 </em></p>
                <p className="infoLabel"><span> where: </span><em className="infoText"> in home tasting, on Leithgow  </em></p>
                <br></br>
                <p className="infoLabel"><span></span><em className="infoText"> Mixologist Alex Bevis and his assistant Mary Kang are excited to present an intimate and memorable amaro tasting for their dearest friends, Nick and Mal - the future Mr. and Mrs. Baldo! </em></p>

            </section>
        )
    }
}

export default Events