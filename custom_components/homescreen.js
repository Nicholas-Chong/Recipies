import React, { Component } from 'react';
import { Text, Input } from '@ui-kitten/components';
import { View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cardtest } from './card'
import { SelectQuery } from './database'

let cardlist = []
for (i = 0; i < 10; i++) {
  titles = 'Header ' + String(i)
  texts = ';akdf;lsajflasjkflsjflsjflsjflskjf;asldkfjnidsffoahfa;jf;ajf'
  cardlist.push({title: titles, text: texts, id: String(i)})
}

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      datacopy: []
    };
  }

  searchFilterFunction = text => {
    copy = [...this.state.datacopy]
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

  onCardClick = () => {
    this.props.navigation.navigate('Details', {foo: 'alsfjlsjfslfjs'})
  };

  async componentDidMount() {
    await SelectQuery().then(dt => this.setState({data: dt, datacopy: dt}))
  }

  render() {
    console.log(this.state.data, 'RENDER')
    
    if (this.state.loading == false) {
      return (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Find Recipies</Text>
            <Input 
              onChangeText={text => this.searchFilterFunction(text)} 
              status='basic' 
              placeholder='Search by keyword'
              style={{marginBottom: 15}} />
            <View style={{flex: 1}}>
              <FlatList
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                data={this.state.data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={this.onCardClick} >
                    <Cardtest title={item.title} text={item.description} />
                  </TouchableOpacity>
                )}>
              </FlatList>
            </View>
          </View>
        </View>
      )
    }
  }
};

export const styles = StyleSheet.create({
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
    height: '100%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 15,
  },
})