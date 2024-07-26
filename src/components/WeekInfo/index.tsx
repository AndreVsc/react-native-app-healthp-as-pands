import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function WeekInfo() {
  return (
    <View>
        <Text style={styles.textPressPorcent}>0%</Text>
        <Text style={styles.textPressMeta}>1200/1200 ml</Text>
    </View>
  );
}