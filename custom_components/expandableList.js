import React, { Component } from 'react';
import { Text, Icon, TopNavigation } from '@ui-kitten/components';
import { View, StyleSheet, Animated, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export class ExpandableList extends Component {
  anime = {
    height: new Animated.Value(React.Children.count(this.props.children) * 85),
    expanded: true,
    contentHeight: React.Children.count(this.props.children) * 85,
    toggleIconRotation: new Animated.Value(1),
  }

  spinToggle = this.anime.toggleIconRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  _getMaxValue() { return this.anime.contentHeight };
  _getMinValue() { return 0 };

  toggle() {
    if (this.anime.expanded == false) { 
      Animated.timing(this.anime.height, {
          toValue: this._getMaxValue(),
          duration: 200,
          useNativeDriver: false,
      }).start();

      Animated.timing(this.anime.toggleIconRotation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true  // To make use of native driver for performance
      }).start()
    } else {
      Animated.timing(this.anime.height, {
          toValue: this._getMinValue(),
          duration: 200,
          useNativeDriver: false,
      }).start();

      Animated.timing(this.anime.toggleIconRotation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true  // To make use of native driver for performance
      }).start()
    }
    this.anime.expanded = !this.anime.expanded;
    // console.log(this.anime)
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginBottom: 15}}>
          <TouchableHighlight underlayColor="transparent" onPress={this.toggle}>
            <View style={styles.toggleTouchHighlight}>
              <Text style={styles.listHeader}>{this.props.title}</Text>
              <Animated.View 
                style={{
                  marginLeft: 'auto', 
                  transform: [{ rotate: this.spinToggle }]
                }}>
                <Icon
                    style={{height: 20, width: 50}}
                    fill='black'
                    name='arrow-ios-downward-outline'
                  />
              </Animated.View>
            </View>
          </TouchableHighlight>
        </View>
        <Animated.FlatList
          style={[styles.content, {height: this.anime.height}]}
          data={[this.props.children]}
          keyExtractor={(item) => item.id}
          renderItem={(item) => item.item }>
        </Animated.FlatList>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  listHeader: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.black,
    // width: '50%',
    paddingHorizontal: 15,
  },
  toggleTouchHighlight: {
    flexDirection: 'row', 
    paddingVertical:15, 
    backgroundColor: 'skyblue',
    borderRadius: 5
  }
});