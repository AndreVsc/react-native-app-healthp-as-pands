import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    gap: 10,
    maxHeight: 50,
    alignItems: 'center',
  },

  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#9D95D6',
  },

  colonText: {
    fontSize: 20,
    color: '#9D95D6',
    marginHorizontal: 5,
  },

  modalItemText: {
    fontSize: 12,
    color: '#9D95D6',
  },
});
