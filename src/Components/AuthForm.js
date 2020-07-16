import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/Feather";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import NavLink from "./NavLink"

const AuthForm = ({additionalInputs,header,btnText,errorMsg,onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setNumber] = useState(null);

  const passwordValidation = password.length < 6 ? 'Password is too small' : null;
  
  const inputs = (
    <>
      <Spacer>
        <Input
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full Name"
          leftIcon={<FontAwesome name="user" style={styles.icon} />}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          value={phoneNumber}
          onChangeText={setNumber}
          placeholder="Phone Number"
          leftIcon={<FontAwesome name="phone" style={styles.icon} />}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </Spacer>
    </>
  );

  return (
    <View>
      <Text h3 style={styles.header}>
        {header}
      </Text>
      <View style={styles.underline}></View>
      {errorMsg ? (
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      ) : (
        <Text style={styles.subText}>Please input your credentials.</Text>
      )}

      {additionalInputs ? inputs : null}

      <Spacer>
        <Input
          autoCapitalize={"none"}
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          leftIcon={<FontAwesome name="mail" style={styles.icon} />}
        />
      </Spacer>
      <Spacer>
        <Input
          errorMessage={password != "" ? passwordValidation : null}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
          leftIcon={<FontAwesome name="lock" style={styles.icon} />}
        />
      </Spacer>
      {additionalInputs ?
        <NavLink 
          routeName="UserSignin"
          text="By Continuing, I confirm that i have read & agree to the Terms, Conditions and Privacy policy."
        /> : null
      }

      <Spacer>
        <Button
          title={btnText}
          buttonStyle={{ backgroundColor: "#15A2CD" }}
          onPress={() => onSubmit({ email, fullName, phoneNumber, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    width: 42,
    height: 4,
    backgroundColor: "#15A2CD",
    marginLeft: 23,
    marginBottom: 12,
  },
  header: {
    color: "#181818",
    marginLeft: 23,
    marginBottom: 5,
  },

  subText: {
    marginLeft: 23,
    marginBottom: 20,
    color: "#525252",
  },
  icon: {
    fontSize: 22,
    marginLeft: -15,
    marginRight: 13,
    color: "#525252",
  },
  errorMsg: {
    color: "red",
    marginLeft: 23,
    marginBottom: 20,
  },
  color:{
    color:'#181818'
  },

});

export default AuthForm;
