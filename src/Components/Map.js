import React, { useContext } from "react";
import {StyleSheet,ActivityIndicator} from "react-native";
import MapView, { Polyline, Circle,Marker } from "react-native-maps";
import {Context as LocationContext} from '../Context/LocationContext'

const Map = ({navigation}) => {
  const {state:{currentLocation,pointCoords}} = useContext(LocationContext)
  
  if(!currentLocation){
    return <ActivityIndicator 
              size="large" 
              color="#15A2CD" 
              style={{marginTop:300}}
          />;
  }

  const mark = null

  if(pointCoords.length > 1){
      mark = (
        <Marker coordinate={pointCoords[pointCoords.length - 1]} />
    )
  } 
  return (
  
    <MapView
      //zoom out ref={map => {this.map = map}}
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle 
        center={currentLocation.coords}
        radius={50}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline
        coordinates={pointCoords}
        strokeWidth={2}
        strokeColor="red"
      ></Polyline>
      {mark}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
});

export default Map;