import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";

const AmountInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter amount"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        keyboardType="numeric"
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default AmountInput;