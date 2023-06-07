import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import ModalNim from "./componenLogin/ModalNim";

const Login = (props: any) => {
  const [nimInput, setNimInput] = useState("Nomor Induk Mahasiswa");
  const [passwordInput, setpasswordInput] = useState("password");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const nimUnimed = parseInt(nimInput, 10);
  const [modalCeknimVisible, setModalCekNIM] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlerLogin = () => {
    setLoading(true);
    fetch("http://103.52.115.184:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nim: nimUnimed,
        password: passwordInput,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 422) {
          const data = await response.json();
          setError(data);
          setModalCekNIM(true);
          console.log("???????", data.data);
        } else {
          throw new Error("Terjadi kesalahan saat melakukan permintaan.");
        }
      })
      .then(async (data) => {
        console.log("=====", data);
        if (data !== undefined) {
          await AsyncStorage.setItem("session", data.data.token);
          await AsyncStorage.setItem("userData", data.data);
          setUser(data);
          // props.navigation.replace("Home");
        }
      })
      .catch((error) => {
        // Handle error saat menghubungi API
        console.log("sdasdasdsadwsd");
        console.error(error);
      });
  };

  console.log("nim", props);
  console.log("error", error);
  console.log("pass", passwordInput);
  console.log("====", { user });

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
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 40,
              width: 300,
            }}>
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
              <TextInput
                // autoComplete="Nomor induk mahasiswa",
                onChangeText={(text) => setNimInput(text)}
                value={nimInput}
                // secureTextEntry={true}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 10,
                gap: 10,
              }}>
              <Image source={require("../../../assets/login/iconPassword.png")} />
              <TextInput
                autoComplete="password"
                secureTextEntry={true}
                onChangeText={(text) => setpasswordInput(text)}
                value={passwordInput}></TextInput>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handlerLogin()}
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
            <TouchableOpacity>
              <Text style={styles.registerButtonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ModalNim
          error={error}
          modalCeknimVisible={modalCeknimVisible}
          setModalCekNIM={setModalCekNIM}
        />
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
