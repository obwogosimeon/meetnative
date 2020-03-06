// @ts-ignore
import { GoogleSignin } from "react-native-google-signin";
import ReduxSagaFirebase from "redux-saga-firebase";
import firebase from "react-native-firebase";

export const googleConfigure = () => {
  GoogleSignin.configure({
    webClientId:
      "1099284042139-se86mnaec4kufau976fq80ghauatkrur.apps.googleusercontent.com"
    //"652473972799-po79i7jn44v653lo2oia868ncfd4srod.apps.googleusercontent.com"
  });
};

export const firesaga = new ReduxSagaFirebase(firebase);
