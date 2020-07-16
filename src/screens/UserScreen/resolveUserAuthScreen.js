import React,{useEffect,useContext} from "react";
import { Text, StyleSheet, View } from "react-native";
import {Context as UserAuthContext} from '../../Context/AuthContext'

const resolveUserAuthScreen = ({ navigation }) => {
    const {tryUserLocalSignin} = useContext(UserAuthContext)
    useEffect(() => {
        tryUserLocalSignin()
    }, [])
  return null
};

const styles = StyleSheet.create({});

export default resolveUserAuthScreen;
