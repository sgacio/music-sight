import React, { Component } from 'react'
import HomePage from './components/HomePage'
import TheWiggles from './components/TheWiggles'
import AlvinAndTheChipmunks from './components/AlvinAndTheChipmunks'
import TheMuppets from './components/TheMuppets'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import daftpunktocat from './components/images/daftpunktocat-guy.gif'
import daftpunktocatthomas from './components/images/daftpunktocat-thomas.gif'
import hulagirl from './components/images/hula_loop_octodex03.gif'
import guitarguy from './components/images/guitar guy.png'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <h1>A Winners Favorite Bands!</h1>
            <nav>
              <img className="circles" src={hulagirl}></img>
              <img src={daftpunktocat}></img>
              <div>
                <Link className="home-button" to="/">
                  HOME
                </Link>
              </div>
              <img src={daftpunktocatthomas}></img>
              <img className="circles" src={guitarguy}></img>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/TheWiggles" component={TheWiggles}></Route>
            <Route
              exact
              path="/AlvinAndTheChipmunks"
              component={AlvinAndTheChipmunks}
            ></Route>
            <Route exact path="/TheMuppets" component={TheMuppets}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
