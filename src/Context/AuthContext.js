import createDataContext from "./createDataContext";
import myrideApi from "../Api/myride";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMsg: action.payload };
    case "signin":
      return { errorMsg: "", token: action.payload };
    case "signout":
      return { token: null, errorMsg: "" };
    case "driversignin":
      return { errorMsg: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMsg: "" };
    default:
      return state;
  }
};

const clearErrMsg = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signUp = (dispatch) => async ({ fullName,email,phoneNumber ,password }) => {
  try {
    const response = await myrideApi.post("/user/signup", {
      fullName,
      email,
      phoneNumber,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("UserHome");
  } catch (err) {
    console.log(err);

    dispatch({
      type: "add_error",
      payload: err.response.data.error,
    });
  }
};

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const response = await myrideApi.post("/user/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("UserHome");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: err.response.data.error,
    });
  }
};
const DriverSignIn = (dispatch) => async ({ email, password }) => {
  try {
    const response = await myrideApi.post("/driver/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "driversignin", payload: response.data.token });

    navigate("DriverHome");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: err.response.data.error,
    });
  }
};

const tryUserLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("UserHome");
  } else {
    navigate("userLoginFlow");
  }
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("userLoginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrMsg, tryUserLocalSignin,DriverSignIn },
  {
    token: null,
    errorMsg: "",
  }
);
