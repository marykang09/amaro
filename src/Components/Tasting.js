import React from 'react'

const Tasting = (props) => {
    
    return(
        <section id="tasting">

            <div className="card">
                    <br></br>
                    <br></br>
                    <img src={props.amaro.image} alt={props.amaro.name} />
                    <div className="amaroCard">
                        <h3> {props.amaro.name} </h3>
                        <p>
                            <span> from: </span> <em> {props.amaro.location} </em>
                            <br></br>
                            <span> made with: </span> <em> {props.amaro.ingredients} </em>
                            <br></br>
                            <span> abv: </span> <em> {props.amaro.abv}% </em>
                        </p> 
                    </div>              
            </div>


        </section>
    )
}

export default Tasting