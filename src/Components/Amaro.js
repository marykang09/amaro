import React from 'react'



const Amaro = (props) => {
    
    return(
        <section id="amaro">
            
            <div className="bottle">
                <img src={props.amaro.image} alt={props.amaro.name} className="bottle" />
                <div className="overlay">
                    <div className="text"></div>
                </div>
            </div>

            <div className="main">                    
                    <h1> {props.amaro.name} </h1>

                    <p className="infoLabel"><span> from: </span> <em className="infoText"> {props.amaro.location}  </em></p>
                    <p className="infoLabel"><span> known ingredients: </span><em className="infoText"> {props.amaro.ingredients}  </em></p>
                    <p className="infoLabel"><span> abv: </span><em className="infoText"> {props.amaro.abv}% </em></p>
                    <blockquote>
                        <p className="info"> {props.amaro.text} </p>
                        <cite> {props.amaro.cite} </cite>
                    </blockquote>

            </div>





        </section>
    )
}

export default Amaro