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

class AmaroContainer extends React.Component {
    state = {
        searchTerm: "",
        amaroToShow: AmaroList
    }

    handleNewSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    submitNewSearch = (event) => {
        event.preventDefault()

        let searchedAmaroList

        if (this.state.searchTerm.length > 0){
            searchedAmaroList = AmaroList.filter(a => a.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())) 
            if (searchedAmaroList.length === 0){
                searchedAmaroList = AmaroList
                alert("Sorry! We don't currently have any information on that amaro. Please try a different search.")
            }
        } else {
            searchedAmaroList = AmaroList
        }

        this.setState({
            amaroToShow: searchedAmaroList
        })
    }

    render(){
        return(

            <section id="amaro-container">
                
                <div className="banner-text">
                    <h1 className="quote"> Browse and Learn </h1>
                    <p> 
                        Please keep in mind that the following is in no way an exhaustive list of amaro. These are the somewhat readily available bottles in the United States. There is a plethora of Italian brands and special blends of Amaro that are not yet imported into the US.
                        <br></br><br></br>
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className="search-bar">
                    <form className="search-bar-form">
                        <input 
                            type="text" 
                            placeholder="Search for an Amaro..." 
                            name="search" 
                            value={this.state.searchTerm}
                            onChange={(event) => this.handleNewSearch(event)}/>

                        <button 
                            type="submit"
                            onClick={this.submitNewSearch}> 
                            <i className="fa fa-search"></i> 
                        </button>
                    </form>
                    { this.state.searchTerm.length > 0 && this.state.amaroToShow.length === 0 ? <div className="no-match"> No matches, please try a new search!</div> : null}
                </div>

                <div className="container" >
                    {this.state.amaroToShow.map (a => <Amaro amaro={a} key={a.name}/>)}

                </div>
                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>

            </section>
        )
    }
}

export default AmaroContainer