import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, Image } from "react-native";

const Profile = (props: any) => {
  const [user, setUser] = useState<any>({});
  const logout = async () => {
    try {
      // Clear the user data from AsyncStorage
      const userdata = await AsyncStorage.removeItem("userData");
      console.log("asdad", { userdata });
      // Update the state variable to reflect that the user is logged out
      if (userdata === undefined) {
        props.props.navigation.replace("Login");
        setUser(null);
      }
    } catch (error) {
      // There was an error logging out, handle it here
      console.error(error);
    }
  };
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await AsyncStorage.getItem("userData");
        if (session !== null) {
          setUser(JSON.parse(session));
        }
      } catch {}
    };
    checkSession();
  }, []);
  console.log({ props });
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.CountainerTitle}>
        <Text style={styles.TextTitle}>{"Home"}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", padding: 50 }}>
        <Image source={require("../../assets/ilustrasiprofile.png")} />
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 20,
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderRadius: 15,
          gap: 15,
        }}>
        <Text style={styles.styleText}>{user.name}</Text>
        <Text style={styles.styleText}>{user.nim}</Text>
        <Text style={styles.styleText}>{user.kelas}</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={styles.styleText2}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  TextTitle: {
    fontFamily: "Montserrat-Bold",
    color: "#1AB5E1",
    fontSize: 25,
    fontWeight: "bold",
  },
  CountainerTitle: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    // justifyContent: "start",
    alignItems: "center",
    paddingBottom: 25,
    backgroundColor: "white",
  },
  styleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  styleText2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
});
