import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './homescreen'
import { OrdersScreen } from './secondscreen'

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const AddIcon = (props) => (
  <Icon {...props} name='plus-outline'/>
);

const SavedIcon = (props) => (
  <Icon {...props} name='save-outline'/>
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

// const styles = StyleSheet.create({

// })