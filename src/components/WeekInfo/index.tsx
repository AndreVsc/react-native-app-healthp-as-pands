import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export function WeekInfo() {
  const { user } = useAuth();

  // Verifique se o usuário e o peso estão definidos e são números
  const peso: any = user?.peso ?? 0; // Usa 0 como valor padrão se user ou peso não estiver definido
  const dailyRequirement = peso * 0.035; // Quantidade que a pessoa deve beber por dia
  const waterIntake = 0; // Aqui você pode definir a lógica para a quantidade de água consumida, se disponível

  return (
    <View>
      <Text style={styles.textPressPorcent}>0%</Text>
      <Text style={styles.textPressMeta}>
        {waterIntake.toFixed(2)} ml / {dailyRequirement.toFixed(2)} ml
      </Text>
    </View>
  );
}
