import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({children}) => {
    return <View style={styles.Spacer}>{children}</View>
}

const styles = StyleSheet.create({
    Spacer: {
       marginHorizontal: 10,
       marginBottom: 25
    }
})

export default Spacer;