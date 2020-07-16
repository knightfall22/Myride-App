import '../../../_mockLocation'
import React,{useContext} from "react";
import { Text, StyleSheet, View,FlatList,TouchableOpacity } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from '../../Components/Map'
import {Context as UserLocationContext} from '../../Context/LocationContext'
import useLocation from '../../hooks/useLocation'
import useGetRoutes from '../../hooks/useGetRoutes'
import HomeInput from '../../Components/HomeInput'

const UserHomeScreen = ({ isFocused }) => {
  const { addLocation,state: {predictions}} = useContext(UserLocationContext),
  [err] = useLocation(isFocused, addLocation)
  
  
  let PredictionList = null
  
  if(predictions.length > 1){
    PredictionList = (     
    <FlatList 
      data={predictions} 
      renderItem= {({item}) => {
        return <TouchableOpacity onPress={console.log("hello")}>
          <View>
            <Text style={styles.list}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      }}
      keyExtractor={item => item.place_id}
    />)
  }
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Map />
      <HomeInput />
      {PredictionList}
    </SafeAreaView>
  );
};

UserHomeScreen.navigationOptions = () => {
  return {headerShown: true}
};

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width:'100%'
  },
  list: {
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 15,
    fontSize: 16,
    borderBottomWidth:.5,
    color: '#181818'
  }
});

export default withNavigationFocus(UserHomeScreen);
