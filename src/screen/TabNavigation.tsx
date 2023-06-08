import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Home";
import Notifikasi from "./Notifikasi";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
const TabNavigation = (props: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 25,
          backgroundColor: "#ffffff",
          borderRadius: 16,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 15,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        children={() => <Home props={props} />}
        options={{
          tabBarIcon: HomeMenu,
        }}
      />
      <Tab.Screen
        name="Voucher"
        children={() => <Notifikasi props={props} />}
        options={{
          tabBarIcon: NotificationMenu,
        }}
      />
      {/* <Tab.Screen
        name="Bookings"
        children={() => <BookingsScreen props={props} />}
        options={{
          tabBarIcon: BookingsMenu,
        }}
      />
      <Tab.Screen
        name="Notification"
        children={() => <NotificationScreen props={props} />}
        options={{
          tabBarIcon: NotificationMenu,
        }}
      /> */}
      <Tab.Screen
        name="Account"
        children={() => <Profile props={props} />}
        options={{
          tabBarIcon: AccountMenu,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const HomeMenu = ({ focused }: any) => {
  return (
    <View style={focused ? style.viewStyle : style.viewStyle2}>
      <Icon name="home" type="antdesign" size={25} color={focused ? "white" : "#18A6E3"} />
      {/* <Text style={focused ? style.textFocus : style.textNoFocus}>{"HOME"}</Text> */}
    </View>
  );
};

// const VoucherMenu = ({ focused }: any) => {
//   return (
//     <View style={focused?style.viewStyle:style.viewStyle2}>
//       <Icon
//         name="ticket-confirmation-outline"
//         type="material-community"
//         size={25}
//         color={focused ? SeindoColor.seindoRed : SeindoColor.seindoGray}
//       />
//       <Text style={focused ? style.textFocus : style.textNoFocus}>{t("VOUCHER")}</Text>
//     </View>
//   );
// };

// const BookingsMenu = ({ focused }: any) => {
//   const { t } = useTranslation();
//   return (
//     <View style={focused?style.viewStyle:style.viewStyle2}>
//       <Icon
//         name="calendar"
//         type="antdesign"
//         size={25}
//         color={focused ? SeindoColor.seindoRed : SeindoColor.seindoGray}
//       />
//       <Text style={focused ? style.textFocus : style.textNoFocus}> {t("BOOKINGS")}</Text>
//     </View>
//   );
// };

const NotificationMenu = ({ focused }: any) => {
  return (
    <View style={focused ? style.viewStyle : style.viewStyle2}>
      <Icon
        name="notifications-outline"
        type="ionicon"
        size={25}
        color={focused ? "white" : "#18A6E3"}
      />
      {/* <Text style={focused ? style.textFocus : style.textNoFocus}>{"NOTIFICATION"}</Text> */}
    </View>
  );
};

const AccountMenu = ({ focused }: any) => {
  return (
    <View style={focused ? style.viewStyle : style.viewStyle2}>
      <Icon name="person-outline" type="ionicon" size={25} color={focused ? "white" : "#18A6E3"} />
      {/* <Text style={focused ? style.textFocus : style.textNoFocus}> {"ACCOUNT"}</Text> */}
    </View>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  viewStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    backgroundColor: "#1AB5E1",
    padding: 10,
    borderRadius: 15,
  },
  viewStyle2: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    // backgroundColor: "#1AB5E1",
    padding: 10,
    borderRadius: 15,
  },
  //   textFocus: {
  //     paddingTop: 4,
  //     fontFamily: "Montserrat-Regular",
  //     fontSize: 8,
  //     color: SeindoColor.seindoRed,
  //   },
  //   textNoFocus: {
  //     paddingTop: 4,
  //     fontFamily: "Montserrat-Regular",
  //     fontSize: 8,
  //     color: SeindoColor.seindoGray,
  //   },
});
