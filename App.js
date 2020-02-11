import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import MapScreen from './src/MapScreen';
import {requestLocationPermission} from './src/expotedFunctions/index' 
import PlaceScreen from './src/components/PlaceScreen';



class App extends Component {

  constructor(){
    super();
    this.state = {
      hasMapPermission: false
    }
  }

  async componentDidMount() {
    await requestLocationPermission()
}

  

  render() {
      return (
        <View style={styles.flex}>
          <MapScreen />
          <PlaceScreen />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  flex: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
