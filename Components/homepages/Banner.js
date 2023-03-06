import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map1 from "../homepages/Map1";


export default class Banner extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#2E8D57",
              height: 90,
              width: 300,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 45,
                fontStyle: "italic",
                color: "#fff",
              }}
            >
            
              feastpure
            </Text>
            <View>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  left: 70,
                  top: 12,
                }}
                source={require("../Image/Feasty.png")}
              />
            </View>
          </View>
        </View>
        <View>

          <Map1/>
        </View>
      </View>
    );
  }
}
