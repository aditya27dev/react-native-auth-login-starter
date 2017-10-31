import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackHandler,
  AsyncStorage
} from 'react-native';
import { Button } from '../components';
import { onSignOut } from "../auth";
import { NavigationActions } from 'react-navigation';

export default class Home extends Component {
  componentDidMount(){
    const { navigation } = this.props;
    BackHandler.addEventListener('hardwareBackPress', function() {
      if(navigation.state.routeName == 'Home'){
        BackHandler.exitApp()
      }
    });
  }
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
                AsyncStorage.removeItem("user_key")
                navigate('SignedOut');
              })
            }}
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
    backgroundColor: '#fff',
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
