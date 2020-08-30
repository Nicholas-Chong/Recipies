import React, { Component } from 'react';
import { Text, TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QuickInfoCard } from './quickInfoCard'
import { ExpandableList } from './expandableList'
import { ScrollView } from 'react-native-gesture-handler';

export class DetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderBackButton (thing) {
    var BackIcon = (props) => (
      <Icon {...props} name='arrow-back'/>
    );
    
    var BackButton = () => (
      <>
        <TopNavigationAction 
          onPress={() => thing.props.navigation.goBack()} 
          icon={BackIcon}/>
      </>
    );
  
    return (BackButton)
  };

  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.body}>
        <TopNavigation
            accessoryLeft={this.renderBackButton(this)}
            title='Go Back'/>
        <ScrollView 
          contentContainerStyle={{flexGrow:1}}
          // onContentSizeChange={(contentHeight) => console.log(contentHeight)}
          >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recipie Title</Text>
          <View style={styles.sectionQuickInfo}>
            <QuickInfoCard header='Servings' text='4'/>
            <QuickInfoCard header='Prep Time' text='25m'/>
            <QuickInfoCard header='Cook Time' text='50m'/>
          </View>
          <Divider style={{marginBottom: 15, borderBottomWidth: 0.25}}/>
          <Text style={styles.sectionSubheader}>Description</Text>
          <Text style={{marginBottom: 15}}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </Text>
          <Divider style={{marginBottom: 15, borderBottomWidth: 0.25}}/>
          <ExpandableList title='Steps'>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
          </ExpandableList>
          <ExpandableList styles={{marginTop: 15}} title='Next Section'>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
            <Text>Hello, this is third line.</Text>
          </ExpandableList>
          <ExpandableList styles={{marginTop: 15}} title='Next Section'>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is third line.</Text>
            <Text>Hello, this is first line.</Text>
            <Text>Hello, this is second line.</Text>
          </ExpandableList>
        </View>
        </ScrollView>
      </View>
      </View>
    )
  }
};

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: null,
    flex: 1
  },
  body: {
    backgroundColor: Colors.white,
    // height: '200%',
    flex: 1
  },
  sectionContainer: {
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
  sectionSubheader: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 15,
  },
  sectionQuickInfo: {
    flexDirection: 'row',
    marginBottom: 15, 
  }
})