import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from '../components';
import { onSignOut } from "../auth";
import { NavigationActions } from 'react-navigation';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <View style={{marginTop: 20}}>
          <Button
            onChangeText={() => {
              onSignOut().then(() => {
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'SignedOut' })
                  ]
                })
              )
            })}}
            text="Sign out"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
