import React, { Component } from 'react';
import { View, Text , TextInput, StyleSheet} from 'react-native';
import axios from 'axios';


let APIKEY = 'AIzaSyD4m2MFW7q1gFRPagz8-DHgIUr6s4vqoCU'
let place ='bakar mosque'

class PlaceScreen extends Component {
  state={
    input:'',
    predictions:[]
  }
  async getPlaces(input){
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=${APIKEY}&location=15.672960, 32.485888&radius=5000`
    )
    .then(res =>console.log(res.data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <TextInput 
      onChangeText={input => this.getPlaces(input)}
        style = {styles.placeInputStyle}
        placeholder='Where you want to go?' />
    );
  }
}

const styles = StyleSheet.create({
  placeInputStyle:{
    height:40,
    backgroundColor:'white',
    marginTop:50,
    padding:5
  }
});

export default PlaceScreen;
