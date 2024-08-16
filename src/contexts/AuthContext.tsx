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
  nome: string;
  peso: string;
  email: string;
  idTipoDeUsuario: number;
  dataNasc?: Date;
  idade?: number;
  tipo?: string;
  id: number | undefined;
}

interface WaterData {
  tamanhoCopo: number;
  Domingo: number;
  Segunda: number;
  Terca: number;
  Quarta: number;
  Quinta: number;
  Sexta: number;
  Sabado: number;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  water: WaterData | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (params: SignUpParams) => Promise<void>;
  deleteUser: () => Promise<void>;
  fetchWaterData: () => Promise<void>;
  updateWaterData: (data: WaterData) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  user: null,
  water: null,
  loading: true,
  signIn: async (email: string, password: string) => {},
  signOut: async () => {},
  signUp: async (params: SignUpParams) => {},
  deleteUser: async () => {},
  fetchWaterData: async () => {},
  updateWaterData: async (data: WaterData) => {},
});

const API_URL = 'http://192.168.2.102:5000';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [water, setWater] = useState<WaterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        if (token) {
          await syncUserData(token);
          await fetchWaterData(); // Fetch water data when authenticated
          setIsAuthenticated(true);
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
  
      const token = data.token;
      
      if (!token) {
        throw new Error('Token not received from server');
      }
  
      await AsyncStorage.setItem('token', token);
  
      await syncUserData(token);
      await fetchWaterData(); // Fetch water data after signing in
  
      setIsAuthenticated(true);
  
    } catch (error) {
      console.error('Login Error:', error);
      throw new Error('An unexpected error occurred');
    }
  };
  

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
      setWater(null); // Clear water data on sign out
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

  const fetchWaterData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/user/water-record`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch water data');
      }

      const waterData: WaterData = await response.json();
      setWater(waterData);

    } catch (error) {
      console.error('Error fetching water data:', error);
    }
  };

  const updateWaterData = async (data: WaterData) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch(`${API_URL}/user/create-water-record`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update water data');
      }

      await fetchWaterData(); // Refresh water data after update
    } catch (error) {
      console.error('Error updating water data:', error);
    }
  };

  const deleteUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    
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
      // Verificar se há uma resposta JSON com erro
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to delete user');
    }

    await signOut(); // Optionally sign out after deletion
    console.log('User deleted successfully');
    
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};


  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut, loading, user, deleteUser, water, fetchWaterData, updateWaterData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
