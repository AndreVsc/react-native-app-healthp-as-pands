import React from 'react';
import { View } from 'react-native';

import Timer from './actions';
import { styles } from './styles';
import { TimerProps } from './props';

export function TimerPractice({modeTime}:TimerProps) {
  return (
    <>
      <Timer limit={120} modeTime={modeTime}/>
    </>
  );
}