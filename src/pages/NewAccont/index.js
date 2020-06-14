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
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const NewAccont = () => {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
        <ImageBackground
            style={styles.container}
        >
        <ScrollView style={styles.form}>
            <View style={styles.logo}>
                <Image source={require("../../assets/logo-login.png")} />
            </View>

            <Text style={styles.formTitle}>Dados Pessoais</Text>

            <Text style={styles.subtitlesForm}>Campos obrigatórios*</Text>

            <TextInput
            style={styles.input}
            placeholder="Nome*"
            placeholderTextColor="#CF9387"
            value={null}
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Email*"
            placeholderTextColor="#CF9387"
            value={null}
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha*"
            placeholderTextColor="#CF9387"
            value={null}
            autoCorrect={false}
          />

          <Text style={styles.formTitle}>Histórico de Saúde</Text>

          <Text style={styles.subtitlesForm}>Você possui algum tipo de doença crônica?</Text>

          <Text style={styles.formTitle}>Medicamentos</Text>

          <Text style={styles.subtitlesForm}>Quais medicamentos você faz uso?</Text>

          <TextInput
            style={styles.input}
            placeholder="Medicamento"
            placeholderTextColor="#CF9387"
            value={null}
            autoCorrect={false}
          />

          <RectButton style={styles.buttonAccount}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>

        </ScrollView>
        </ImageBackground>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      backgroundColor: "#E8EEF0",
    },
    logo: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 30,
      },
    
    form: {
        marginTop: "30%",
    },

    formTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 8,
        marginTop: 10,
    },

    subtitlesForm: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 14,
        paddingHorizontal: 24,
        fontSize: 16,
    },
  
    
  buttonAccount: {
    backgroundColor: "#9E280E",
    height: 60,
    marginHorizontal: 80,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 50,
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 25,
  },
});


export default NewAccont;