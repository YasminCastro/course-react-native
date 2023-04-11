import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Entypo } from "@expo/vector-icons";

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
