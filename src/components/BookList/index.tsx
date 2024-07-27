import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';

// Carregar o arquivo JSON
const books = require('./../../../assets/book.json');

export function BookList() {
  const [id, setId] = useState(1);
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
    setLikes(prevLikes =>
      prevLikes.map(like =>
        like.id === bookSelect.id ? { ...like, liked: !like.liked } : like
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTopBook}>
        <Text style={styles.title}>Bedtime Reading</Text>
        <TouchableOpacity onPress={likedPress} style={styles.likeButton}>
          {likeSelect?.liked ? (
            <AntDesign name="heart" size={24} color="#9D95D6" />
          ) : (
            <AntDesign name="hearto" size={24} color="#c4c4c4" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.containerBookInfo}>
        <View style={styles.bookInfo}>
          <FontAwesome6 name="book-open" size={40} color="#9D95D6" />
          <Text style={styles.titleBook}>{bookSelect.nome}</Text>
          <Text>{bookSelect.anoDeLancamento}</Text>
        </View>
        <View style={styles.bookResume}>
          <Text style={styles.textResume}>{bookSelect.resumo}</Text>
          <Text style={styles.textResume}>{bookSelect.autor}</Text>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        {id > 1 && (
          <TouchableOpacity style={styles.buttonNavigationLeft} onPress={() => setId(prevId => prevId - 1)}>
            <Text style={styles.navigationText}>{'< Anterior'}</Text>
          </TouchableOpacity>
        )}
        {id < books.length && (
          <TouchableOpacity style={styles.buttonNavigationRight} onPress={() => setId(prevId => prevId + 1)}>
            <Text style={styles.navigationText}>{'Próximo >'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
