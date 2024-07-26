import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface ProgressBarProps {
  percentage: number; // De 0 a 100
  width: number;
  height: number;
  color: string;
  backgroundColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  width, 
  height, 
  color, 
  backgroundColor
}) => {
  const progressHeight = (percentage / 100) * height;

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg width={width} height={height}>
        <Rect
          x="0"
          y={height - progressHeight}
          width={width}
          height={progressHeight}
          fill={color}
          rx={width / 2}
          ry={width / 2}
        />
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

export default ProgressBar;
