import React, { Component } from 'react'
import nickandmal from '../Assets/nickandmal.jpg'
import AmaroList from '../Components/AmaroList'
import Tasting from '../Components/Tasting'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class NickandMal extends Component {

    render(){
        return(
            <section id="nickandmal">
                <div className="infoLabel">
                    <h1> Amaro Tasting for Nick & Mal </h1>

                    <p className="infoLabel"> 
                        <em className="infoText"> 
                            <br></br>
                            Thank you for hosting us! <br></br>
                            We wanted to help you celebrate the anniversary of your engagement, as well as provide a small taste of Italy that you didn't get to experience this year.
                        </em>
                    </p>
                </div>

                <img className="photo" src={nickandmal} alt="nickandmal" ></img>
                    
                <p>    
                    <em className="infoText"> 
                        <br></br>
                        Hope you enjoy! 
                        <br></br>
                        with Love, Alex and Mary
                    </em>
                </p>
                <br></br>
                <hr></hr>
                <br></br>

                <div className="tastingSection">
                    <div className="tasting">
                            { AmaroList.map (a => a.tasting === "Y" ? <Tasting amaro={a} key={a.name}/> : null)}
                    </div>
                </div>

                <br></br>
                <hr></hr>

                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>
            </section>
        )
    }
}

export default NickandMal