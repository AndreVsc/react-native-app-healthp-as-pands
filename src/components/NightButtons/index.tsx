import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function NightButtons() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <FontAwesome6 name="puzzle-piece" size={24} color="#9D95D6" />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome6 name="book-open" size={20} color="#7F76B8" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialCommunityIcons name="meditation" size={34} color="#9D95D6" />
        </TouchableOpacity>
    </View>
  );
}