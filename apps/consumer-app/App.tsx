import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f7f7f2",
    flex: 1,
  },
});

