import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

// this will be a component that we can use in our App.js file.
function JokeGenerator() {
  // useState is a hook to update components dynamically. i.e. setJoke is a function to update the joke value
  const [joke, setJoke] = useState('');
  const [favoriteJokes, setFavoriteJokes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false); // track favorite button state

  const getJoke = () => {
    // axios is http requests for react native
    axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then(response => {
        // update the 'joke' state and 'favorite' state when the joke retrieved from the API
        setJoke(response.data.setup + ' ' + response.data.punchline);
        setIsFavorite(false);
      })
      .catch(error => {
        console.error('Error getting the joke:', error);
      });
  };
  // toggleFavorite will update the favoriteJokes useState
  const toggleFavorite = () => {
    // check if the joke is already in the favorites
    if (!favoriteJokes.includes(joke)) {
      // add the joke to favorites
      setFavoriteJokes([...favoriteJokes, joke]); // spread operator to add new joke after the old ones
      setIsFavorite(true); // change button color when toggled
    } else {
      const updatedFavorites = favoriteJokes.filter(
        favorite => favorite !== joke,
      );
      setFavoriteJokes(updatedFavorites);
      setIsFavorite(false);
    }
  };

  // useEffect is a hook that performs a side effect, like using an api or something.
  useEffect(() => {
    getJoke();
  }, []); // for some reason this empty array is needed to run once when we use the jokegenerator

  const favoriteButtonStyles = isFavorite
    ? [styles.favoriteButton, styles.favoriteButtonPressed]
    : styles.favoriteButton;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.jokeText}>{joke}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Get another Joke"
            style={styles.customButton}
            onPress={getJoke}>
            <Text style={styles.buttonText}>Get Another Joke</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={favoriteButtonStyles}
            onPress={toggleFavorite}>
            <Text style={styles.favoriteButtonText}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//styles to design the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  jokeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customButton: {
    backgroundColor: 'darkblue',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    flex: 1,
  },
  favoriteButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  favoriteButtonPressed: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default JokeGenerator;
