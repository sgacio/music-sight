import React, { Component } from 'react'
import muppets2 from './images/muppets2.jpg'

export class TheMuppets extends Component {
  render() {
    return (
      <main>
        <h1 className="band-name">THE MUPPETS</h1>
        <img id="muppet-pic" src={muppets2}></img>
        <section>
          <p>Album Name Goes Here</p>
          <p>
            Album lorem lorem lorem lorem INFO lorem lorem lorem lorem Album{' '}
          </p>
        </section>
      </main>
    )
  }
}

export default TheMuppets
