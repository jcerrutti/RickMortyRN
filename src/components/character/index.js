import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {COLORS} from '../../styles/variables';

const getStatusColor = {
  Dead: '#e8505b',
  Alive: '#c4fb6d',
  unknown: '#f3ecc2',
};

export default function Character({character, onCharacterTap}) {
  const {name, image, status, species} = character;
  const statusColor = getStatusColor[status];
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.touchableContainer}
      onPress={onCharacterTap.bind(this, character)}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.description}>
        <View style={[styles.status, {backgroundColor: statusColor}]} />
        <Text style={styles.regularText}>{status} -</Text>
        <Text style={styles.regularText}> {species}</Text>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    backgroundColor: COLORS.dark.backgroundCharacter,
    flex: 0.5,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#eeeeee',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 160,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 4,
  },
  regularText: {
    color: COLORS.dark.textPrimary,
  },
});
