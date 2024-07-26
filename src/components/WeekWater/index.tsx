import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { ProgressCircle } from './actions';

export function WeekWater() {
  return (
    <View style={styles.containerWeek}>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="M"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="T"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="W"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="T"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="F"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="S"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={20} size={30} strokeWidth={2} backgroundColor="#ffffff" title="S"/>
        </View>
    </View>
  );
}