import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { bookListProps } from './props';

// Carregar o arquivo JSON
const books = require('./../../../assets/book.json');

export function BookList({ id }: bookListProps) {
  // Estado para controlar se o livro está curtido ou não
  const [likes, setLikes] = useState(
    Array.from({ length: 10 }, (_, index) => ({ id: index + 1, liked: false }))
  );

  const bookSelect = books.find((book: any) => book.id === id);
  const likeSelect = likes.find((like: any) => like.id === bookSelect?.id);

  if (!bookSelect) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Book not found</Text>
      </View>
    );
  }

  const likedPress = () => {
    // Atualiza o estado de 'liked' para o livro selecionado
    setLikes(prevLikes =>
      prevLikes.map(like =>
        like.id === bookSelect.id ? { ...like, liked: !like.liked } : like
      )
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Leitura antes de dormir</Text>
        <TouchableOpacity onPress={likedPress}>
          {likeSelect?.liked ? (
            <AntDesign name="heart" size={24} color="#9D95D6" />
          ) : (
            <AntDesign name="hearto" size={24} color="#c4c4c4" />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{bookSelect.nome}</Text>
      <Text>{bookSelect.anoDeLancamento}</Text>
      <Text>{bookSelect.resumo}</Text>
      <Text>{bookSelect.autor}</Text>
    </View>
  );
};
