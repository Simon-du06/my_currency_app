import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

import images from "@/constants/icons";
import { currencyData } from '@/constants/currencies';
import { get_exchange } from '@/utils/api'
import { DollarConvertion } from '@/utils/currency';

const AmountInput = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  const [rate, setRate] = useState('');
  const [selected, setSelected] = useState("USD");

  useEffect(() => {
    get_exchange(setRate);
  }, []);

  const handleAmountChange = (value: string, currency: string) => {
    setAmount(value);
    setSelected(currency)
    const obj = JSON.parse(rate);
    setConvertedAmount(parseFloat(DollarConvertion(value, obj.rates[currency])));
  };

  return (
    <><View className="flex flex-col mt-2 justify-center rounded-3xl w-96 border-2 border-primary px-6 py-2">
      <Text className="font-lato-semibold text-left text-xl">You have</Text>
      <View className='flex flex-row items-center'>
        <TextInput
          className='flex-1 font-lato-bold text-4xl text-left'
          placeholder="Enter amount in €"
          onChangeText={(value) => handleAmountChange(value, selected)}
          defaultValue={amount}
          keyboardType="numeric" />
        <Image source={images.euro} className='w-10 h-10' />
        {/* <Text className='font-lato-bold text-xl ml-2'>EUR</Text> */}
      </View>
    </View>
    <View className="flex flex-col mt-2 justify-center rounded-3xl w-96 border-2 border-ternary px-6 py-2">
      <Text className="font-lato-semibold text-left text-xl">Which is</Text>
      <View className='flex flex-row items-center'>
        <Text className='flex-1 font-lato-bold text-4xl text-left'>
          {isNaN(convertedAmount) ? 0 : convertedAmount}$
        </Text>
      <Image source={images.usa} className='w-10 h-10' />
      {/* <Text className='font-lato-bold text-xl ml-2'>USD</Text> */}
      <SelectList
          setSelected={(currency : string) => handleAmountChange(amount, currency)}
          data={currencyData}
          save="value"
        />
      </View>
    </View></>
  );
};

export default AmountInput;
