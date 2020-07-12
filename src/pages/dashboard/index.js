import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Character from '../../components/character';
import SearchBox from '../../components/searchBox';
import {getCharacters} from '../../services/rickMortyClient';

import {COLORS} from '../../styles/variables';

export default function Dasbhoard({navigation}) {
  const [searchParams, setSearchParams] = useState({
    page: 1,
    name: null,
  });
  const [characters, setCharacters] = useState([]);
  let flatListRef = useRef(null);

  const fetchCharactersByPage = useCallback(async () => {
    let response;
    const {page, name} = searchParams;
    try {
      response = await getCharacters(page, name);
      if (response.results) {
        setCharacters((prevCharacters) => {
          if (page === 1 && prevCharacters) {
            try {
              flatListRef.scrollToIndex({index: 0});
            } catch (e) {}
            return response.results;
          } else {
            return [...prevCharacters, ...response.results];
          }
        });
      }
    } catch (e) {}
  }, [searchParams, flatListRef]);

  useEffect(() => {
    fetchCharactersByPage();
  }, [fetchCharactersByPage]);

  const endReached = () => {
    setSearchParams((prevParams) => {
      return {
        page: prevParams.page + 1,
        name: prevParams.name,
      };
    });
  };

  const nameChanged = useCallback((text) => {
    setSearchParams({
      page: 1,
      name: text,
    });
  }, []);

  const charactedTapped = (props) => {
    navigation.navigate('Detail', {
      name: props.name,
      character: props,
    });
  };

  const renderCharacter = ({item}) => (
    <Character character={item} onCharacterTap={charactedTapped} />
  );
  return (
    <View style={styles.container}>
      <SearchBox onFinishTyping={nameChanged} />
      <FlatList
        ref={(ref) => (flatListRef = ref)}
        contentContainerStyle={styles.list}
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => String(item.id)}
        numColumns={'2'}
        onEndReached={endReached}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    backgroundColor: COLORS.dark.background,
    paddingTop: 10,
  },
});
