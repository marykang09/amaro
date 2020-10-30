import React from 'react'



const Ingredient = (props) => {
    
    return(
        <section id="ingredient">
            
            <div className="image-area">
                <img src={props.ingredient.image} alt={props.ingredient.name} className="ingred-img" />
                <div className="overlay">
                    <div className="text"></div>
                </div>
            </div>

            <div className="main">                    
                    <h1> {props.ingredient.name} </h1>

                    <p className="infoLabel"><span> about: </span> <em className="infoText"> {props.ingredient.text}  </em></p>

            </div>


        </section>
    )
}

export default Ingredient