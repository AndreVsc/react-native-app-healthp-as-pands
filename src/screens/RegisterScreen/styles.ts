import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      color:'#000' ,
      padding:10,
    },
    error: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
        marginTop: 16,
      },
  });
  