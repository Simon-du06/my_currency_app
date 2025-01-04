import { Text, View, StyleSheet } from "react-native";
import AmountInput from '../components/AmountInput';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello World!</Text>
      <AmountInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#ffffff",
  },
});