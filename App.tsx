import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Login from "./src/screen/Account/Login";
import Home from "./src/screen/Home";

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

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
