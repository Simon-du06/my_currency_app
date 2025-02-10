import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-gifted-charts'

import { get_data } from '@/utils/data_api'

const graphic = () => {
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   get_data(setData)
  // });

  // useEffect(() => {
  //   parse_data()
  // }, [data]);

  // const parse_data = () => {
  //   setData(JSON.parse(data));
  // };
   
  const data = [{value: 1.03}, {value: 1.02}, {value: 1.03}, {value: 1.04}, {value: 1.05}, {value: 1.04}, {value: 1.03}];
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LineChart
      areaChart
      data={data}
      curved
      rotateLabel
      initialSpacing={0}
      hideDataPoints
      yAxisOffset={1.0}
      startFillColor="rgb(103, 110, 218)"
      startOpacity={0.9}
      endFillColor="rgb(178, 239, 253)"
      endOpacity1={0.2}
      pointerConfig={{pointerColor: "rgb(103, 110, 218)"}}
      />
    </SafeAreaView>
  )
}

export default graphic