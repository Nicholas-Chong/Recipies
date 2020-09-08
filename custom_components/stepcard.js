import React from 'react';
// import { Card } from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

export const StepCard = (props) => {
  return (
    <View style={{flexDirection: 'row', height: 70, marginBottom: 15, alignItems: "center"}}>
      <View 
        style={{width: 50, height: 50, borderRadius: 5, zIndex: 10, backgroundColor: '#35E3F4', justifyContent: "center",alignItems: "center"}}
        >
        <Text style={{fontSize: 20}}>{props.stepNum}</Text>
      </View>
      <View style={{transform: [{ translateX: -25 }], paddingLeft: 40, paddingRight: 15, zIndex: 0, backgroundColor: 'lighter', width: '93.2%', height: '100%', borderRadius: 5, justifyContent: "center"}}>
        <Text>{props.stepInst}</Text>
      </View>
    </View>
  )
}