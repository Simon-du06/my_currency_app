import { Text, View, StyleSheet } from "react-native";
import AmountInput from '../components/AmountInput';
import { styles } from '../styles/styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Euro to Dollar converter</Text>
      <AmountInput />
    </View>
  );
}
