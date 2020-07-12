import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../styles/variables';

export default function Detail({route}) {
  const {image, location, origin, species} = route.params.character;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.description}>
        <Text style={styles.textLabel}>Species:</Text>
        <Text style={styles.textValue}>{species}</Text>
        <Text style={styles.textLabel}>Last known location:</Text>
        <Text style={styles.textValue}>{location.name}</Text>
        <Text style={styles.textLabel}>Origin:</Text>
        <Text style={styles.textValue}>{origin.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.background,
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  image: {
    width: '100%',
    height: 300,
  },
  textLabel: {
    color: COLORS.dark.textPrimary,
    fontSize: 20,
    fontWeight: '600',
  },
  textValue: {
    color: COLORS.dark.textSecondary,
    fontSize: 22,
    marginVertical: 6,
  },
  description: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});
