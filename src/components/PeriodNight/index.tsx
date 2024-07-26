import React from 'react';
import { Text, View } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import { styles } from './styles';
import { TIME_OPTIONS } from './constants';


export function PeriodNight() {
    
    return (
        <View style={styles.container}>
            <View >
                <RNPickerSelect
                onValueChange={()=>{}}
                items={TIME_OPTIONS}
                placeholder={{ label: '10:00PM', value: null }}
                />
            </View>
            <View>
                <Text style={styles.modalItemText}>TO</Text>
            </View>
            <View >
                <RNPickerSelect
                onValueChange={()=>{}}
                items={TIME_OPTIONS}
                placeholder={{ label: '7:00AM', value: null }}/>
            </View>
        </View>
    );
}