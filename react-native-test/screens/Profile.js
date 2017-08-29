import React, { Component } from 'react';
import {Text, View, Dimensions, Image ,TextInput} from 'react-native';
import {Form, Item, Label, Input, Button, Header, Body, Title} from 'native-base';
import Meteor from 'react-native-meteor';


class Profile extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
