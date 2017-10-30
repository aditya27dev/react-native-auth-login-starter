import React from 'react';
import { Text, TouchableNativeFeedback, View, TextInput } from 'react-native';
import { scale, verticalScale } from './scaling';

const Button = ({ backgroundColor, text, onChangeText }) => {
    return (
        <TouchableNativeFeedback
        onPress={onChangeText}
        >
            <View style={{paddingVertical: 8, paddingHorizontal: 30, backgroundColor: backgroundColor ? backgroundColor : '#0093dd', borderRadius: 4}}>
                <Text style={{color: '#fff'}}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};
export { Button };