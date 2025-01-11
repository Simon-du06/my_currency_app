import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, Button, Image } from "react-native";
import { DollarConvertion } from '../utils/currency';
import { styles } from '../styles/styles';
import { get_exchange } from '../utils/api'

import images from "@/constants/icons";

const AmountInput = () => {
  const [amount, setText] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  const [rate, setRate] = useState('');

  useEffect(() => {
    get_exchange(setRate);
  }, []);

  const handleAmountChange = (value: string) => {
    const obj = JSON.parse(rate);
    setConvertedAmount(parseFloat(DollarConvertion(value, obj.rates.USD)));
  };

  return (
    <><View className="flex flex-col mt-2 justify-center rounded-3xl w-96 border-2 border-primary px-6 py-2">
      <Text className="font-lato-semibold text-left text-xl">You have</Text>
      <View className='flex flex-row items-center'>
        <TextInput
          className='flex-1 font-lato-bold text-4xl text-left'
          placeholder="Enter amount in €"
          onChangeText={handleAmountChange}
          defaultValue={amount}
          keyboardType="numeric" />
        <Image source={images.euro} className='w-10 h-10' />
        <Text className='font-lato-bold text-xl ml-2'>EUR</Text>
      </View>
    </View>
    <View className="flex flex-col mt-2 justify-center rounded-3xl w-96 border-2 border-ternary px-6 py-2">
      <Text className="font-lato-semibold text-left text-xl">Which is</Text>
      <View className='flex flex-row items-center'>
        <Text className='flex-1 font-lato-bold text-4xl text-left'>
          {isNaN(convertedAmount) ? 0 : convertedAmount}$
        </Text>
      <Image source={images.usa} className='w-10 h-10' />
      <Text className='font-lato-bold text-xl ml-2'>USD</Text>
      </View>
    </View></>
  );
};

export default AmountInput;
