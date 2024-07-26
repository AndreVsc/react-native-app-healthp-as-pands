import React from 'react';
import { View, Text } from 'react-native';

import { ButtonBack } from '../../../components/ButtonBack';
import { HourTop } from '../../../components/HourTop';
import { NightButtons } from '../../../components/NightButtons';

import { styles } from './styles';
import { BookList } from '../../../components/BookList';

export function NigthScreen({navigation}:any) {
  return (
    <View style={styles.container}>
          <View style={styles.containerBack}>
            <ButtonBack navigation={navigation} />
            <Text style={styles.textMenuBack} >Night</Text>
          </View>
          <View style={[styles.containerTop]}>
              <HourTop/>
              <View></View>
          </View>
          <View style={styles.containerNightSettings}>
            <View style={styles.containerNight}>
              <NightButtons />
            </View>
            <View style={styles.containerSettings}>
              <BookList id={2} />
            </View>
          </View>
    </View>
  );
}