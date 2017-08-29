import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import {Form, Item, Label, Input, Button, Header, Body, Title} from 'native-base';
import Meteor from 'react-native-meteor';

class HelpMe extends Component {

  PressHere = () =>{
    if(Meteor.userId()){
      alert('hello');
      var point = {lat: 14, lng: 101};
      Meteor.call('markInsert',point);
      console.log('13,101');
    }
    else{
      alert('please login');
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>

          <View style={styles.inputStyle}>

            <View style={{marginTop: 10}}>
              <Button
                rounded
                danger
                block
                onPress={this.PressHere}
              >
                <Text style={{color: 'white'}}>Press here</Text>

              </Button>

            </View>
          </View>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20
  }
}

export default HelpMe;
