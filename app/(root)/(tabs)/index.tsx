import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import AmountInput from '../../../components/AmountInput';
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/icons";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full items-center justify-center">
        <AmountInput />
        <Link href="/graphic">Graphic</Link>
      </ScrollView>
    </SafeAreaView>
  );
}
