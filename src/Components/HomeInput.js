import React, {useState,useContext} from "react";
import { StyleSheet,View} from "react-native";
import {Input,Text} from 'react-native-elements'
import googleApi from '../Api/google'
import {Context as LocationContext} from '../Context/LocationContext'
import apiKey from '../google_api_key'
import _ from 'lodash'


const HomeInput = () => {
  
  const {state:{currentLocation,destinationName},addPredictions,setDestination} = useContext(LocationContext);
  
  if(!currentLocation){
    return null
  }

  const lat = currentLocation.coords.latitude,
       long = currentLocation.coords.longitude,
   location = lat +','+long;

  
  const getPredictions = async (dest) => {
    try {
      const response = await googleApi.get('/',{
        params: {
          key: "AIzaSyA7Dj7Uxfl6YWSMN8aVhgbEiYqF-hPiSD0",
          radius:2000,
          input: dest,
          location:location
        }
      })
      
      addPredictions(response.data.predictions)
    } catch (error) {
      console.log(error);
      
    }
  }


  const apiCallDebounce = _.debounce(getPredictions,1000)
  const onChangeDestination = (dest) => {
    setDestination(dest) 
    if (dest === ""){
      addPredictions([])
     }else{
     apiCallDebounce(dest) 
    }
  }
  

    
    return (
      <View>
        <Input
          placeholder="Destinition Please?"
          inputContainerStyle={styles.Input}
          value={destinationName}
          onChangeText={dest => onChangeDestination(dest)}
        />
      
      </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        borderWidth:1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 20,

    }
})
export default HomeInput