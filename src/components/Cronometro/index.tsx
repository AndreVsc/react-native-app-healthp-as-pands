// src/components/Cronometro.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CronometroProps } from './props';

export const Cronometro: React.FC<CronometroProps> = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`}</Text>
    </View>
  );
};
