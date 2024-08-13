// src/auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// URL base da API
const API_URL = 'http://192.168.2.106:5000';

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token !== null;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, { // URL completa para o login
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    await AsyncStorage.setItem('token', data.token);
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Propague o erro para que o componente chamador possa lidar com ele
  }
};

export const register = async (email: string, password: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, { // URL completa para o registro
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }
  } catch (error) {
    console.error('Registration error:', error);
    throw error; // Propague o erro para que o componente chamador possa lidar com ele
  }
};

export const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('Logout error:', error);
    throw error; // Propague o erro para que o componente chamador possa lidar com ele
  }
};
