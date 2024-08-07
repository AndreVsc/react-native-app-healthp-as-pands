import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    gap: 15,
    maxHeight: 50,
    alignItems: 'center',
  },

  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#AAAB7D',
  },

  colonText: {
    fontSize: 20,
    color: '#AAAB7D',
    marginHorizontal: 5,
  },

  modalItemText: {
    fontSize: 12,
    color: '#AAAB7D',
  },
});
