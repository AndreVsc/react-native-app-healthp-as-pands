import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { ProgressCircle } from './actions';

import { useAuth } from '../../contexts/AuthContext';

export function WeekWater() {
    const { water } = useAuth();
  return (
    <View style={styles.containerWeek}>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Segunda * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="M"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Terca * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="T"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Quarta * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="W"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Quinta * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="T"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Sexta * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="F"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Sabado * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="S"/>
        </View>
        <View style={styles.containerWeekDay}>
            <ProgressCircle percentage={water?(water.Domingo * 100):0} size={30} strokeWidth={2} backgroundColor="#ffffff" title="S"/>
        </View>
    </View>
  );
}