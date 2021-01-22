import React from 'react'
import Cocktail from '../Components/Cocktail'
import CocktailList from '../Components/CocktailList'


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class CocktailContainer extends React.Component {
    state = {
        searchTerm: "",
        cocktailToShow: CocktailList
    }

    handleNewSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    submitNewSearch = (event) => {
        event.preventDefault()

        let searchedCocktailList

        if (this.state.searchTerm.length > 0){
            searchedCocktailList = CocktailList.filter(a => a.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())) 
            if (searchedCocktailList.length === 0){
                searchedCocktailList = CocktailList
                alert("Sorry! We don't currently have any information on that particular cocktail. Please try a different search.")
            }
        } else {
            searchedCocktailList = CocktailList
        }

        this.setState({
            cocktailToShow: searchedCocktailList
        })
    }

    render(){
        return(

            <section id="cocktail-container">
                
                <div className="banner-text">
                    <h1 className="quote"> Browse and Learn </h1>
                    <p> 
                        Please keep in mind that the following is in no way an exhaustive list of cocktails using amari.
                        <br></br><br></br>
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className="search-bar">
                    <form className="search-bar-form">
                        <input 
                            type="text" 
                            placeholder="Search for a cocktail..." 
                            name="search" 
                            value={this.state.searchTerm}
                            onChange={(event) => this.handleNewSearch(event)}/>

                        <button 
                            type="submit"
                            onClick={this.submitNewSearch}> 
                            <i className="fa fa-search"></i> 
                        </button>
                    </form>
                    { this.state.searchTerm.length > 0 && this.state.cocktailToShow.length === 0 ? <div className="no-match"> No matches, please try a new search!</div> : null}
                </div>

                <div className="container" >
                    {this.state.cocktailToShow.map (c => <Cocktail cocktail={c} key={c.name}/>)}

                </div>
                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>

            </section>
        )
    }
}

export default CocktailContainer