import React,{useContext} from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import AuthForm from '../../Components/AuthForm';
import {Context as AuthContext} from '../../Context/AuthContext'
import BottomShape from '../../../assets/BottomShape'
import NavLink from '../../Components/NavLink'
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  
  const {state,signUp,clearErrMsg} = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <NavigationEvents onDidFocus={clearErrMsg} />
      <BottomShape style={styles.shape} />
      <AuthForm
        errorMsg={state.errorMsg}
        additionalInputs
        header="Sign Up"
        btnText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        link
        routeName="UserSignin"
        text="Already have an Account? Sign In"
      />
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    title: "Sign up"
  };
}

const styles = StyleSheet.create({
  container: { height: "100%", justifyContent: "center" },
  shape: {
    zIndex: -1,
    position: "absolute",
    bottom: -270,
    left: -90
  },
});

export default SignupScreen;
