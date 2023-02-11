import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 22, alignSelf: "center", marginVertical: 24 }}>
        Higly Secured Transaction
      </Text>

      <View style={{ marginVertical: 24 }}>
        <Text style={{ fontSize: 22, paddingVertical: 12 }}>Card Number</Text>
        <View
          style={{
            borderColor: "#000",
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            justifyContent: "center",
            borderRadius:5
          }}
        >
          <TextInput
            style={{ fontSize: 20 }}
            placeholder="**********"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ paddingVertical: 12, fontSize: 22 }}>Expiry</Text>
          <View
            style={{
              borderColor: "#000",
              borderWidth: 1,
              paddingHorizontal: 20,
              height: 45,
              justifyContent: "center",
              borderRadius:5
            }}
          >
            <TextInput
              style={{ fontSize: 18 }}
              placeholder="MM/YY"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ paddingVertical: 12, fontSize: 22 }}>CVV</Text>
          <View
            style={{
              borderColor: "#000",
              borderWidth: 1,
              paddingHorizontal: 20,
              height: 45,
              justifyContent: "center",
              borderRadius:5
            }}
          >
            <TextInput
              style={{ fontSize: 18 }}
              placeholder="***"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#0e3092", marginVertical: 70, marginHorizontal:25, borderRadius:10 }}>
        <Text
          style={{
            alignSelf: "center",
            padding: 15,
            fontSize: 20,

            color: "white",
          }}
        >
          Pay ₦30,000
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Ionicons name="lock-closed-outline" size={32} />
        <Text style={{ fontSize: 16 }}>Secured by Paystack</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
