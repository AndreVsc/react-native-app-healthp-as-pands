import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    maxHeight: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  colonText: {
    fontSize: 20,
    color: '#000',
    marginHorizontal: 5,
  },

  modalItemText: {
    fontSize: 12,
    color: '#c4c4c4',
  },
});
