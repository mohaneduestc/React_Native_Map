import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import MapScreen from './src/MapScreen';
import {requestLocationPermission} from './src/expotedFunctions/index' 

class App extends Component {

  constructor(){
    super();
    this.state = {
      hasMapPermission: false
    }
  }

  async componentWillMount() {
    await requestLocationPermission()
}

  

  render() {
      return <MapScreen />;
  }
}

export default App;
