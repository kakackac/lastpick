import { FlatList, StyleSheet, Text, View } from "react-native";
import { BoxCard } from "../components/BoxCard";
import { mockBoxes } from "../data/mockBoxes";

export function ConsumerHomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>오늘 픽업 가능</Text>
        <Text style={styles.title}>내 근처 마감박스</Text>
        <Text style={styles.subtitle}>퇴근길에 바로 픽업할 수 있는 신선식품을 모았어요.</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={mockBoxes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BoxCard box={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eyebrow: {
    color: "#2f7d4f",
    fontSize: 13,
    fontWeight: "800",
  },
  hero: {
    gap: 6,
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  list: {
    gap: 12,
    padding: 20,
  },
  subtitle: {
    color: "#5d6460",
    fontSize: 14,
  },
  title: {
    color: "#141815",
    fontSize: 28,
    fontWeight: "900",
  },
});

