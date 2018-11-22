import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {

      window.player = window.player || new window.CloudPlayerSDK('player1', {
        autohide: 3000,
        timeline: 'timeline1',
        calendar: true
      });

      var access_token = 'eyJ0b2tlbiI6InNoYXJlLmV5SnphU0k2SURjeU56VTFmUS41YmY2NGMyOHQxMmNmZjc4MC5iaGlyLWpEdGZ6N1ZEaFJ4VFA2NFNxQjN2QmMiLCJjYW1pZCI6MTcyMjY1LCJhY2Nlc3MiOiJ3YXRjaCJ9';
      // eslint-disable-next-line no-undef
      player.setSource(access_token);
      // eslint-disable-next-line no-undef
      player.play();
    });
  }

  render() {
    return (
      <div>
        <div id="player1" >

        </div>

        <div id="timeline1"></div></div>
    );
  }
}

export default App;
