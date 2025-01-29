import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

import images from "@/constants/icons";
import { currencyData } from '@/constants/currencies';
import { symbols } from '@/constants/currencies';
import { get_exchange } from '@/utils/api'
import { DollarConvertion } from '@/utils/currency';

const AmountInput = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0.0);
  const [rate, setRate] = useState('');
  const [selected, setSelected] = useState('USD');

  // useEffect(() => {
  //   get_exchange(setRate);
  // }, []);

  // useEffect(() => {
  //   handleAmountChange(amount, selected);
  // }, [rate]);

  const handleAmountChange = (value: string, currency: string) => {
    setAmount(value);
    setSelected(currency)
    if (rate === '') return;
    const obj = JSON.parse(rate);
    setConvertedAmount(parseFloat(DollarConvertion(value, obj.rates[currency])));
  };

  const getSymbol = (currency: string) => {
    const symbolObj = symbols.find((item) => item.value === currency);
    return symbolObj ? symbolObj.symbol : '';
  };

  const getIcon = (currency: string) => {
    const symbolObj = symbols.find((item) => item.value === currency);
    return symbolObj ? symbolObj.image : '';
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
        <Image source={images.euro} className='w-10 h-10 bottom-3 border-2 rounded-full' />
      </View>
    </View>
    <View className="flex flex-col mt-2 rounded-3xl w-96 border-2 border-ternary px-6 py-2 max-h-24 min-h-24">
      <Text className="font-lato-semibold text-left text-xl">Which is</Text>
      <View className='flex flex-row '>
        <Text className='flex-1 font-lato-bold text-4xl text-left'>
          {isNaN(convertedAmount) ? 0 : convertedAmount}{ !getSymbol(selected) ?  getSymbol("USD"): getSymbol(selected)}
        </Text>
      <Image source={!getIcon(selected) ? images.usa : getIcon(selected)} className='w-10 h-10 right-1 border-2 rounded-full border-seconday bottom-2' />
      <View className="overflow-visible w-13 bottom-4">
        <SelectList
            defaultOption={{ key: '1', value: 'USD' }}
            setSelected={(currency : string) => handleAmountChange(amount, currency)}
            data={currencyData}
            save="value"
          />
      </View>
      </View>
    </View></>
  );
};

export default AmountInput;
