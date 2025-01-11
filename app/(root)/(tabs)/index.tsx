import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import AmountInput from '../../../components/AmountInput';
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/icons";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full items-center justify-center">
        <View className="flex flex-col mt-2 flex justify-center rounded-3xl w-96 border-2 border-primary px-6 py-2">
          <Text className="font-lato-semibold text-left text-xl">You send</Text>
          <AmountInput />
        </View>
        <Link href="/graphic">Graphic</Link>
      </ScrollView>
    </SafeAreaView>
  );
}
