import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import ProgressBar from './actions';

export function BoxWater() {
  return (
    <View style={styles.container}>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={50} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
    </View>
  );
}