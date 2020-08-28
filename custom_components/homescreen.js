import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cardtest } from './card'

let cardlist = []
for (i = 0; i < 10; i++) {
  title = 'Header ' + String(i)
  text = ';akdf;lsajflasjkflsjflsjflsjflskjf;asldkfjnidsffoahfa;jf;ajf'
  cardlist.push(<Cardtest title={title} text={text} />)
}

export const HomeScreen = () => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Find Recipies</Text>
        {cardlist}
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    backgroundColor: null
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: Colors.black,
  },
})