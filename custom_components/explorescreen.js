import React, { Component } from 'react';
import { Text, Button, Icon } from '@ui-kitten/components';
import { View } from 'react-native';

export class IconSimpleUsageShowcase extends Component {
  render() {
    return (
      <Icon
        fill='#8F9BB3'
        name='star'
      />
    )
  }
};

export class ExploreScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', height: '100%' }}>
        <Text category='h1'>Explore</Text>
        <View>{IconSimpleUsageShowcase}</View>
      </View>
    )
  }
};
