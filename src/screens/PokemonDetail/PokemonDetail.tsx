import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../config/colors';
import { Center, Text } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/StackParams';
import { useReduxSelector } from '../../redux';

interface Props extends NativeStackScreenProps<StackParamsList, 'PokemonDetails'> { }

const PokemonDetail = (props: Props) => {
  const { name } = props.route.params;
  const { navigation } = props;
  const { pokemonSelected } = useReduxSelector(state => state.pokemon);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${name}`,
    });
  }, [name, navigation]);



  return (
    <SafeAreaView style={styles.safeContainer}>
      <Center>
        {
          pokemonSelected.abilities.map(ability => {
            return <Text>{ability.ability.name}</Text>;
          })
        }
        < Text > {pokemonSelected.base_experience}</Text>
      </Center>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.LILA,
  },
});

export default PokemonDetail;
