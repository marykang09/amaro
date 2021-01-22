import React from 'react'

const Cocktail = (props) => {
    
    return(
        <section id="cocktail">
            
            <div className="image-area">
                <img src={props.cocktail.image} alt={props.cocktail.name} className="cocktail-img" />
                <div className="overlay">
                    <div className="text"></div>
                </div>
            </div>

            <div className="main">                    
                    <h1> {props.cocktail.name} </h1>

                    <p className="infoLabel"><span> ingredients: </span> <em className="infoText"> {props.cocktail.ingredients}  </em></p>
                    <p className="infoLabel"><span> instructions: </span> <em className="infoText"> {props.cocktail.instructions}  </em></p>
            </div>


        </section>
    )
}

export default Cocktail