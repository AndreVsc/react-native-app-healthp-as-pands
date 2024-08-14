import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        width: '100%',
        height: 60,
        borderRadius: 20,
        gap: 15,
        borderLeftWidth: 1,
        borderLeftColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
      },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});
