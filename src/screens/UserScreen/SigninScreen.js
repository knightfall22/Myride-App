import React,{useContext} from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import AuthForm from "../../Components/AuthForm"
import {Context as AuthContext} from '../../Context/AuthContext'
import NavLink from '../../Components/NavLink'
import { NavigationEvents } from "react-navigation";
import SigninHeader from "../../../assets/SigninHeader.svg";

const SigninScreen = ({ navigation }) => {
  const { state, signIn,clearErrMsg } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <NavigationEvents onDidFocus={clearErrMsg} />
      <SigninHeader width="100%" height="20%" />
      <AuthForm
        errorMsg={state.errorMsg}
        header="Sign In"
        btnText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        link
        routeName="UserSignup"
        text="Don't have an Account? Sign Up"
      />
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    title: "Sign in",

  };
};
const styles = StyleSheet.create({
  container: { height: "100%", justifyContent: "center" },
});

export default SigninScreen;
