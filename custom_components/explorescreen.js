import React, { Component } from 'react';
import { Text, Button } from '@ui-kitten/components';
import { View } from 'react-native';

export class ExploreScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', height: '100%' }}>
        <Text category='h1'>Explore</Text>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
};