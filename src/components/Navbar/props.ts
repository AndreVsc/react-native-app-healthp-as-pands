import { NavigationProp } from '@react-navigation/native';

export type menuScreenProps = {
  navigation: NavigationProp<any, any>;
};

interface MenuToggleProps {
    toggle: () => void;
  }