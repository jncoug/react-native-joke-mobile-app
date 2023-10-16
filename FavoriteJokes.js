import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

function FavoriteJokes({favoriteJokes}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Jokes</Text>
      <FlatList
        data={favoriteJokes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.jokeItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jokeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});

export default FavoriteJokes;
