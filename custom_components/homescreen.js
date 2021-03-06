import React, { Component } from 'react';
import { Text, Input } from '@ui-kitten/components';
import { View, StyleSheet, FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cardtest } from './card'
import { SelectQuery } from './database'
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './detailsscreen';

Stack = createStackNavigator()

export class HomeScreenNavigator extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false, initialRouteName: 'Home'}}>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Details' component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    )
  }
}

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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

  onCardClick = (item) => {
    this.props.navigation.navigate('Details', {itemData: item})
  };

  async componentDidMount() {
    await SelectQuery().then(dt => this.setState({data: dt, datacopy: dt}))

    this._update = this.props.navigation.addListener('focus', async () => {
      await SelectQuery().then(dt => this.setState({data: dt, datacopy: dt}))
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Your Recipies</Text>
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
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <TouchableWithoutFeedback key={item.id} onPress={() => {this.onCardClick(item)}} >
                  <Cardtest title={item.title} text={item.description} />
                </TouchableWithoutFeedback>
              )}>
            </FlatList>
          </View>
        </View>
      </View>
    )
  }
};

export const styles = StyleSheet.create({
  scrollView: {
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
