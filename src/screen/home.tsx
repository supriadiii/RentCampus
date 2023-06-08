import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = (props: any) => {
  const [user, setUser] = useState({});
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
  console.log("ini user", { user });
  console.log("ini props", { props });
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.CountainerTitle}>
        <Text style={styles.TextTitle}>{"Home"}</Text>
      </View>
      <ScrollView>
        <View
          style={{
            margin: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 20,
            gap: 5,
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "white",
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/iconRent.png")}
            />
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Nama user</Text>
              <Text>Pendididikan Informatika dan Komputer</Text>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", backgroundColor: "blue", borderRadius: 15 }}
              source={require("../../assets/login/ilustrasiLogin.png")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Nama barang</Text>
            <Text>Sort deskripsi</Text>
            <Text>Deskription</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Rp. harga</Text>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#1AB5E1",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 7,
                }}>
                <Image
                  style={{ height: 12, width: 12 }}
                  source={require("../../assets/iconSewa.png")}
                />
                <Text style={{ fontWeight: "500", color: "white" }}>Sewa</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 20,
            gap: 5,
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "white",
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/iconRent.png")}
            />
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Nama user</Text>
              <Text>Pendididikan Informatika dan Komputer</Text>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", backgroundColor: "blue", borderRadius: 15 }}
              source={require("../../assets/login/ilustrasiLogin.png")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Nama barang</Text>
            <Text>Sort deskripsi</Text>
            <Text>Deskription</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Rp. harga</Text>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#1AB5E1",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 7,
                }}>
                <Image
                  style={{ height: 12, width: 12 }}
                  source={require("../../assets/iconSewa.png")}
                />
                <Text style={{ fontWeight: "500", color: "white" }}>Sewa</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 140 }}></View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 110, right: 20 }}>
        <TouchableOpacity
          onPress={() => props.props.navigation.navigate("FromAddRent")}
          style={{
            backgroundColor: "white",
            width: 50,
            height: 50,
            justifyContent: "center",
            borderRadius: 15,
          }}>
          <Icon name="plus" type="feather" size={25} color="#18A6E3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

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
