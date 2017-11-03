import React from 'react';
import { Platform, Text, TouchableNativeFeedback, View, TextInput, TouchableHighlight } from 'react-native';
import { scale, verticalScale } from './scaling';

const Button = ({ backgroundColor, text, onChangeText }) => {
    if(Platform.OS == 'android'){
        return (
            <TouchableNativeFeedback
            onPress={onChangeText}
            >
                <View style={{paddingVertical: 8, paddingHorizontal: 30, backgroundColor: backgroundColor ? backgroundColor : '#0093dd', borderRadius: 4}}>
                    <Text style={{color: '#fff'}}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
    if(Platform.OS == 'ios'){
        return (
            <TouchableHighlight
            onPress={onChangeText}
            >
                <View style={{paddingVertical: 8, paddingHorizontal: 30, backgroundColor: backgroundColor ? backgroundColor : '#0093dd', borderRadius: 4}}>
                    <Text style={{color: '#fff'}}>{text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};
export { Button };