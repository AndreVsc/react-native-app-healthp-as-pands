import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import { nightButtonsProps } from './props';
import { styles } from './styles';

export const NightButtons = (props: nightButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.closed}>
        <FontAwesome6 
          name="puzzle-piece" 
          size={24} 
          color={props.setting ? "#9D95D6" : "#7F76B8"} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.open}>
        <FontAwesome6
          name="book" 
          size={20} 
          color={props.setting ? "#7F76B8" : "#9D95D6"} 
        />
      </TouchableOpacity>
    </View>
  );
};
