import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { hourInfoProps } from './props';

const Clock = ({dataMode}:hourInfoProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // a hora '0' deve ser '12'
    const strHours = hours.toString().padStart(2, '0');
    return { time: `${strHours}:${minutes}`, period: ampm };
  };

  const { time: formattedTime, period } = formatTime(time);
  const formattedDate = time.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {formattedTime} <Text style={styles.periodText}>{period}</Text>
      </Text>
      {dataMode?(<><Text style={styles.dateText}>{formattedDate}</Text></>):(<></>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  timeText: {
    fontSize: 40,
    color: '#fff',
  },
  periodText: {
    fontSize: 20,
    color: '#fff',
  },
  dateText: {
    alignSelf:'flex-start',
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
  },
});

export default Clock;
