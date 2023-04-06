import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Logo } from "../../components/logo";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
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
});
