import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SellerHomeScreen } from "./src/screens/SellerHomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <SellerHomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f6f6f1",
    flex: 1,
  },
});

