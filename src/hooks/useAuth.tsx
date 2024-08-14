import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.2.107:5000';

interface SignUpParams {
  confirmPassword: string;
  email: string;
  password: string;
  nome: string;
  peso: string;
  dataNasc: string;
  idTipoDeUsuario: number;
  navigation: any;
  setError: (error: string | null) => void;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        setIsAuthenticated(!!token);
        if (token) {
          // Sincroniza dados do usuário após autenticação
          await syncUserData(token);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      await AsyncStorage.setItem('token', data.token);
      setIsAuthenticated(true);

      // Sincroniza os dados do usuário após o login
      await syncUserData(data.token);
    } catch (error) {
      throw error;
    }
  };

  const signUp = async ({
    confirmPassword,
    email,
    password,
    nome,
    peso,
    dataNasc,
    idTipoDeUsuario,
    navigation,
    setError,
  }: SignUpParams) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
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

      await signIn(email, password);
      navigation.navigate('Login');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };


  const signOutUser = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const syncUserData = async (token: string) => {
    try {
      const response = await fetch(`${API_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      // Armazena os dados do usuário localmente, se necessário
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error syncing user data:', error);
    }
  };

  // Adicionar lembrete
  const addReminder = async (idUsuario: number, descricao: string, horarioFinal: string) => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${API_URL}/reminder`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUsuario, descricao, horarioFinal }),
      });

      if (!response.ok) {
        throw new Error('Failed to add reminder');
      }

      const data = await response.json();
      console.log(data.message); // Exibe a mensagem de sucesso
    } catch (error) {
      console.error('Error adding reminder:', error);
    }
  };

  // Atualizar lembrete
  const updateReminder = async (idLembrete: number, horarioFinal: string) => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${API_URL}/reminder/${idLembrete}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ horarioFinal }),
      });

      if (!response.ok) {
        throw new Error('Failed to update reminder');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error updating reminder:', error);
    }
  };

  return {
    isAuthenticated,
    loading,
    signIn,
    signUp,
    signOutUser,
    addReminder,
    updateReminder,
  };
}
