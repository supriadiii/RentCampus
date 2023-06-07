import React from "react";
import { StyleSheet, Text, View, Modal, Alert, TouchableOpacity } from "react-native";

// eslint-disable-next-line node/handle-callback-err
const ModalNim = ({ error, modalCeknimVisible, setModalCekNIM }: any) => {
  console.log("ini error: ", error);
  return (
    <View style={{ backgroundColor: "#000000" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCeknimVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalCekNIM(!modalCeknimVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat-Bold",
                  color: "red",
                }}>
                {error ? error.meta.message : ""}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textContent}>Pastikan kembali NIM dan password kamu benar</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => setModalCekNIM(!modalCeknimVisible)}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalNim;

const styles = StyleSheet.create({
  textContent: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
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
    color: "red",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingTop: 40,
  },
  modalView: {
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
