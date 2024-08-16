import React, { useState } from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './styles';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [peso, setPeso] = useState<string>('');
  const [dataNasc, setDataNasc] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [idTipoDeUsuario, setIdTipoDeUsuario] = useState<number>(1); // Ajuste conforme necessário
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useAuth();

  const handleRegister = () => {
    signUp({
      confirmPassword,
      email,
      password,
      nome,
      peso,
      dataNasc,
      idTipoDeUsuario,
      navigation,
      setError,
    });
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDataNasc(currentDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    console.log(dataNasc);
  };

  const showDatePickerDialog = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <Text style={styles.label}>Nome completo:</Text>
      <TextInput 
        style={styles.input}  
        value={nome} 
        onChangeText={setNome} 
      />

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput 
        style={styles.input}  
        value={peso} 
        onChangeText={setPeso} 
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data de nascimento:</Text>
      <TextInput
        onFocus={showDatePickerDialog}
        editable={false} 
      />
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />

      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input}  
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />

      <Text style={styles.label}>Confirme a senha:</Text>
      <TextInput 
        style={styles.input} 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        secureTextEntry 
      />

      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
