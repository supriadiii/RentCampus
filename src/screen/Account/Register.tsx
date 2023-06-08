import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import ModalFailedRegister from "./componenRegister/ModalFailedRegister";
import ModalSuccesRegister from "./componenRegister/ModalSuccesRegister";

const Register = (props: any) => {
  const [namaInput, setNamaInput] = useState("");
  const [nimInput, setNimInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [kelasInput, setKelasInput] = useState("");
  const [prodiInput, setProdiInput] = useState("");
  const [noHpInput, setNoHpInput] = useState("");
  const nimUnimed = parseInt(nimInput, 10);
  const [error, setError] = useState();
  const [modalErrorRegister, setModalErrorRegister] = useState(false);
  const [success, setSuccess] = useState(false);
  const [responeSuccess, setResponeSuccess] = useState();
  const HandleRegister = () => {
    fetch("http://103.52.115.184:8080/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: namaInput,
        nim: nimUnimed,
        password: passwordInput,
        kelas: kelasInput,
        prodi: prodiInput,
        no_hp: noHpInput,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 422) {
          const data = await response.json();
          setError(data);
          setModalErrorRegister(true);
          console.log("???????", data.data);
        } else {
          const data = await response.json();
          setModalErrorRegister(true);
          setError(data);
          console.log("???????fggfg", data.data);
        }
      })
      .then(async (data) => {
        console.log("=====", data);
        if (data !== undefined) {
          console.log("dataregister", data);
          setResponeSuccess(data);
          setSuccess(true);
        }
      })
      .catch((error) => {
        // Handle error saat menghubungi API
        console.log("sdasdasdsadwsd");
        console.error(error);
      });
  };
  console.log(
    "ini adalah data \n nama: ",
    namaInput,
    "\n nim",
    nimInput,
    "\n password :",
    passwordInput,
    "\n kelas",
    kelasInput,
    "\n prodi :",
    prodiInput,
    "\n no hp :",
    noHpInput
  );
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 20,
          padding: 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
        }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../../assets/login/ilustrasiLogin.png")}
        />
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
          height: 500,
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
            Register
          </Text>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 40,
              width: 300,
            }}>
            {/* name */}
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
                placeholder="Name"
                onChangeText={(text) => setNamaInput(text)}
                value={namaInput}
                // secureTextEntry={true}
              />
            </View>
            {/* nim */}
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
              <Image source={require("../../../assets//iconNim.png")} />
              <TextInput
                placeholder="Nomor Induk Mahasiswa"
                onChangeText={(text) => setNimInput(text)}
                value={nimInput}
                keyboardType="numeric"
              />
            </View>
            {/* password */}
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
              <Image source={require("../../../assets/login/iconPassword.png")} />
              <TextInput
                placeholder="Password"
                onChangeText={(text) => setPasswordInput(text)}
                value={passwordInput}
                secureTextEntry={true}
              />
            </View>
            {/* KELAS */}
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
              <Image source={require("../../../assets/iconkelas.png")} />
              <TextInput
                placeholder="Kelas"
                onChangeText={(text) => setKelasInput(text)}
                value={kelasInput}
              />
            </View>
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
              <Image source={require("../../../assets/iconprodi.png")} />
              <TextInput
                placeholder="Prodi"
                onChangeText={(text) => setProdiInput(text)}
                value={prodiInput}
              />
            </View>
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
              <Image source={require("../../../assets/iconhp.png")} />
              <TextInput
                keyboardType="numeric"
                placeholder="No WhatsApp"
                onChangeText={(text) => setNoHpInput(text)}
                value={noHpInput}
              />
            </View>
          </View>
          {/* BUTTON LOGIN */}
          <TouchableOpacity
            onPress={() => HandleRegister()}
            style={{
              backgroundColor: "#1AB5E1",
              paddingVertical: 10,
              paddingHorizontal: 80,
              borderRadius: 15,
              width: "100%",
            }}>
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Sudah memiliki akun? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text style={styles.registerButtonText}>Silahkan Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ModalFailedRegister
          props={props}
          error={error}
          modalErrorRegisterVisible={modalErrorRegister}
          setmodalErrorRegister={setModalErrorRegister}
        />
      </View>
      <View>
        <ModalSuccesRegister
          props={props}
          respone={responeSuccess}
          modalSuccessRegisterVisible={success}
          setModalSuccessRegister={setSuccess}
        />
      </View>
    </View>
  );
};

export default Register;

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
