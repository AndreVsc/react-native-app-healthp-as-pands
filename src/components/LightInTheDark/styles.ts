import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 250,
    position: 'relative',
    backgroundColor: '#fff',
  },
  estrela: {
    position: 'absolute',
    width: 5,
    height: 5,
    backgroundColor: '#9D95D6',
    borderRadius: 5,
  },
  luaContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  luaFull: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#7F76B8',
    borderRadius: 25,
    overflow: 'hidden',
  },
  luaCorte: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    left: 15,
    top: 0,
  },
});

export default styles;
