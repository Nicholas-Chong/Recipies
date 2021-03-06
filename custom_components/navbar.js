import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenNavigator } from './homescreen'
import { AddRecipieScreen } from './secondscreen'
import { DetailsScreen } from './detailsscreen'
import { ExploreScreen } from './explorescreen'

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const AddIcon = (props) => (
  <Icon {...props} name='plus-outline'/>
);

const SavedIcon = (props) => (
  <Icon {...props} name='save-outline'/>
);

function selectIndex(state) {
  let index = state.index
  if (state.routeNames[index] == 'Details' || state.routeNames[index] == 'Home') {
    return 0
  } else {
    return index
  }
}

const { Navigator, Screen } = createBottomTabNavigator();

const Nav = ({navigation, state}) => {
  return (
      <BottomNavigation 
        selectedIndex={selectIndex(state)}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon}/>
        <BottomNavigationTab icon={AddIcon}/>
        <BottomNavigationTab icon={SavedIcon}/> 
      </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator tabBar={props => <Nav {...props} />}>
    <Screen name='Home' component={HomeScreenNavigator}/>
    <Screen name='Orders' component={AddRecipieScreen}/>
    <Screen name='Explore' component={ExploreScreen}/>

    <Screen name='Details' component={DetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
