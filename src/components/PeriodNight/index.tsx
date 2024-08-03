import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as Notifications from 'expo-notifications';
import { styles } from './styles';
import { TIME_OPTIONS_HOURS } from './constants';

// Configuração do manipulador de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const convertTo24HourFormat = (time: string) => {
  const [hourMinute, period] = time.split(' ');
  const [hour, minute] = hourMinute.split(':').map(Number);
  
  let adjustedHour = hour % 12;
  if (period === 'PM') adjustedHour += 12;
  
  return { hour: adjustedHour, minute };
};

// Função para agendar uma notificação diária
async function scheduleDailyNotification(time: string, title: string, body: string) {

  const { hour, minute } = convertTo24HourFormat(time);
  const now = new Date();
  
  const trigger = new Date();
  trigger.setHours(hour);
  trigger.setMinutes(minute);
  trigger.setSeconds(0);
  trigger.setMilliseconds(0);

  if (trigger <= now) {
    trigger.setDate(trigger.getDate() + 1);
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      hour: trigger.getHours(),
      minute: trigger.getMinutes(),
      repeats: true,
    },
  });
}

export function PeriodNight() {
  const [wakeTime, setWakeTime] = useState<string | null>(null);
  const [sleepTime, setSleepTime] = useState<string | null>(null);

  // Função para lidar com notificações recebidas enquanto o aplicativo está em primeiro plano
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
    });

    return () => subscription.remove();
  }, []);

  const handleWakeTimeChange = (value: string | null) => {
    setWakeTime(value);
    if (value) {
      scheduleDailyNotification(value, 'Hora de Acordar', 'É hora de acordar e começar o dia!');
    }
  };

  const handleSleepTimeChange = (value: string | null) => {
    setSleepTime(value);
    if (value) {
      scheduleDailyNotification(value, 'Hora de Dormir', 'É hora de ir para a cama e descansar!');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <RNPickerSelect
          onValueChange={handleWakeTimeChange}
          items={TIME_OPTIONS_HOURS}
          placeholder={{ label: '--:-- AM/PM', value: null }}
        />
      </View>
      <View>
        <Text style={styles.modalItemText}>TO</Text>
      </View>
      <View>
        <RNPickerSelect
          onValueChange={handleSleepTimeChange}
          items={TIME_OPTIONS_HOURS}
          placeholder={{ label: '--:-- AM/PM', value: null }}
        />
      </View>
    </View>
  );
}
