import React, { Component } from 'react'

class Nav extends Component {
    state = {
        active: null
    }

    handleClick = (event) => {
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
                        <li><a className={this.state.active === "Home" ? "current" : null} name="Home" href="/home" onClick={this.handleClick}> Home </a></li>
                        <li><a className={this.state.active === "About" ? "current" : null} name="About" href="/about" onClick={this.handleClick}> About </a></li>
                        <li><a className={this.state.active === "Amaro" ? "current" : null} name="Amaro" href="/amaro" onClick={this.handleClick}> Amaro </a></li>
                        <li><a className={this.state.active === "Events" ? "current" : null} name="Events" href="/events" onClick={this.handleClick}> Events </a></li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Nav