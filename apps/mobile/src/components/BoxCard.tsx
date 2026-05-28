import type { SaveBox } from "@savebox/shared";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface BoxCardProps {
  box: SaveBox;
}

export function BoxCard({ box }: BoxCardProps) {
  const discountRate = Math.round((1 - box.salePrice / box.originalPrice) * 100);

  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.store}>{box.storeName}</Text>
        <Text style={styles.distance}>{formatDistance(box.distanceMeters)}</Text>
      </View>
      <Text style={styles.title}>{box.title}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.discount}>{discountRate}%</Text>
        <Text style={styles.price}>{box.salePrice.toLocaleString()}원</Text>
        <Text style={styles.original}>{box.originalPrice.toLocaleString()}원</Text>
      </View>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>남은 수량 {box.quantityRemaining}</Text>
        <Text style={styles.meta}>오늘 픽업</Text>
      </View>
      <Text style={styles.note}>{box.storageNote}</Text>
    </Pressable>
  );
}

function formatDistance(distanceMeters?: number) {
  if (!distanceMeters) {
    return "거리 확인";
  }

  if (distanceMeters >= 1000) {
    return `${(distanceMeters / 1000).toFixed(1)}km`;
  }

  return `${distanceMeters}m`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    gap: 8,
    padding: 16,
  },
  discount: {
    color: "#d6422b",
    fontSize: 20,
    fontWeight: "800",
  },
  distance: {
    color: "#5d6460",
    fontSize: 13,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  meta: {
    backgroundColor: "#edf3ee",
    borderRadius: 6,
    color: "#284536",
    fontSize: 12,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  metaRow: {
    flexDirection: "row",
    gap: 8,
  },
  note: {
    color: "#6f756f",
    fontSize: 12,
  },
  original: {
    color: "#8b908b",
    fontSize: 13,
    textDecorationLine: "line-through",
  },
  price: {
    color: "#141815",
    fontSize: 20,
    fontWeight: "800",
  },
  priceRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
  },
  store: {
    color: "#284536",
    fontSize: 14,
    fontWeight: "700",
  },
  title: {
    color: "#141815",
    fontSize: 18,
    fontWeight: "800",
  },
});

