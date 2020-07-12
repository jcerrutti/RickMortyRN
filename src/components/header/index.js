import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Rick And Morty Characters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#eeeeee',
    fontSize: 24,
    fontWeight: '600',
  },
});
