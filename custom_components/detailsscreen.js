import React, { Component } from 'react';
import { Text, TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QuickInfoCard } from './quickInfoCard'
import { ExpandableList } from './expandableList'
import { ScrollView } from 'react-native-gesture-handler';
import { StepCard } from './stepcard'

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

  generateStepCards(steps) {
    steps = JSON.parse(steps)
    cards = []
    for (i of steps) {
      card = <StepCard stepNum={i.stepNum} stepInst={i.inst}></StepCard>
      cards.push(card)
    }
    return cards
  }

  render() {
    let itemData = this.props.route.params.itemData
    return (
      <View style={{flex:1}}>
      <View style={styles.body}>
        <TopNavigation
            accessoryLeft={this.renderBackButton(this)}
            title='Go Back'/>
        <ScrollView 
          contentContainerStyle={{flexGrow:1}}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{itemData.title}</Text>
          <View style={styles.sectionQuickInfo}>
            <QuickInfoCard header='Servings' text={itemData.servings}/>
            <QuickInfoCard header='Prep Time' text={itemData.prep_time}/>
            <QuickInfoCard header='Cook Time' text={itemData.cook_time}/>
          </View>
          <Divider style={{marginBottom: 15, borderBottomWidth: 0.25}}/>
          <Text style={styles.sectionSubheader}>Description</Text>
          <Text style={{marginBottom: 15}}>
            {itemData.description}
          </Text>
          <Divider style={{marginBottom: 15, borderBottomWidth: 0.25}}/>
          <ExpandableList title='Steps'>
            {this.generateStepCards(itemData.steps)}
          </ExpandableList>
          <ExpandableList  title='Ingredients' data={this.data}>
          <StepCard stepNum='01' stepInst="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book"></StepCard>
          {this.test}
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
