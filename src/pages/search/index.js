import { View, Text, StyleSheet } from "react-native";

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Pagina Buscar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 400,
  },
});
