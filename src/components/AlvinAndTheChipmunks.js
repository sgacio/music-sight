import React, { Component } from 'react'
import alvin2 from './images/alvin 2.jpg'

export class AlvinAndTheChipmunks extends Component {
  render() {
    return (
      <main>
        <h1 className="band-name">Alvin and the Chipmunks</h1>
        <img id="alvin-pic" src={alvin2}></img>
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

export default AlvinAndTheChipmunks
