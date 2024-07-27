// src/components/Cronometro.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CronometroProps {
  time: number; // Tempo em segundos
}

const Cronometro: React.FC<CronometroProps> = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Cronometro;
