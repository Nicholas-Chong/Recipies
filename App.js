/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  // Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  ApplicationProvider, 
  Button, Layout, 
  BottomNavigation, 
  BottomNavigationTab,
  Icon, 
  IconRegistry,
  Card, 
  List, 
  Text
} from '@ui-kitten/components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const AddIcon = (props) => (
  <Icon {...props} name='plus-outline'/>
);

const SavedIcon = (props) => (
  <Icon {...props} name='save-outline'/>
);


const HomeScreen = () => (
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

const OrdersScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue', height: '100%' }}>
    <Text category='h1'>ORDERS</Text>
  </View>
);

const { Navigator, Screen } = createBottomTabNavigator();

const Nav = ({navigation, state}) => {
  return (
      <BottomNavigation 
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon}/>
        <BottomNavigationTab icon={AddIcon}/>
        <BottomNavigationTab icon={SavedIcon}/> 
      </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={props => <Nav {...props} />}>
    <Screen name='Users' component={HomeScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);

const Cardtest = (props) => (
  <Card
    style={styles.card}
    status='basic'>
    <View style={styles.cardHeader}>
      <Text category='h6'>{props.title}</Text>
    </View>
    <Text>
      {props.text}
    </Text>
  </Card>
);

let cardlist = []
for (i = 0; i < 10; i++) {
  title = 'Header ' + String(i)
  text = ';akdf;lsajflasjkflsjflsjflsjflskjf;asldkfjnidsffoahfa;jf;ajf'
  cardlist.push(<Cardtest title={title} text={text} />)
}

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

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    backgroundColor: null
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
  container: {
    maxHeight: 320,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  card: {
    marginTop: 15,
  },
  cardHeader: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  }
});

export default App;
