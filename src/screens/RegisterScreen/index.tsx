import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { styles } from './styles';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [peso, setPeso] = useState<string>('');
  const [dataNasc, setDataNasc] = useState<string>('');
  const [idTipoDeUsuario, setIdTipoDeUsuario] = useState<number>(1); // Ajuste conforme necessário
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();

  const registerUser = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Substitua <seu_ip_local> pelo IP real da sua máquina
      const response = await fetch('http://192.168.2.106:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password, nome, peso, dataNasc, idTipoDeUsuario }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      // Após o registro, faça login automaticamente
      await signIn(email, password);
      navigation.navigate('Login');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  }

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

      <Text style={styles.label}>Data de nascimento (YYYY-MM-DD):</Text>
      <TextInput 
        style={styles.input}  
        value={dataNasc} 
        onChangeText={setDataNasc} 
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
      <Button title="Register" onPress={registerUser} />
    </View>
  );
};

export default RegisterScreen;
