import React from 'react'
import IngredientList from '../Components/IngredientList'
import Ingredient from '../Components/Ingredient'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class IngredientContainer extends React.Component {
    state = {
        searchTerm: "",
        ingredToShow: IngredientList
    }

    handleNewSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    submitNewSearch = (event) => {
        event.preventDefault()

        let searchedIngredList

        if (this.state.searchTerm.length > 0){
            searchedIngredList = IngredientList.filter(i => i.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())) 
            if (searchedIngredList.length === 0){
                searchedIngredList = IngredientList
                alert("Sorry! We don't currently have any information on that ingredient. Please try a different search.")
            }
        } else {
            searchedIngredList = IngredientList
        }

        this.setState({
            ingredToShow: searchedIngredList
        })
    }

    render(){
        return(

            <section id="ingredient-container">
                
                <div className="banner-text">
                    <h1 className="quote"> Browse and Learn </h1>
                    <p> 
                        Below are some of the most commonly used known ingredients in amaro. Keep in mind that most amaro recipes are still propietary to the producers so there may be unknown ingredients left off this list.
                        <br></br><br></br>
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className="search-bar">
                    <form className="search-bar-form">
                        <input 
                            type="text" 
                            placeholder="Search for an Ingredient..." 
                            name="search" 
                            value={this.state.searchTerm}
                            onChange={(event) => this.handleNewSearch(event)}/>

                        <button 
                            type="submit"
                            onClick={this.submitNewSearch}> 
                            <i className="fa fa-search"></i> 
                        </button>
                    </form>
                    { this.state.searchTerm.length > 0 && this.state.ingredToShow.length === 0 ? <div className="no-match"> No matches, please try a new search!</div> : null}
                </div>

                <div className="container" >
                    {this.state.ingredToShow.map (i => <Ingredient ingredient={i} key={i.name}/>)}

                </div>
                <button id="scroll" onClick={scrollToTop}> BACK TO TOP </button>

            </section>
        )
    }
}

export default IngredientContainer