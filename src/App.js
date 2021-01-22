import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'
import Header from './Components/Header'
import About from './Components/About'
import AmaroContainer from './Containers/AmaroContainer'
import Events from './Components/Events'
import Error from './Components/Error'
import Footer from './Components/Footer'
import NickandMal from './Components/NickandMal';
import IngredientContainer from './Containers/IngredientContainer'
import CocktailContainer from './Containers/CocktailContainer'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/amaro" component={AmaroContainer} />
          <Route exact path="/ingredients" component={IngredientContainer} />
          <Route exact path="/cocktails" component={CocktailContainer} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/nickandmal" component={NickandMal} />
          <Route render={Error} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App
