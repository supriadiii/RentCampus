import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Login from "./src/screen/Account/Login";
import Register from "./src/screen/Account/Register";
import Detail from "./src/screen/Detail";
import Home from "./src/screen/Home";
import Notifikasi from "./src/screen/Notifikasi";
import Profile from "./src/screen/Profile";
import FromAddRent from "./src/screen/Rent/FromAddRent";
import TabNavigation from "./src/screen/TabNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    Poppins_Black: require("./assets/fonts/Poppins-Black.ttf"),
    Poppins_BlackItalic: require("./assets/fonts/Poppins-BlackItalic.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_BoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    Poppins_ExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    Poppins_ExtraLightItalic: require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"),
    Poppins_Light: require("./assets/fonts/Poppins-Light.ttf"),
    Poppins_LightItalic: require("./assets/fonts/Poppins-LightItalic.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_MediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_SemiBoldItalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    Poppins_Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    Poppins_ThinItalic: require("./assets/fonts/Poppins-Black.ttf"),
  });
};

export default function App(props: any) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontLoaded(true);
    };

    const checkSession = async () => {
      try {
        const data = await AsyncStorage.getItem("userData");
        console.log(data); // Perbarui kunci menjadi "userData"
        if (data !== null) {
          setUser(JSON.parse(data));
          // return data;
        } else {
          setUser("undefined");
        }
      } catch (error) {
        console.error("Error retrieving user session", error);
      }
    };

    loadFonts();
    checkSession();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  const Stack = createNativeStackNavigator();
  console.log("data user di app", user);
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user !== "undefined" ? "TabNavigator" : "Login"}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Notifikasi" component={Notifikasi} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="FromAddRent" component={FromAddRent} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
