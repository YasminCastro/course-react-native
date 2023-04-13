import { View, Text, StyleSheet } from "react-native";

export function Ingredients({ ingredient }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ingredient.name}</Text>
      <Text>{ingredient.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 4,
  },
  name: {
    fontWeight: 500,
    fontSize: 16,
  },
});
