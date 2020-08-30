import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const QuickInfoCard = (props) => {
  const styles = StyleSheet.create({
    sectionQuickInfoCard: {
      flexDirection: 'column',
      marginRight: 30,
    },
    cardHeader: {
      fontSize: 14,
      fontWeight: '300'
    },
    cardContent: {
      fontSize: 25,
      fontWeight: '600'
    }
  })

  return (
    <View style={styles.sectionQuickInfoCard}>
      <Text style={styles.cardHeader}>{props.header}</Text>
      <Text style={styles.cardContent}>{props.text}</Text>
    </View>
  )
};