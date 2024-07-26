import React, { useEffect } from 'react';
import { ScrollView, Animated } from 'react-native';

import { BlockInsight } from '../BlockInsight';
import { styles } from './styles';
import { insightSelectionProps } from './props';

export function InsightSelection({ navigation }: insightSelectionProps) {
  // Cria animações para deslocamento vertical e opacidade
  const animations = [new Animated.Value(100), new Animated.Value(100), new Animated.Value(100)];
  const opacityAnimations = [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)];

  useEffect(() => {
    // Define a animação para cada BlockInsight
    Animated.stagger(200, animations.map((anim, index) => 
      Animated.parallel([
        Animated.timing(anim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimations[index], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      ])
    )).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: animations[0] }], opacity: opacityAnimations[0] }}>
        <BlockInsight navigation={navigation} mode='water' />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animations[1] }], opacity: opacityAnimations[1] }}>
        <BlockInsight navigation={navigation} mode='night' />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: animations[2] }], opacity: opacityAnimations[2] }}>
        <BlockInsight navigation={navigation} mode='practice' />
      </Animated.View>
    </ScrollView>
  );
}
