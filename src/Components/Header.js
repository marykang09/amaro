import React, { Component } from 'react'
import TypeIt from 'typeit-react'
import Image from './Image.js'
import cocktail from '../Assets/cocktail3.jpg'


class Header extends Component {


    render(){
        return (
            <section id="header">
                <div className="banner">
                    <div className="banner-text">
                        <TypeIt className="typeit"> Amaro Tasting </TypeIt>
                    </div>
                </div>
                <div className="image-banner">
                    <Image image={cocktail}/>
                </div>
                <div className="banner">
                    <div className="banner-text">
                        <h1 className="quote"><em> Stay Bitter, Drink Amaro </em></h1>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Header