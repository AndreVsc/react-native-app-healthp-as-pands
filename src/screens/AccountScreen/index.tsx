import React from 'react';
import { View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import { styles } from "./styles";

export function AccountScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome6 name="user-large" size={20} color="#617CA6" />
    </View>
  );
}