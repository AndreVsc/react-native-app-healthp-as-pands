import React from 'react';
import { View, Text } from 'react-native';

import { ButtonBack } from '../../../components/ButtonBack';
import { NightButtons } from '../../../components/NightButtons';

import { styles } from './styles';
import { BookList } from '../../../components/BookList';
import { HourInfo } from '../../../components/HourInfo';

export function NigthScreen({navigation}:any) {
  return (
    <View style={styles.container}>
          <View style={styles.containerBack}>
            <ButtonBack navigation={navigation} />
            <Text style={styles.textMenuBack} >Night</Text>
          </View>
          <View style={styles.containerTopNight}>
              <HourInfo dataMode={true} />
              <View></View>
          </View>
          <View style={styles.containerNight}>
            <View style={styles.containerNightButton}>
              <NightButtons />
            </View>
            <View style={styles.containerSettingsNight}>
              <BookList/>
            </View>
          </View>
    </View>
  );
}