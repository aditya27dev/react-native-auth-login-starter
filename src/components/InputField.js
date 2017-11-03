import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { scale, verticalScale } from './scaling';

const styles = StyleSheet.create({
    iosView: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        paddingBottom: 5
    }
})

const InputField = ({ label, value, onChangeText, multiline, placeholder, placeholderTextColor, inputStyle, underlineColor }) => {
    let textInputField = inputStyle ? inputStyle : textInputField;
    if(Platform.OS == 'android'){
        return (
            <View style={{width: '90%'}}>
                <Text style={{color: '#0093dd', marginLeft: 4, fontSize: 16}}>{label}</Text>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={textInputField}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid={underlineColor}
                    multiline={multiline ? multiline : false}
                    autoCapitalize="sentences"
                />
            </View>
        );
    }
    if(Platform.OS == 'ios'){
        return (
            <View style={[styles.iosView, {width: '90%'}]}>
                <Text style={{color: '#0093dd', fontSize: 16, marginVertical: 12}}>{label}</Text>
                <TextInput
                    placeholderTextColor={placeholderTextColor}
                    style={textInputField}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid={underlineColor}
                    multiline={multiline ? multiline : false}
                    autoCapitalize="sentences"
                />
            </View>
        );
    }
};
export { InputField };