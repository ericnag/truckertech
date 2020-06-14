import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  function handleNavigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.container}
        // imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.form}>
          <View style={styles.logo}>
            <Image source={require("../../assets/logo-login.png")} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#CF9387"
            value={null}
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#CF9387"
            value={null}
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>
        <Text style={styles.IForgotMyPassword}>Esqueci minha senha</Text>
        <RectButton style={styles.button} onPress={handleNavigateToHome}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <Text style={styles.CreateANewAccount}>Criar uma nova conta</Text>
        <Text style={styles.SignInWithoutAccount}>Entrar sem conta</Text>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  form: {
    marginTop: "30%",
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#9E280E",
    height: 60,
    marginHorizontal: 80,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  IForgotMyPassword: {
    color: "#FFFFFF",
    fontWeight: "bold",
    height: 20,
    marginLeft: 209,
    textDecorationLine: "underline",
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 25,
  },

  CreateANewAccount: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 180,
    marginLeft: 110,
    textDecorationLine: "underline",
  },

  SignInWithoutAccount: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 1,
    marginLeft: 125,
    textDecorationLine: "underline",
  },
});

export default Login;
