import React, { Component } from 'react';
import { Text, Icon, TopNavigation } from '@ui-kitten/components';
import { View, StyleSheet, Animated, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { styles } from './homescreen';

export class ExpandableList extends Component {
  anime = {
    height: new Animated.Value(React.Children.count(this.props.children) * 18),
    expanded: true,
    contentHeight: React.Children.count(this.props.children) * 18
    // contentHeight: 500
  }

  constructor(props) {
    super(props);

    // this._initContentHeight = this._initContentHeight.bind(this);
    this.toggle = this.toggle.bind(this);

    // this.anime.expanded = props.expanded;
  }

  _getMaxValue() { return this.anime.contentHeight };
  _getMinValue() { return 0 };

  _initContentHeight(event) {
    // if (this.anime.contentHeight>0) return;
    this.anime.contentHeight = 500

    // if (this.anime.expanded == false) { 
    //   this.anime.height = new Animated.Value(this._getMinValue())
    // } else {
    //   this.anime.height= new Animated.Value(this._getMaxValue())
    // }
    // this.anime.height.setValue(500);
    // console.log(this.anime, 'l;asjf;lasfja;l')
  }

  toggle() {
    if (this.anime.expanded == false) { 
      Animated.timing(this.anime.height, {
          toValue: this._getMaxValue(),
          duration: 500,
          useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(this.anime.height, {
          toValue: this._getMinValue(),
          duration: 250,
          useNativeDriver: false,
      }).start();
    }
    this.anime.expanded = !this.anime.expanded;
    console.log(this.anime)
  }

  render() {
    return (
      <View style={{marginTop: 15, backgroundColor: 'white'}}>
        <View>
          <TouchableHighlight underlayColor="transparent" onPress={this.toggle}>
            <View style={{flexDirection: 'row'}}>
              {/* <Icon
                style={{height: 40, width: 50}}
                fill='#8F9BB3'
                name='arrow-back'
              /> */}
              <Text style={styles.listHeader}>{this.props.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Animated.View style={[styles.content, { height: this.anime.height}]}  >
            {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  listHeader: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.black,
    width: '50%',
    padding: 0,
  },

});