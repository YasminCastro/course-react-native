import { View, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.food
        ? route.params.food.name
        : "Detalhes da receita",
    });
  }, [navigation, route.params?.food]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.food.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: 400,
  },
});
