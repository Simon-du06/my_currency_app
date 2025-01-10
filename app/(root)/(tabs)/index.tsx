import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import AmountInput from '../../../components/AmountInput';
import { styles } from '../../../styles/styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-lg">Euro to Dollar converter</Text>
      <AmountInput />
      <Link href="/graphic">Graphic</Link>
    </View>
  );
}
