import React from 'react';
import { View } from 'react-native';

import Clock from './actions';
import { hourInfoProps } from './props';

export function HourInfo({dataMode}:hourInfoProps) {
  return (
    <>
        <Clock dataMode={dataMode}  />
    </>
  );
}