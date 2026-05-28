import { Pressable, StyleSheet, Text, View } from "react-native";

const quickActions = [
  "어제와 동일하게 올리기",
  "오늘 마감박스 만들기",
  "판매 종료하기",
];

export function SellerHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>사장님 모드</Text>
      <Text style={styles.title}>30초 안에 오늘 마감박스를 등록하세요.</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>오늘 판매</Text>
        <Text style={styles.summaryValue}>0박스</Text>
      </View>
      <View style={styles.actions}>
        {quickActions.map((label) => (
          <Pressable key={label} style={styles.action}>
            <Text style={styles.actionText}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  actionText: {
    color: "#1f2b23",
    fontSize: 16,
    fontWeight: "800",
  },
  actions: {
    gap: 10,
  },
  container: {
    flex: 1,
    gap: 18,
    padding: 20,
  },
  eyebrow: {
    color: "#2f7d4f",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 12,
  },
  summary: {
    backgroundColor: "#284536",
    borderRadius: 8,
    gap: 6,
    padding: 18,
  },
  summaryLabel: {
    color: "#c7d8cc",
    fontSize: 13,
    fontWeight: "700",
  },
  summaryValue: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "900",
  },
  title: {
    color: "#141815",
    fontSize: 26,
    fontWeight: "900",
  },
});

