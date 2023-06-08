import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert } from "react-native";

const ModalSuccesRegister = ({
  props,
  respone,
  modalSuccessRegisterVisible,
  setModalSuccessRegister,
}: any) => {
  console.log("Modal succesfully registered", respone);
  return (
    <View style={{ backgroundColor: "#000000" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSuccessRegisterVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalSuccessRegister(!modalSuccessRegisterVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat-Bold",
                  color: "green",
                }}>
                Register Success
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon name="chevron-down-circle-outline" type="ionicon" size={100} color={"green"} />
              <Text style={styles.textContent}>{respone ? respone.meta.message : "sdsd"}</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "green",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => props.navigation.navigate("Login")}>
                <Text style={styles.textStyle}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalSuccesRegister;

const styles = StyleSheet.create({
  textContent: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "green",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    alignContent: "center",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    elevation: 2,
    backgroundColor: "red",
    justifyContent: "center",
  },
  textStyleButton: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  textStyle: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingTop: 40,
    minWidth: 200,
  },
  modalView: {
    minWidth: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textMaintenance: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    textAlign: "center",
  },
});
