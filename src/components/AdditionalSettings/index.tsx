import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import { getExerciseById } from './actions';

interface AdditionalSettingsProps {
  id: number;
}

const AdditionalSettings: React.FC<AdditionalSettingsProps> = ({ id }) => {
  const exercise = getExerciseById(id);

  if (!exercise) {
    return <Text style={styles.notFoundText}>Exercise not found</Text>;
  }

  return (
    <ScrollView style={styles.containerSettings}>
      <View>
        <Text style={styles.exerciseTime}>5 min</Text>
        <Image source={{ uri: exercise.image }} style={[styles.imagePractice, { tintColor: '#E19BB0' }]} />
      </View>
      <View>
        <Text style={styles.exerciseTitle}>{exercise.exercise}</Text>
        <Text style={styles.exerciseDescription}>{exercise.description}</Text>
      </View>
    </ScrollView>
  );
};

export default AdditionalSettings;
