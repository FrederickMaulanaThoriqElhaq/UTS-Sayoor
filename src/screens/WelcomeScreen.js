import React from "react";
import { Content, Text, Button, Center } from "native-base";
import { Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Center style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/welcome1.png")}
        style={{ marginTop: 30 }}
      />

      <Text style={{ color: "#93CC15", fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Screen Resep aplikasi Sayoor
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#3c444c",
          marginBottom: 40,
          textAlign: "center"
        }}
      >
        Dapatkan resep dari bahan masakan anda
      </Text>

      <Button
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#93CC15",
          borderRadius: 18,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 18,
		  marginBottom: 20
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700", }}>
          Let's Go
        </Text>
      </Button>

	  <Button
        onPress={() => navigation.navigate("About")}
        style={{
          backgroundColor: "#93CC15",
          borderRadius: 18,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 18,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          About
        </Text>
      </Button>
		
    </Center>
  );
};

export default WelcomeScreen;