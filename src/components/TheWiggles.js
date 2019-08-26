import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import wiggles2 from './images/wiggles 2.jpg'

export class TheWiggles extends Component {
  render() {
    return (
      <main className="wiggle-container">
        <h1 className="band-name">THE WIGGLES</h1>
        <img id="wiggle-pic" src={wiggles2}></img>
        <section>
          <p>Album Name Goes Here</p>
          <p>
            Album lorem lorem lorem lorem INFO lorem lorem lorem lorem Album
          </p>
        </section>
      </main>
    )
  }
}

export default TheWiggles
