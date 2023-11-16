import React, { Component } from 'react'
import BaseNavigator from './components/navigation/BaseNavigator'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='root-header'>
        <BaseNavigator />
      </div>
    )
  }
}

export default App