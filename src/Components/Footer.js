import React, { Component } from 'react'
import Wallpaper from '../Components/Wallpaper'

class Footer extends Component {


    render(){
        return (
            <section id="footer">
                <Wallpaper/> 
                <div className="copy">
                    <h3> &copy; Copyright 2020 | Made with 🤍 by Mary Kang </h3>
                </div>
            </section>
        )
    }
}

export default Footer