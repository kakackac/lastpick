import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ConsumerHomeScreen } from "./src/screens/ConsumerHomeScreen";
import { SellerHomeScreen } from "./src/screens/SellerHomeScreen";
import { RoleSwitcher, type UserMode } from "./src/components/RoleSwitcher";

export default function App() {
  const [mode, setMode] = useState<UserMode>("consumer");

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <RoleSwitcher mode={mode} onChange={setMode} />
      {mode === "consumer" ? <ConsumerHomeScreen /> : <SellerHomeScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f7f7f2",
    flex: 1,
  },
});

