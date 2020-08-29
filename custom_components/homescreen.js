import React, { Component } from 'react';
import { Text, Input } from '@ui-kitten/components';
import { View, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cardtest } from './card'

let cardlist = []
for (i = 0; i < 10; i++) {
  titles = 'Header ' + String(i)
  texts = ';akdf;lsajflasjkflsjflsjflsjflskjf;asldkfjnidsffoahfa;jf;ajf'
  cardlist.push({title: titles, text: texts})
}

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: cardlist,
      error: null,
    };

    this.datacopy = cardlist;
  }

  searchFilterFunction = text => {
    copy = [...this.datacopy]
    if (text != '') {
      var newData = copy.filter(item => {
        return item.title.includes(text)
      });
    } else {
      var newData = copy
    }

    this.setState({
      data: newData,
    });
  };

  render() {
    return (
      <View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Find Recipies</Text>
            <Input 
              onChangeText={text => this.searchFilterFunction(text)} 
              status='basic' 
              placeholder='Search by keyword' />
            <View style={{height: '80%'}}>
              <FlatList
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                data={this.state.data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <Cardtest title={item.title} text={item.text} />
                )}>
              </FlatList>
            </View>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    backgroundColor: null
  },
  body: {
    backgroundColor: Colors.white,
    height: '100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%'
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 15,
  },
})