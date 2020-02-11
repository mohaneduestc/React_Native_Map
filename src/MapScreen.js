import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class MapScreen extends Component {
  state={
    latitude: 0,
    logitude:0,
    error: null
  }

  componentDidMount(){
    this.clearWatchId = Geolocation.getCurrentPosition(info => 
        this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                })
    )

  }

  componentWilUnmount(){
    Geolocation.clearWatch(this.clearWatchId)
  }
  
  render() {
    return (
      <View style={styles.flex}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.flex}
      initialRegion={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      followsUserLocation // not work in android
    />
    
    {/* <Marker coordinate={this.state} /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
