import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Exerc1 from '../../../assets/practice/Pratice/png/001-bola-de-exercicio.png';

import { blockInsightProps } from './props';
import { styles } from './styles';

import { PeriodNight } from '../PeriodNight';
import { WeekWater } from '../WeekWater';
import { WeekInfo } from '../WeekInfo';
import { HourInfo } from '../HourInfo';

export function BlockInsight({ mode, navigation }: blockInsightProps) {

  return (
    <View style={styles.containerBlock}>
      {mode === 'water' ? (
        <>
          <TouchableOpacity style={styles.containerPrees} onPress={() => { navigation.navigate('Water'); }}>
            <WeekInfo />
            <SimpleLineIcons name="arrow-right" size={44} color="white" />
          </TouchableOpacity>
          <View style={styles.containerDetails}>
            <WeekWater />
          </View>
        </>
      ) : mode === 'night' ? (
        <>
          <TouchableOpacity style={[styles.containerPrees, { backgroundColor: '#9D95D6' }]} onPress={() => { navigation.navigate('Night'); }}>
            <HourInfo dataMode={false}/>
            <SimpleLineIcons name="arrow-right" size={44} color="white" />
          </TouchableOpacity>
          <View style={styles.containerDetails}>
            <PeriodNight />
          </View>
        </>
      ) : mode === 'practice' ? (
        <TouchableOpacity style={styles.containerPractice} onPress={() => { navigation.navigate('Practice'); }}>
          <View style={[styles.containerPrees, { backgroundColor: 'transparent',height:100, padding:20,  }]}>
            <Text style={styles.textPractice}>Cerca de um quarto da população não consegue se exercitar nem por meia hora.</Text>
            <SimpleLineIcons name="arrow-right" size={44} color="white" />
          </View>
          <View style={[styles.containerImage,{borderRadius:20}]}>
            <Image source={Exerc1} style={[styles.imagePractice, { tintColor: '#E19BB0' }]}  />
            <Image source={Exerc1} style={[styles.imagePractice, { tintColor: '#E19BB0' }]}  />
            <Image source={Exerc1} style={[styles.imagePractice, { tintColor: '#E19BB0' }]}  />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
