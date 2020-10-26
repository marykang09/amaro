import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchTerm: null
    }

    render(){ 
        return ( 
                <div className="search-bar">
                    <form className="search-bar-form">
                        <input type="text" placeholder="Search for an Amaro..." name="search" />
                        <button type="submit"> <i className="fa fa-search"></i> </button>
                    </form>
                </div>
                )
        } 
}

export default SearchBar