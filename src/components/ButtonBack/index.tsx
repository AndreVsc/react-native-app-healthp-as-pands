import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { buttonBackProps } from './props';

import { AntDesign } from '@expo/vector-icons';

export function ButtonBack({navigation, color}:buttonBackProps) {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}}>
        <AntDesign name="left" size={24} color={color? color :"#ffffff"} />
    </TouchableOpacity>
  );
}