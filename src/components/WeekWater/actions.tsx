import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';
import { ProgressCircleProps } from '../BlockInsight/props';

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ 
  percentage, 
  size, 
  strokeWidth, 
  backgroundColor,
  title
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={"#076887"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-270 ${size / 2} ${size / 2})`}
        />
        <Text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dy=".3em"
          fontSize={size * 0.4}
          fill={"#076887"}
        >
          {title}
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
