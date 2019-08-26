import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import wiggles from './images/the wiggles.jpg'
import alvin from './images/avlin and the chipmunks.jpg'
import muppets from './images/the muppets.jpg'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <main className="home-page-container">
          <div>
            <Link to="/TheWiggles">
              <h1>The Wiggles</h1>
            </Link>
            <img id="home-images" src={wiggles}></img>
          </div>
          <div>
            <Link to="/AlvinAndTheChipmunks">
              <h1>Alvin and the Chipmunks</h1>
            </Link>
            <img id="home-images" src={alvin}></img>
          </div>
          <div>
            <Link to="/TheMuppets">
              <h1>The Muppets</h1>
            </Link>
            <img id="home-images" src={muppets}></img>
          </div>
        </main>
        <p className="i-love-this">
          THIS IS WHY I LOVE THESE BANDS: Morbi sodales nulla sit amet lacus
          lacinia tristique. Curabitur id lectus nec massa cursus ultricies.
          Curabitur vulputate efficitur faucibus. Cras et leo vitae nibh
          suscipit placerat. Quisque molestie tellus vel lectus iaculis, ut
          cursus odio tristique. Morbi in urna eleifend, aliquet quam nec,
          feugiat mi. Mauris vel placerat metus.{' '}
        </p>
      </div>
    )
  }
}

export default HomePage
