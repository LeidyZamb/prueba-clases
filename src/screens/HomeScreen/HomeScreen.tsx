import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../config/colors';
import { Button, Center, ScrollView, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/StackParams';
import { useReduxDispatch, useReduxSelector } from '../../redux/index';
import { setAuthtentication } from '../../redux/reducers/authReducers/auth';
import { fetchPokemons } from '../../redux/services/poke.service';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const { pokemonsList, isLoadingPokemons } = useReduxSelector(state => state.pokemon);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch( fetchPokemons() );
  }, [dispatch]);

  console.log(pokemonsList);

  const onPress = () => {
    dispatch(setAuthtentication('authenticated'));
    navigation.push('FormScreen');
  };

  const renderPokemons = () => {
    const pokemons: JSX.Element[] = [];
    pokemonsList.forEach(pokemon => {
      pokemons.push(<Text>{pokemon.name}</Text>);
    });
    return pokemons;
  };

  const renderPokemonsMap = () =>
    pokemonsList.map(pokemon => {
      return <Text>{pokemon.name}</Text>;
    });



  return (
    <SafeAreaView style={styles.safeContainer}>
      <Button onPress={onPress}>Ir a FormScreen</Button>
      {
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
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.LILA,
  },
});

export default HomeScreen;
