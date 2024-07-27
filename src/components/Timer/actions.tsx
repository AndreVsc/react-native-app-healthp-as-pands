import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const formatTime = (time: number): string => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${Number(minutes) % 60}`.slice(-2);
  return `${getMinutes} : ${getSeconds}`;
};

interface TimerProps {
  limit: number;
  modeTime: boolean;
}

const Timer: React.FC<TimerProps> = ({ limit, modeTime }) => {
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Stopped");

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timerOn) {
      setStatus("Running");
      timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime < limit) {
            return prevTime + 1;
          } else {
            if (timer) clearInterval(timer);
            setStatus("Completed");
            setTimerOn(false);
            return prevTime;
          }
        });
      }, 1000);
    } else if (!timerOn && time !== 0) {
      if (timer) clearInterval(timer);
      setStatus("Paused");
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerOn, time, limit]);

  const resetTimer = () => {
    setStatus("Resetting");
    setTime(0);
    setTimerOn(false);
    setTimeout(() => setStatus("Stopped"), 100);
  };

  const renderControls = () => (
    <View style={styles.buttons}>
      {!timerOn && time === 0 && (
        <Button title="Start" onPress={() => setTimerOn(true)} />
      )}
      {timerOn && <Button title="Pause" onPress={() => setTimerOn(false)} />}
      {!timerOn && time > 0 && (
        <Button title="Resume" onPress={() => setTimerOn(true)} />
      )}
      <Button title="Reset" onPress={resetTimer} />
    </View>
  );

  return (
    <View style={styles.container}>
      {modeTime ? (
        <>
          <Text style={styles.textTimer}>{formatTime(time)}</Text>
          <Text style={styles.textTimerStatus}>{status}</Text>
        </>
      ) : (
        renderControls()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:50,
    
  },
  textTimer: {
    color: "#ffffff",
    fontSize: 40,
  },
  textTimerStatus: {
    color: "#ffffff",
    fontSize: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Timer;
