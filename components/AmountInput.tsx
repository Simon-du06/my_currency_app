import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, Button, Image } from "react-native";
import { DollarConvertion } from '../utils/currency';
import { styles } from '../styles/styles';
import { get_exchange } from '../utils/api'

import images from "@/constants/icons";

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
    <View className='flex flex-row items-center'>
      <TextInput
        className='flex-1 font-lato-bold text-4xl text-left'
        placeholder="Enter amount in €"
        // onChangeText={handleAmountChange}
        defaultValue={amount}
        keyboardType="numeric"
      />
     <Image source={images.euro} className='w-10 h-10'/> 
      {/* <Text>
        {isNaN(convertedAmount) ? 0 : convertedAmount}$
      </Text> */}
    </View>
  );
};

export default AmountInput;
