import { View, Text, StyleSheet } from "react-native";

export function Instructions({ instruction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{instruction.id} - </Text>
      <Text style={styles.text}>{instruction.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    marginBottom: 14,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    lineHeight: 20,
  },
});
