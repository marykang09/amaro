import React from 'react'
import amari from '../Assets/amari.jpg'

const Error = () => {

        return(
            <section id="error">
                <div className="row">                    
                        <h1> Oops, page not found... This was probably a mistake.</h1>
                        <img src={amari} alt="amari bottles" className="error"/>
                        <br></br>
                        
                </div>
            </section>
        )
}

export default Error