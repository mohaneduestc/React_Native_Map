import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';


class MapScreen extends Component {
  state={
    latitude: 0,
    logitude:0,
    error: null
  }

  // componentDidMount(){
  //   navigator.geolocation.getCurrentPosition(
  //     position =>{
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         error: null
  //       });
  //     },
  //     error => this.setState({ error: error.message}),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
  //   );
  // }
  
  render() {
    return (
      <View style={styles.flex}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.flex}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
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
