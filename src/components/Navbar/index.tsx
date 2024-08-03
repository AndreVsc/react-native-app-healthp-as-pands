import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { motion, useCycle } from 'framer-motion';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';

type menuScreenProps = {
  navigation: NavigationProp<any, any>;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const useDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = React.useState({ height: 0 });

  React.useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setDimensions({ height });
    }
  }, [ref]);

  return dimensions;
};

const MenuToggle: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <TouchableOpacity onPress={toggle}>
    <Ionicons name="settings-sharp" size={22} color="black" />
  </TouchableOpacity>
);

const Navigation: React.FC = () => (
  <View style={styles.navigation}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
  </View>
);

export function Navbar({ navigation }: menuScreenProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <View style={styles.containerNavbarLeftItems}>
        <View style={styles.acountNavbarItems}>
          <TouchableOpacity onPress={() => { navigation.navigate('Account') }}>
            <FontAwesome6 name="user-large" size={20} color="#617CA6" />
          </TouchableOpacity>
        </View>
        <Text style={styles.textNavbarItems}>Insights</Text>
      </View>
      <View style={styles.containerNavbarRigthItems}>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div style={styles.background} variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </View>
    </>
  );
}
