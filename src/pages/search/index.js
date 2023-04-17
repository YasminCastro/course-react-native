import { View, StyleSheet, FlatList, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FoodList } from "../../components/foodList";

export function Search() {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const fetch = await api.get(`/foods?name_like=${route.params?.name}`);

      setReceipes(fetch.data);
    }

    fetchRecipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList food={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>
            Não encontramos o que está buscando...
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f9ff",
    flex: 1,
    padding: 14,
  },
  text: {
    fontSize: 16,
  },
});
