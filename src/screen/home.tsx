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
  Linking,
} from "react-native";
import SendIntent from "react-native-send-intent";
import { SvgUri } from "react-native-svg";

import Detail from "./Detail";

const Home = (props: any) => {
  const [user, setUser] = useState<any>({});
  const [rentals, setRentals] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://103.52.115.184:8080/api/v1/rents");
        const data = await response.json();
        setRentals(data.data);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Panggil API setiap 5 detik (5000 milidetik)

    return () => {
      clearInterval(intervalId); // Hentikan interval saat komponen unmount
    };
  }, []);
  const openWhatsAppChat = (item: any) => {
    const phoneNumber = item.no_hp; // Replace with the desired phone number
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url);
  };
  const navigateToDetail = (item: any) => {
    props.props.navigation.navigate("Detail", { item });
  };
  console.log("ini user", { user });
  console.log("ini props", { props });
  console.log("ini rentals", { rentals });
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.CountainerTitle}>
        <Text style={styles.TextTitle}>{"Home"}</Text>
      </View>
      <ScrollView>
        {rentals.map((item: any, index: number) => (
          <View
            key={index}
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
                <Text style={{ fontWeight: "bold" }}>{item.user.name}</Text>
                <Text>{item.user.kelas}</Text>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Image
                style={{ width: "100%", backgroundColor: "blue", borderRadius: 15 }}
                source={require("../../assets/dan-nelson-ah-HeguOe9k-unsplash.jpg")} // Perhatikan penggunaan uri di sini
              />
              <SvgUri width={25} height={25} uri={item.image_url} style={{ marginRight: 10 }} />
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
              <Text>{item.sort_direction}</Text>
              {/* <Text>Deskription</Text> */}
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Text style={{ fontWeight: "bold" }}>
                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
                  item.price
                )}
                /hari
              </Text>

              <TouchableOpacity onPress={() => openWhatsAppChat(item)}>
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
            <TouchableOpacity onPress={() => navigateToDetail(item)}>
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
                <Text style={{ fontWeight: "500", color: "white" }}>Detail</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
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
