import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import { styles } from '../../screens/InsightScreens/PracticeScreen/styles';

interface ControlButtonsProps {
  isRunning: boolean;
  isConcluded: boolean;
  time: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ isRunning, isConcluded, time, start, pause, reset }) => {
  return (
    <View style={styles.containerPractice}>
      {isConcluded ? (
        <>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="#C7617F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Feather name="refresh-ccw" size={25} color="#C7617F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="#C7617F" style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {isRunning ? (
            <TouchableOpacity style={styles.button} onPress={pause}>
              <Ionicons name="pause" size={25} color="#C7617F" />
            </TouchableOpacity>
          ) : (
            <>
              {time === 0 && (
                <TouchableOpacity style={styles.button}>
                  <MaterialIcons name="arrow-back-ios-new" size={24} color="#C7617F" />
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.button} onPress={start}>
                <Entypo name="controller-play" size={25} color="#C7617F" />
              </TouchableOpacity>
              {time === 0 && (
                <TouchableOpacity style={styles.button}>
                  <MaterialIcons name="arrow-back-ios-new" size={24} color="#C7617F" style={{ transform: [{ rotate: '180deg' }] }} />
                </TouchableOpacity>
              )}
            </>
          )}
          {(time !== 0 || isRunning) && (
            <TouchableOpacity style={styles.button} onPress={reset}>
              <Feather name="refresh-ccw" size={25} color="#C7617F" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default ControlButtons;
