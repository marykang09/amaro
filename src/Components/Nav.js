import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    state = {
        active: null
    }

    handleClick = (event) => {
        // event.preventDefault()
        console.log("clicked!")
        this.setState({
            active: event.target.name
        })
    }


    render(){
        return (
            <section id="nav">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show Navigation"> Show Navigation </a>
                    <a className="mobile-btn" href="#home" title="Hide Navigation"> Hide Navigation </a>
                    
                    <ul id="nav" className="nav">
                        <li><NavLink className={this.state.active === "Home" ? "current" : null} name="Home" exact to="home" onClick={this.handleClick}> Home </NavLink></li>
                        <li><NavLink className={this.state.active === "About" ? "current" : null} name="About" exact to="about" onClick={this.handleClick}> About </NavLink></li>
                        <li><NavLink className={this.state.active === "Amaro" ? "current" : null} name="Amaro" exact to="amaro" onClick={this.handleClick}> Amaro </NavLink></li>
                        <li><NavLink className={this.state.active === "Ingredients" ? "current" : null} name="Ingredients" exact to="ingredients" onClick={this.handleClick}> Ingredients </NavLink></li>
                        <li><NavLink className={this.state.active === "Events" ? "current" : null} name="Events" exact to="events" onClick={this.handleClick}> Events </NavLink></li>

                    </ul>
                </nav>
            </section>
        )
    }
}

export default Nav