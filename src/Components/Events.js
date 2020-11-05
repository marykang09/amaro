import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Events extends Component {

    render(){
        return(
            <section id="events">
                <div className="upcoming">
                    <h1> UPCOMING EVENTS </h1><br></br>
                    <h2> There are no upcoming events. </h2>
                </div>
                <div className="line"></div>
                <div className="past">
                    <h1> PAST EVENTS </h1><br></br>
                    <Link to="/nickandmal">
                        <h2> Amaro Tasting for Nick & Mal </h2>
                    </Link>
                    <p className="infoLabel"><span> when: </span> <em className="infoText"> October 31, 2020 </em></p>
                    <p className="infoLabel"><span> where: </span><em className="infoText"> in home tasting, on Leithgow  </em></p>
                    <br></br>
                    <p className="infoLabel"><span></span><em className="infoText"> Mixologist Alex Bevis and his assistant Mary Kang are excited to present an intimate and memorable amaro tasting for their dearest friends, Nick and Mal - the future Mr. and Mrs. Baldo! </em></p>
                </div>
            </section>
        )
    }
}

export default Events