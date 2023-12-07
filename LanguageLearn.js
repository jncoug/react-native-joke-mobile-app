// Import necessary components from React and React Native
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Audio} from 'expo-av'; // Assuming you are using Expo Audio

// BodyParts data containing information about each body part
const bodyPartsData = [
  {
    id: '1',
    name: 'Head',
    image: require('./assets/head.jpg'),
    audio: require('./assets/head_audio.mp3'),
  },
  {
    id: '2',
    name: 'Eyes',
    image: require('./assets/eyes.jpg'),
    audio: require('./assets/eyes_audio.mp3'),
  },
  {
    id: '3',
    name: 'Nose',
    image: require('./assets/nose.jpg'),
    audio: require('./assets/nose_audio.mp3'),
  },
  // Add more body parts as needed
];

// LanguageLearning component
const LanguageLearning = () => {
  // State to track the display mode (text or image) for each card
  const [displayMode, setDisplayMode] = useState({});

  // Function to play audio and toggle the display mode when a card is clicked
  const playAudio = async item => {
    // Toggle display mode
    setDisplayMode(prevDisplayMode => ({
      ...prevDisplayMode,
      [item.id]: prevDisplayMode[item.id] === 'text' ? 'image' : 'text',
    }));

    // Play audio
    const {sound} = await Audio.Sound.createAsync(item.audio, {
      shouldPlay: true,
    });
  };

  // Render each card item
  const renderBodyPartCard = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => playAudio(item)}>
      {displayMode[item.id] === 'text' ? (
        <Text style={styles.cardText}>{item.name}</Text>
      ) : (
        <>
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>{item.name}</Text>
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Body Parts in English</Text>

      {/* List of Body Part Cards */}
      <FlatList
        data={bodyPartsData}
        renderItem={renderBodyPartCard}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
});

// Export the LanguageLearning component
export default LanguageLearning;
