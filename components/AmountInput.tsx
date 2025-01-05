import React, {useState} from 'react';
import { Text, TextInput, View, Button } from "react-native";
import { DollarConvertion } from '../utils/currency';
import { styles } from '../styles/styles';

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
      {/* <Button 
        title="Convert"
        onPress={() => handleAmountChange(amount)} 
      /> */}
      <Text style={styles.text}>
        {convertedAmount}$
      </Text>
    </View>
  );
};

export default AmountInput;
