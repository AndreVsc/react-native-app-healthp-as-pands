import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';

interface CustomButtonProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  text: string;
  onPress: () => void;
  iconLibrary: 'FontAwesome' | 'Ionicons' | 'FontAwesome5' | 'FontAwesome6';
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  iconName,
  iconSize = 40,
  iconColor = '#000',
  text,
  onPress,
  iconLibrary,
  containerStyle,
  textStyle,
}) => {
  // Mapeia os ícones para os componentes correspondentes
  const getIconComponent = () => {
    switch (iconLibrary) {
      case 'FontAwesome':
        return FontAwesome;
      case 'Ionicons':
        return Ionicons;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'FontAwesome6':
        return FontAwesome6;
      default:
        return null;
    }
  };

  // Obtém o componente de ícone correspondente
  const IconComponent = getIconComponent();

  return (
    <TouchableOpacity style={[styles.option, containerStyle]} onPress={onPress}>
      {IconComponent && (
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
