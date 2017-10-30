import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackHandler
} from 'react-native';
import { InputField, Button } from '../components';
import { NavigationActions } from 'react-navigation';
import { onSignIn } from "../auth";

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }
  componentDidMount(){
    const { navigation } = this.props;
    BackHandler.addEventListener('hardwareBackPress', function() {
      if(navigation.state.routeName == 'SignIn'){
        BackHandler.exitApp()
      }
    });
  }
  render() {
    const { username, password } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <InputField
          label="User Name"
          placeholder="User Name"
          style={styles.inputStyle}
          onChangeText={(username) => this.setState({username})}
          value={username}
        />
        <InputField
          label="Password"
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={(username) => this.setState({username})}
          value={username}
        />
        <View style={{marginTop: 20}}>
            <Button
              onChangeText={() => {
                onSignIn().then(() => {
                  this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'SignedIn' })
                    ]
                    })
                  )
                })
              }}
              text="Login"
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
