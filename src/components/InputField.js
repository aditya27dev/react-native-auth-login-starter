import React from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { scale, verticalScale } from './scaling';

const InputField = ({ label, value, onChangeText, multiline, placeholder, placeholderTextColor, inputStyle, underlineColor }) => {
    return (
        <View style={{width: '90%'}}>
            <Text style={{color: '#0093dd', marginLeft: 4, fontSize: 16}}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid={underlineColor}
                multiline={multiline ? multiline : false}
                autoCapitalize="sentences"
            />
        </View>
    );
};
export { InputField };