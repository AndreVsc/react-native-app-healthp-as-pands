import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import ProgressBar from './actions';

import { useAuth } from '../../contexts/AuthContext';

export function BoxWater() {
  const { water } = useAuth();

  return (
    <View style={styles.container}>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
        <ProgressBar percentage={water?(water.Segunda * 100):0} width={8} height={180} color="#2a8aaa" backgroundColor="#e0e0e0"/>
    </View>
  );
}