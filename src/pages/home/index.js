import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text as MotiText } from "moti";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Logo } from "../../components/logo";
import api from "../../services/api";
import { FoodList } from "../../components/foodList";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (!inputValue) {
      return;
    }

    setInputValue("");
    navigation.navigate("Search", { name: inputValue });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/foods");
      setFoods(response.data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 100, type: "timing", duration: 650 }}
      >
        Econtre a receita
      </MotiText>
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 18 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200, type: "timing", duration: 850 }}
      >
        que combina com você
      </MotiText>
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

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList food={item} />}
        showsVerticalScrollIndicator={false}
      />
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
