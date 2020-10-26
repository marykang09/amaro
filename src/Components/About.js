import React, { Component } from 'react'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class About extends Component {

    render(){
        return(
            <section id="about">
                <h1> About </h1>
                <p> Amaro is an Italian herbal liquer, directly translating to "bitter". Each amaro's flavor depends 
                    on the herbs, roots, botanicals, and ingredients used in the recipe. The consistency is usually slightly syrupy.
                    The alcohol content by volume also varies from bottle to bottle, and can range from around 15% to 40% ABV. 
                    The plural of amaro is amari.
                </p>
                <br></br>
                <h1> History  </h1>
                <p> 
                    Monks in the Middle Ages prepared health elixirs and tinctures that were distributed across monastries and pharmacies across Italy.
                    Towards the 19th century, recipes were refined and sold by alcohol merchants.
                    Amaro's original purpose is as an after-dinner digestif. 
                    THe usually bittersweet taste of amaro satiaties the post-meal sweet tooth craving, while the herbs are said to help digestion.
                    Recently, amaro has become a favorite cocktail ingredient for mixologists, not solely viewed as a digestif.
                </p>
                <br></br>
                <h1> Tradition </h1>
                <p>
                    By tradition, most amaro recipes are a propietary blend of herbs and botanicals that only a handful of people know.
                    Most amari follow a formula of alcoholic base, bittering agent, and propietary flavor blend.
                    The alcohol base varies, including spirits such as beet molasses or grappa. Bittering agents may be flowers, roots, or bark. 
                    Then the propietary flavor blend comes from macerating herbs, spices, botanicals, and citrus peels. The amaro is then matured for anywhere from 1-5 years.
                </p>
                <br></br>
                <h1> Types </h1>
                <p>
                    Alpine: Smoky. ~17% ABV.
                    <br></br>
                    Carciofo: produced with artichoke. ~20% ABV.
                    <br></br>
                    China: produced using the bark of a South American plant called Cinchona Calisaya.
                    <br></br>
                    Fernet: Bitter. Usually include myrrh, rhubarb, chamomille, cardamom, aloe, and saffron.
                    <br></br>
                    Light: Citrusy. Light color.
                    <br></br>
                    Medium: evenly balanced between bitter and sweet. Citrusy. ~32% ABV.
                    <br></br>
                    Rabarbaro: produced using Chine rhubarb.
                    <br></br>
                    Tartufo: produced in Umbria, Italy - an area known for its truffles. ~30%.
                    <br></br>
                    Vermouth: the alcohol is wine-based instead of grain-based.

                </p>
                <br></br>
                <h1> Consumption </h1>
                <p> 
                    We believe the best way to enjoy the nuances between different amaro is with a tasting.
                    Once you try and find an amaro you love, enjoy it straight, on ice with soda water, or in a cocktail!
                </p>

                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>
                
            </section>
        )
    }
}

export default About