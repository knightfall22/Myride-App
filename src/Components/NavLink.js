import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName,link }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        {link ? <Text style={styles.link}>{text}</Text> : <Text style={styles.term}>{text}</Text>}
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  term: {
    fontSize: 13,
    color: "#7F7F7F",
    textAlign: "center",
  },
  link: {
    fontSize: 14,
    color: "#15A2CD",
    textAlign: "center",
  },
});

export default withNavigation(NavLink);
