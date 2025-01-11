import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, Button } from "react-native";
import { DollarConvertion } from '../utils/currency';
import { styles } from '../styles/styles';
import { get_exchange } from '../utils/api'

const AmountInput = () => {
  const [amount, setText] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  // const [rate, setRate] = useState('');

  // useEffect(() => {
  //   get_exchange(setRate);
  // }, []);

  // const handleAmountChange = (value: string) => {
  //   const obj = JSON.parse(rate);
  //   setConvertedAmount(parseFloat(DollarConvertion(value, obj.rates.USD)));
  // };

  return (
    <View className='flex flex-row'>
      <TextInput
        className='font-lato-bold text-4xl text-left align-bottom'
        placeholder="Enter amount in €"
        // onChangeText={handleAmountChange}
        defaultValue={amount}
        keyboardType="numeric"
      />
      <Text>
        {isNaN(convertedAmount) ? 0 : convertedAmount}$
      </Text>
    </View>
  );
};

export default AmountInput;
