import React from 'react';
import { View, Text } from 'react-native';

import { ButtonBack } from '../../../components/ButtonBack';
import { styles } from './styles';
import { TimerPractice } from '../../../components/Timer';

export function PracticeScreen({navigation}:any) {

  return (

    <View style={styles.container}>

          <View style={styles.containerBack}>
            <ButtonBack navigation={navigation} />
            <Text style={styles.textMenuBack} >Pratice</Text>
          </View>
          
          <View style={styles.containerTop}>
            <TimerPractice modeTime={true} limit={120}/>
          </View>

          <View style={styles.containerWeekSettings}>
            <View style={styles.containerWeek}>
          </View>
          <View style={styles.containerSettings}>
          </View>
        </View>
    </View>
  );
}