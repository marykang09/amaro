import React from 'react'
import Amaro from '../Components/Amaro'
import AmaroList from '../Components/AmaroList'
import SearchBar from '../Components/SearchBar'

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

// const searchAmaroList = () => {
//     AmaroList.filter(a => a.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
// }

// const searchBar = () => {

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
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div className="container" >
                    {AmaroList.map (a => <Amaro amaro={a} key={a.name}/>)}

                </div>
                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>

            </section>
        )
}

export default AmaroContainer