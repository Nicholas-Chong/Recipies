import React from 'react';
import { Card } from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

export const Cardtest = (props) => (
  <Card
    style={styles.card}
    status='basic'>
    <View style={styles.cardHeader}>
      <Text category='h6'>{props.title}</Text>
    </View>
    <Text>
      {props.text}
    </Text>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  cardHeader: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  }
})
