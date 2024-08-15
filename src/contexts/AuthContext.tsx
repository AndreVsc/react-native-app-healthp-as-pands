import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface User {
  id: number | undefined;
  nome: string;
  email: string;
  peso: string;
  dataNasc?: Date;
  idade?: number;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (params: SignUpParams) => Promise<void>;
  deleteUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  user: null,
  loading: true,
  signIn: async (email: string, password: string) => {},
  signOut: async () => {},
  signUp: async (params: SignUpParams) => {},
  deleteUser: async () => {},
});

const API_URL = 'http://192.168.2.102:5000';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
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
      await syncUserData(data.token);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
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

      const userData: User = await response.json();
      setUser(userData);
    } catch (error) {
      signOut();
    }
  };

  const deleteUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Token recuperado:', token); 

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/user/delete`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Forbidden: You do not have permission to perform this action.');
        }
        throw new Error('Failed to delete user');
      }

      await signOut(); // Optionally sign out after deletion
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut, loading, user, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
