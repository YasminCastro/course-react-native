import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Logo } from "../../components/logo";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    console.log("VOCÊ CLICOU AQUI");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.title}>Econtre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(value) => {
            setInputValue(value);
          }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6C" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ECECEC",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
    height: 54,
  },
});
