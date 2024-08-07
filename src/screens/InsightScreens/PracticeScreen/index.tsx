import React, { useRef, useState, useEffect } from 'react';
import { View, Text, AppState } from 'react-native';
import { ButtonBack } from '../../../components/ButtonBack';
import { styles } from './styles';
import { Timer } from './actions';
import ControlButtons from '../../../components/ControlButtons';
import AdditionalSettings from '../../../components/AdditionalSettings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export function PracticeScreen({ navigation }: any) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isConcluded, setIsConcluded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    try {
      const savedTime = await AsyncStorage.getItem('time');
      const savedIsRunning = await AsyncStorage.getItem('isRunning');
      const savedIsConcluded = await AsyncStorage.getItem('isConcluded');
      
      if (savedTime !== null) setTime(parseInt(savedTime, 10));
      if (savedIsRunning !== null) setIsRunning(savedIsRunning === 'true');
      if (savedIsConcluded !== null) setIsConcluded(savedIsConcluded === 'true');
    } catch (error) {
      console.error('Failed to load data', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('time', time.toString());
      await AsyncStorage.setItem('isRunning', isRunning.toString());
      await AsyncStorage.setItem('isConcluded', isConcluded.toString());
    } catch (error) {
      console.error('Failed to save data', error);
    }
  };

  useEffect(() => {
    fetchData();
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (time === 300) {
      setIsConcluded(true);
      pause();
    }
  }, [time]);

  useEffect(() => {
    saveData();
  }, [time, isRunning, isConcluded]);

  const handleAppStateChange = (nextAppState: string) => {
    if (nextAppState.match(/inactive|background/)) {
      pause();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => pause();
    }, [])
  );

  const start = () => {
    if (isRunning || isConcluded) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
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
    setIsConcluded(false);
    setTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const status = isConcluded ? 'Concluído' : isRunning ? 'Running' : 'Paused';

  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.textMenuBack}>Practice</Text>
      </View>
      <View style={styles.containerTop}>
        <Timer time={time} status={status} />
        {isConcluded && <Text style={styles.textStatusTimer}>Concluído</Text>}
      </View>
      <View style={styles.containerPracticeSettings}>
        <ControlButtons 
          isRunning={isRunning}
          isConcluded={isConcluded}
          time={time}
          start={start}
          pause={pause}
          reset={reset}
        />
        <AdditionalSettings id={1}/>
      </View>
    </View>
  );
}
