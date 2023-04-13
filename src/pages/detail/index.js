import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/ingredients";
import { Instructions } from "../../components/instructions";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.food
        ? route.params.food.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("TESTANDO")}>
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.food]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params?.food.cover }}
          style={styles.cover}
        />
      </Pressable>
      <View style={styles.headerDetail}>
        <View>
          <Text style={styles.title}>{route.params?.food.name}</Text>
          <Text style={styles.ingredientsText}>
            ingredientes ({route.params?.food.total_ingredients})
          </Text>
        </View>
        <Pressable>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.food.ingredients.map((item) => (
        <Ingredients key={item.id} ingredient={item} />
      ))}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>
      {route.params?.food.instructions.map((item) => (
        <Instructions key={item.id} instruction={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: { marginBottom: 14, fontSize: 16 },
  instructionsArea: {
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#FFF",
    marginRight: 8,
  },
});
