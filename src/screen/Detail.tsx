import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, Linking } from "react-native";
import { SvgUri } from "react-native-svg";

const Detail = (props: any) => {
  console.log({ props });
  const openWhatsAppChat = (item: any) => {
    const phoneNumber = item.no_hp; // Replace with the desired phone number
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url);
  };
  return (
    <View>
      <View
        style={{
          margin: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 20,
          gap: 5,
          marginTop: 80,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "white",
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image style={{ width: 30, height: 30 }} source={require("../../assets/iconRent.png")} />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{props.route.params.item.user.name}</Text>
            <Text>{props.route.params.item.user.kelas}</Text>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Image
            style={{ width: "100%", backgroundColor: "blue", borderRadius: 15 }}
            source={require("../../assets/dan-nelson-ah-HeguOe9k-unsplash.jpg")} // Perhatikan penggunaan uri di sini
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{props.route.params.item.name}</Text>
          <Text>{props.route.params.item.sort_direction}</Text>
          <Text>{props.route.params.item.description}</Text>
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
              props.route.params.item.price
            )}
            /hari
          </Text>

          <TouchableOpacity onPress={() => openWhatsAppChat(props.route.params.item.item)}>
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
          {/* <TouchableOpacity onPress={() => openWhatsAppChat(item)}>
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
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
