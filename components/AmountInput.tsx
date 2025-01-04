import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";

const AmountInput = () => {
  const [amount, setText] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0.0);

  const handleAmountChange = (value: string) => {
    setConvertedAmount(parseFloat(DollarConvertion(value, 1.1)));
  };

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={styles.text}
        placeholder="Enter amount in €"
        onChangeText={handleAmountChange}
        defaultValue={amount}
        keyboardType="numeric"
      />
      <Text style={styles.text}>
        {convertedAmount}$
      </Text>
    </View>
  );
};

export default AmountInput;

const DollarConvertion = (amount:string, rate:number) => {
  const dotamount = amount.replace(',', '.');
  return (parseFloat(dotamount) * rate).toFixed(2);
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    color: "#ffffff",
  },
});