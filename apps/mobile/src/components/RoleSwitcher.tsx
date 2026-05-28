import { Pressable, StyleSheet, Text, View } from "react-native";

export type UserMode = "consumer" | "seller";

interface RoleSwitcherProps {
  mode: UserMode;
  onChange: (mode: UserMode) => void;
}

const options: Array<{ label: string; value: UserMode }> = [
  { label: "소비자", value: "consumer" },
  { label: "사장님", value: "seller" },
];

export function RoleSwitcher({ mode, onChange }: RoleSwitcherProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.control}>
        {options.map((option) => {
          const selected = option.value === mode;

          return (
            <Pressable
              accessibilityRole="button"
              key={option.value}
              onPress={() => onChange(option.value)}
              style={[styles.option, selected && styles.selectedOption]}
            >
              <Text style={[styles.label, selected && styles.selectedLabel]}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    backgroundColor: "#e7ece6",
    borderRadius: 8,
    flexDirection: "row",
    gap: 4,
    padding: 4,
  },
  label: {
    color: "#4f5a52",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
  option: {
    borderRadius: 6,
    flex: 1,
    paddingVertical: 10,
  },
  selectedLabel: {
    color: "#ffffff",
  },
  selectedOption: {
    backgroundColor: "#284536",
  },
  wrap: {
    backgroundColor: "#f7f7f2",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

