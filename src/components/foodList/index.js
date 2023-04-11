import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export function FoodList({ food }) {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("Detail", { food });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={handleNavigate}
    >
      <Image source={{ uri: food.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.name}>{food.name}</Text>
        <Text style={styles.description}>
          {food.total_ingredients} ingredientes | {food.time} minutos{" "}
        </Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={["transparent", "rgba(0,0,0,0.70)", "rgba(0,0,0,0.95)"]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  cover: { width: "100%", height: 200, borderRadius: 14 },
  info: {
    position: "absolute",
    bottom: 14,
    left: 14,
    zIndex: 99,
  },

  name: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: "transparent",
  },
});
