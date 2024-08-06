import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Coordenada } from './props';
import styles from './styles';

const largura = 260;
const altura = 250;
const tamanhoLua = 50;

export const LightInTheDark: React.FC = () => {
  const [estrelas, setEstrelas] = useState<Coordenada[]>([]);
  const [lua, setLua] = useState<Coordenada>({ x: largura / 2, y: altura / 2 });

  useEffect(() => {
    const criarEstrelas = () => {
      const novasEstrelas: Coordenada[] = [];
      for (let i = 0; i < 100; i++) {
        novasEstrelas.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
        });
      }
      setEstrelas(novasEstrelas);
    };

    criarEstrelas();
  }, []);

  const handlePress = () => {
    const x = Math.random() * (largura - tamanhoLua);
    const y = Math.random() * (altura - tamanhoLua);
    setLua({ x, y });
  };

  return (
    <View style={styles.container}>
      {estrelas.map((estrela, index) => (
        <View
          key={index}
          style={[styles.estrela, { left: estrela.x, top: estrela.y }]}
        />
      ))}
      <TouchableOpacity onPress={handlePress} style={[styles.luaContainer, { left: lua.x, top: lua.y }]}>
        <View style={styles.luaFull} />
        <View style={styles.luaCorte} />
      </TouchableOpacity>
    </View>
  );
};
