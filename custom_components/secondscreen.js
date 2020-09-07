import React, { Component } from 'react';
import { Text, Input, Button } from '@ui-kitten/components';
import { View, StyleSheet, Animated, Keyboard, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { InsertNewRecipie } from './database'

export class AddRecipieScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      servings: -1, 
      prep_time: -1,
      cook_time: -1, 
      ingredients: [],
      steps: [{stepNum: '01', inst: ''}],
      ingredients: [{quantity: '01', ingredient: ''}],
    }

    this.ingredientsAnime = {
      height: new Animated.Value(this.state.steps.length * 50),
      currentHeight: this.state.steps.length * 50,
    }

    this.stepsAnime = {
      height: new Animated.Value(this.state.steps.length * 50),
      currentHeight: this.state.steps.length * 50,
    }
  }

  increaseHeight(animeObj, data, type) {
    Animated.timing(animeObj.height, {
      toValue: animeObj.currentHeight + 50,
      duration: 200,
      useNativeDriver: false,
    }).start();

    animeObj.currentHeight += 50
    if (type == 'steps') {
      data.push({stepNum: '0' + (data.length + 1).toString(), inst: ''})
    }

    if (type == 'ingredients') {
      data.push({quantity: '0' + (data.length + 1).toString(), ingredient: ''})
    }
    console.log(this.state.ingredients)
  }

  decreaseHeight(animeObj, data, type) {
    if (data.length == 1) {
      return
    } else {
      Animated.timing(animeObj.height, {
        toValue: animeObj.currentHeight - 50,
        duration: 200,
        useNativeDriver: false,
      }).start();
  
      animeObj.currentHeight -= 50
      if (type == 'steps') {
        this.setState({steps:this.state.steps.slice(0, this.state.steps.length-1)})
      }

      if (type == 'ingredients') {
        this.setState({ingredients: data.slice(0, data.length-1)})
      }
    }
  }


  StepInput = (props) => {
    let additionalShift = (props.num * 50)
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <View 
          style={{width: 40, height: 40, borderRadius: 5, zIndex: 10, backgroundColor: 'skyblue', justifyContent: "center",alignItems: "center", marginRight: 10}}>
          <Text style={{fontSize: 20}}>{props.stepNum}</Text>
        </View>
        
        <Input 
          onFocus={() => this.avoidKeyboard(200 + additionalShift)} 
          style={{width: Dimensions.get('window').width - 98 }}
          placeholder='Step'
          onEndEditing={(input) => this.state.steps[props.num].inst = input.nativeEvent.text} />
      </View>
    )
  }

  IngredientInput = (props) => {
    return(
      <View style={{flexDirection: 'row', height: 50}} >
        <Input 
          onFocus={() => this.avoidKeyboard(300 + (50 * props.num) + (50 * this.state.steps.length))} 
          style={{width: 90, marginRight: 15 }}
          placeholder='Amount'
          onEndEditing={(input) => this.state.ingredients[props.num].quantity = input.nativeEvent.text} />
        <Input 
          onFocus={() => this.avoidKeyboard(300 + (50 * props.num) + (50 * this.state.steps.length))} 
          style={{width: Dimensions.get('window').width - 159 }}
          placeholder='Ingredient'
          onEndEditing={(input) => this.state.ingredients[props.num].ingredient = input.nativeEvent.text} />
      </View>
    )
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillHide',
      this._keyboardHide,
    );

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this._keyboardShow,
    );
  }
  
  avoidKeyboard(val) {
    this.scrollView.scrollTo({x:0, y: val, Animated: true})
  }

  render() {
    return (
      <>
      <View style={[styles.body]} ref={(component) => { this.bodyView = component; }} >
        <Animated.View 
          style={[styles.sectionContainer]}>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.sectionTitle}>Add Recipie</Text>
          </View>
          <Animated.ScrollView 
            style={{zIndex: -1}} 
            ref={(component) => { this.scrollView = component; }} 
            showsVerticalScrollIndicator={false}>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Title</Text>
              <Input 
                placeholder='What is your recipie title?'
                onEndEditing={(input) => this.state.title = input.nativeEvent.text} />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Description</Text>
              <Input 
                placeholder='Description'
                onEndEditing={(input) => this.state.description = input.nativeEvent.text} />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Servings</Text> 
              <Input 
                placeholder='How many servings?'
                onEndEditing={(input) => this.state.servings = input.nativeEvent.text} />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Prep Time</Text> 
              <Input 
                onFocus={() => this.avoidKeyboard(0)} 
                placeholder='How long does it take to prep?'
                onEndEditing={(input) => this.state.prep_time = input.nativeEvent.text} />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Cook Time</Text> 
              <Input 
                onFocus={() => this.avoidKeyboard(50)} 
                placeholder='How long does it take to cook?' 
                onEndEditing={(input) => this.state.cook_time = input.nativeEvent.text} />
            </View>
            <View ref={(component) => { this.stepsList = component; }} 
              style={styles.inputSection} >
              <Text style={styles.sectionSubheader}>Steps</Text> 
              <Animated.FlatList
                style={{height: this.stepsAnime.height}}
                data={this.state.steps}
                keyExtractor={(item) => item.stepNum} 
                renderItem={(item) => <this.StepInput element={this} num={item.index} stepNum={item.item.stepNum} />} >
              </Animated.FlatList>
              <View style={{flexDirection: 'row'}}>
                <Button 
                  style={{marginTop: 15, width: '47.5%', marginRight: '5%'}} 
                  onPress={() => this.increaseHeight(this.stepsAnime, this.state.steps, 'steps')}>+</Button>
                <Button 
                  status='danger' 
                  style={{marginTop: 15, width: '47.5%'}} 
                  onPress={() => this.decreaseHeight(this.stepsAnime, this.state.steps, 'steps')}>-</Button>
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.sectionSubheader}>Ingredients</Text> 
              <Animated.FlatList
                style={{height: this.ingredientsAnime.height}}
                data={this.state.ingredients}
                keyExtractor={(item) => item.stepNum} 
                renderItem={(item) => <this.IngredientInput element={this} num={item.index} />} >
              </Animated.FlatList>
              <View style={{flexDirection: 'row'}}>
                <Button 
                  style={{marginTop: 15, width: '47.5%', marginRight: '5%'}} 
                  onPress={() => this.increaseHeight(this.ingredientsAnime, this.state.ingredients, 'ingredients')}>+
                </Button>
                <Button 
                  status='danger' 
                  style={{marginTop: 15, width: '47.5%'}}
                  onPress={() => this.decreaseHeight(this.ingredientsAnime, this.state.ingredients, 'ingredients')}>-
                </Button>
              </View>
              <Button 
                  status='danger' 
                  style={{marginTop: 15}}
                  onPress={() => InsertNewRecipie(this.state)}>
                  Done
                </Button>
            </View>
            <View style={{height: 0.33*(Dimensions.get('screen').height), backgroundColor: null}} />
          </Animated.ScrollView>
        </Animated.View>
      </View>
      </>
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
    height: '100%'
  },
  sectionContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 34,
    marginTop: 32,
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
  inputSection: {
    marginBottom: 15,
  }
})