import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Login = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image source={require("../../../assets/login/ilustrasiLogin.png")} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          paddingVertical: 20,
          paddingHorizontal: 40,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
          //   flex: 1,
          height: 321,
        }}>
        <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            gap: 20,
            // backgroundColor: "red",
            flex: 1,
          }}>
          <Text style={{ color: "#1AB5E1", fontWeight: "bold", fontSize: 16, lineHeight: 24 }}>
            Login
          </Text>
          <View style={{ backgroundColor: "white", borderRadius: 20, padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                gap: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#B2B2B2",
              }}>
              <Image source={require("../../../assets/login/iconPeople.png")} />
              <TextInput>Nomor Induk Mahasiswa</TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                gap: 10,
              }}>
              <Image source={require("../../../assets/login/iconPeople.png")} />
              <TextInput>Nomor Induk Mahasiswa</TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#1AB5E1",
              paddingVertical: 10,
              paddingHorizontal: 80,
              borderRadius: 15,
              width: "100%",
            }}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Belum memiliki akun? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
              <Text style={styles.registerButtonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    textAlignVertical: "center",
    alignSelf: "center",
  },
  registerText: {
    fontFamily: "Poppins_Regular",
  },
  registerButtonText: {
    fontFamily: "Poppins_Regular",
    color: "#1AB5E1",
  },
});

export default Login;
