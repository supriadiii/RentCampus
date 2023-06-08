import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "@rneui/base";
import React, { useState, useEffect } from "react";
import {
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FromAddRent = (props: any) => {
  const [nameInput, setName] = useState("");
  const [sortDeskripsi, setSortDeskripsi] = useState("");
  const [DeskripsiInput, setDeskripsiInput] = useState("");
  const [cpInput, setCpInput] = useState("");
  const [priceInput, setPrice] = useState("");
  const [quantityInput, setQuantity] = useState("");
  const [dataPost, setDataPost] = useState();
  const [error, setError] = useState("");

  const [user, setUser] = useState<any>({});
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
  const token = "Baerer " + user.token;
  const priceInputInt = parseInt(priceInput, 10);

  const handlePost = () => {
    fetch("http://103.52.115.184:8080/api/v1/create/rents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name: nameInput,
        sort_description: sortDeskripsi,
        description: DeskripsiInput,
        contact_person: cpInput,
        price: priceInputInt,
        quantity: parseInt(quantityInput, 10),
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 422) {
          const data = await response.json();
          setError(data);
          console.log("???????", data.data);
        } else {
          const data = await response.json();

          console.log("???????", data);

          throw new Error("Terjadi kesalahan saat melakukan permintaan.");
        }
      })
      .then(async (data) => {
        console.log("=====", data);
        if (data !== undefined) {
          setDataPost(data);
          props.navigation.replace("TabNavigation");
          return data;
        }
      })

      .catch((error) => {
        // Handle error saat menghubungi API
        console.log("sdasdasdsadwsd");
        console.error(error);
      });
  };
  console.log("ini data post", dataPost);
  console.log("ini eror post", error);
  console.log("ini eror ini user", user.token);
  console.log("ini eror ini token", token);
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.CountainerTitle}>
        <Text style={styles.TextTitle}>{"New Post"}</Text>
      </View>
      <ScrollView style={{ marginVertical: 20 }}>
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "white",
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <View>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
              <View
                style={{
                  width: 100,
                  aspectRatio: 1,
                  backgroundColor: "#221C1B",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}>
                <Text style={{ color: "white" }}>Pilih Foto</Text>
                <Icon name="camera" type="feather" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
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
                <TextInput
                  placeholder="Nama Barang"
                  onChangeText={(text) => setName(text)}
                  value={nameInput}
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
                <TextInput
                  placeholder="Deskripsi Singkat"
                  onChangeText={(text) => setSortDeskripsi(text)}
                  value={sortDeskripsi}
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
                <TextInput
                  style={{ flex: 1 }}
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  placeholder="Deskripsi Lengkap (seperi spesifikasi atau detail barang)"
                  onChangeText={(text) => setDeskripsiInput(text)}
                  value={DeskripsiInput}
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
                <TextInput
                  placeholder="Contact Person)"
                  onChangeText={(text) => setCpInput(text)}
                  value={cpInput}
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
                <TextInput
                  placeholder="Price"
                  onChangeText={(text) => setPrice(text)}
                  value={priceInput}
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
                <TextInput
                  placeholder="Quantity"
                  onChangeText={(text) => setQuantity(text)}
                  value={quantityInput}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => handlePost()}
                  style={{
                    backgroundColor: "#1AB5E1",
                    // width:,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>Posting</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FromAddRent;

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
});
