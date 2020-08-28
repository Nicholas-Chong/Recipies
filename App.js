/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './custom_components/navbar'

const App: () => React$Node = () => {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{height: '100%'}}>
            <AppNavigator style={{zindex: 1000}}></AppNavigator>
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

export default App;
