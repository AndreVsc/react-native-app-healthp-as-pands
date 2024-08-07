import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as Notifications from 'expo-notifications';
import { styles } from './styles';
import { TIME_OPTIONS_HOURS, TIME_OPTIONS_MINUTES, TIME_OPTIONS_PERIODS } from './constants';
import { scheduleDailyNotification, cancelMismatchedNotifications, cancelAllNotifications } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function PeriodNight() {
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [period, setPeriod] = useState<string | null>(null);

  useEffect(() => {
    const loadPickerValues = async () => {
      try {
        const savedHour = await AsyncStorage.getItem('hour');
        const savedMinute = await AsyncStorage.getItem('minute');
        const savedPeriod = await AsyncStorage.getItem('period');

        if (savedHour !== null) setHour(parseInt(savedHour, 10));
        if (savedMinute !== null) setMinute(parseInt(savedMinute, 10));
        if (savedPeriod !== null) setPeriod(savedPeriod);
      } catch (error) {
        console.error('Failed to load picker values', error);
      }
    };
    
    loadPickerValues();
    
    const subscription = Notifications.addNotificationReceivedListener(notification => {});

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const savePickerValues = async () => {
      try {
        if (hour !== null) await AsyncStorage.setItem('hour', hour.toString());
        if (minute !== null) await AsyncStorage.setItem('minute', minute.toString());
        if (period !== null) await AsyncStorage.setItem('period', period);
      } catch (error) {
        console.error('Failed to save picker values', error);
      }
    };

    savePickerValues();
    handleTimeChange();
  }, [hour, minute, period]);

  const handleTimeChange = async () => {
    if (hour !== null && minute !== null && period !== null) {
      const hourNumber = hour;
      const minuteNumber = minute;

      if (!isNaN(hourNumber) && !isNaN(minuteNumber)) {
        await cancelMismatchedNotifications(hourNumber, minuteNumber, period); // Cancela notificações que não correspondem ao horário selecionado
        await scheduleDailyNotification(hourNumber, minuteNumber, period, "Time to sleep", "It's time to go to bed and rest!");
      } else {
        await cancelAllNotifications();
      }
    } else {
      await cancelAllNotifications();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <RNPickerSelect
          onValueChange={(value) => setHour(value)}
          items={TIME_OPTIONS_HOURS}
          placeholder={{ label: '- -', value: null }}
          value={hour}
        />
      </View>
      <View>
        <Text style={{color:'#c4c4c4'}}>:</Text>
      </View>
      <View>
        <RNPickerSelect
          onValueChange={(value) => setMinute(value)}
          items={TIME_OPTIONS_MINUTES}
          placeholder={{ label: '- -', value: null }}
          value={minute}
        />
      </View>
      <View>
        <RNPickerSelect
          onValueChange={(value) => setPeriod(value)}
          items={TIME_OPTIONS_PERIODS}
          placeholder={{ label: 'AM/PM', value: null }}
          value={period}
        />
      </View>
    </View>
  );
}
