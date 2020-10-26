import React from 'react'
import Amaro from '../Components/Amaro'
import AmaroList from '../Components/AmaroList'


// window.onscroll = function(){ scrollFunction()}

// const scrollFunction = () => {

//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         let scrollButton = document.getElementById("scroll")
//         scrollButton.style.display = "block"
//     } else {
//         let scrollButton = document.getElementById("scroll")
//         scrollButton.style.display = "none"
//     }
// }

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const AmaroContainer = () => {
        return(

            <section id="amaro-container">
                <div className="container" >
                    {AmaroList.map (a => <Amaro amaro={a} key={a.name}/>)}

                </div>
                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>

            </section>
        )
}

export default AmaroContainer