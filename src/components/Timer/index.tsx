import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../screens/InsightScreens/PracticeScreen/styles';

interface TimerProps {
  time: number;
  status: string;
}

export function Timer({ time, status }: TimerProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  };

  return (
    <View style={styles.containerTop}>
      <View>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
        <Text style={styles.textStatusTimer}>{status}</Text>
      </View>
      <View></View>
    </View>
  );
};
