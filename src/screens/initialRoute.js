import React from "react";
import { StyleSheet, View } from "react-native";
import {Button,Text} from 'react-native-elements'
import { SafeAreaView } from "react-navigation";

const InitialRoute = ({ navigation }) => {
    const DriverNavigate = () => navigation.navigate("driverLoginFlow");
    const UserNavigate = () => navigation.navigate("UserResolve");
    
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <Text>Intial Route</Text>
        <Button title="Go to Driver Page" onPress={DriverNavigate} />
        <Button title="Go to User Page" onPress={UserNavigate} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default InitialRoute;
