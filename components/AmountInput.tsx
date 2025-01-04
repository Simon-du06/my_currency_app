import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";

const AmountInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, color: '#ffffff', alignItems:'center', alignContent: 'center'}}
        placeholder="Enter amount"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        keyboardType="numeric"
      />
      <Text style={{padding: 10, fontSize: 24, color: '#ffffff'}}>
        {text}
      </Text>
    </View>
  );
};

export default AmountInput;