import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonBack } from '../../../components/ButtonBack';
import { styles } from './styles';
import { Timer } from '../../../components/Timer';
import ControlButtons from '../../../components/ControlButtons';
import AdditionalSettings from '../../../components/AdditionalSettings';

export function PracticeScreen({ navigation }: any) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (isRunning) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const pause = () => {
    if (!isRunning) return;

    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const status = isRunning ? 'Running' : 'Paused';

  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.textMenuBack}>Practice</Text>
      </View>

      <View style={styles.containerTop}>
        <Timer time={time} status={status} />
      </View>

      <View style={styles.containerPracticeSettings}>
        <ControlButtons 
          isRunning={isRunning}
          time={time}
          start={start}
          pause={pause}
          reset={reset}
        />
        <AdditionalSettings />
      </View>
    </View>
  );
}
