import React, { Component } from 'react'
import BaseNavigator from './components/navigation/BaseNavigator'


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