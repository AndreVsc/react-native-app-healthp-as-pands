import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import { styles } from './styles';
import { waterScreenProps } from './props';

import { WeekInfo } from '../../../components/WeekInfo';
import { WeekWater } from '../../../components/WeekWater';

import { ButtonBack } from '../../../components/ButtonBack';
import { BoxWater } from '../../../components/BoxWater';

import { MaterialCommunityIcons } from '@expo/vector-icons';



export function WaterScreen({navigation}:waterScreenProps) {
  
  function WeekSettings() {
    return (
      <>
        <View style={styles.containerWaterSettings}>
          <Text style={styles.textWaterSettings}>Infos</Text>
          <Text style={styles.textWaterSettings}>99%</Text>
        </View>
        <BoxWater />
      </>
    );
  }

  function ButtonWater() {
    return (
      <TouchableOpacity style={styles.buttonWater}>
          <MaterialCommunityIcons name="cup" size={40} color="#2a8aaa" />
      </TouchableOpacity>
    );
  }

  return (
        <View style={styles.container}>
          <View style={styles.containerBack}>
            <ButtonBack navigation={navigation} />
            <Text style={styles.textMenuBack} >Water</Text>
          </View>
          <View style={styles.containerTop}>
            <WeekInfo />
            <ButtonWater/>
          </View>
          <View style={styles.containerWeekSettings}>
            <View style={styles.containerWeek}>
              <WeekWater />
            </View>
            <View style={styles.containerSettings}>
              <WeekSettings />
            </View>
          </View>
      </View>
  );
}