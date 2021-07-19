import React from 'react'
import logo from './logo.svg'
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'
// With the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'
// With the Tauri global script, enabled when `tauri.conf.json > build > withGlobalTauri` is set to true:

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.doTheThing = this.doTheThing.bind(this);
  }

  doTheThing() {
    alert("JS only");
    // const invoke = window.__TAURI__.invoke
    alert(invoke('my_custom_command'));  
  };
  
  render() {
    return (
      <div className="App">
        <button onClick={this.doTheThing}>
          click this
        </button>
      </div>
    );
  }
}