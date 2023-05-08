import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../config/colors';
import { Button, Center, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/StackParams';
import { useReduxDispatch, useReduxSelector } from '../../redux/index';
import { setAuthtentication } from '../../redux/reducers/authReducers/auth';
import { fetchPokemonSelected, fetchPokemons } from '../../redux/services/poke.service';
import { FlatList } from 'react-native';
import { Pokemon } from '../../redux/reducers/pokemonReducer/pokemons.interface';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const { pokemonsList, isLoadingPokemons } = useReduxSelector(state => state.pokemon);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  console.log(pokemonsList);

  const onPress = () => {
    dispatch(setAuthtentication('authenticated'));
    navigation.push('FormScreen');
  };

  const goToPokemonDetails = (name: string, url: string) => {
    navigation.navigate('PokemonDetails', { name, url });
    dispatch(fetchPokemonSelected(url));
  };

  // const renderPokemons = () => {
  //   const pokemons: JSX.Element[] = [];
  //   pokemonsList.forEach(pokemon => {
  //     pokemons.push(<Text>{pokemon.name}</Text>);
  //   });
  //   return pokemons;
  // };

  // const renderPokemonsMap = () =>
  //   pokemonsList.map(pokemon => {
  //     return <Text>{pokemon.name}</Text>;
  //   });

  const renderPokemonsItem = (props: { pokemon: Pokemon }) => {
    const { name, url } = props.pokemon;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.pokemonItems}
        onPress={() => goToPokemonDetails(name, url)}
      >
        <Text color={COLORS.BLACK}>{name}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <SafeAreaView style={styles.safeContainer}>
      <Button onPress={onPress}>Ir a FormScreen</Button>
      {
        isLoadingPokemons ? (
          <Center flex={1}>
            <ActivityIndicator size={'large'} color={COLORS.WHITE} />
          </Center>
        ) : (
          <FlatList
            contentContainerStyle={{ flex: 1 }}
            data={pokemonsList}
            renderItem={({ item }) => renderPokemonsItem({ pokemon: item })}
          />
        )
      }

      {/* {
        isLoadingPokemons ? (
          <Center flex={1}>
            <ActivityIndicator size={'large'} color={COLORS.WHITE} />
          </Center>
        ) : (
          <ScrollView>
            {
              pokemonsList.map(pokemon => {
                return <Text>{pokemon.name}</Text>;
              })
            }
            <Text></Text>
            <Text>render pokemons</Text>
            <Text></Text>
            { renderPokemons() }
            <Text></Text>
            <Text>render pokemons with map</Text>
            <Text></Text>
            { renderPokemonsMap() }
          </ScrollView>
        )
      } */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.LILA,
  },
  pokemonItems: {
    paddingVertical: 3,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
