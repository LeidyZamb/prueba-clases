import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../config/colors';
import { Box, Button, FormControl, Icon, IconButton, Input, Stack, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { useUserForm } from '../hooks/useUserForm';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../navigation/StackParams';
import RemixIcon from '../components/Icon';

const FormScreen = () => {
  const { cedula, setCedula, firstNameErrorMessage, firstName, setFirstName, isValidFirstName, validateForm } = useUserForm();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            borderRadius={100}
            icon = {
              <Icon
                as ={<RemixIcon name="arrow-left" color= "black" size={20}/>}
              />
            }
            onPress = {() => navigation.goBack()}
          />
        );
      },
      headerStyle:{
        backgroundColor: 'skyblue',
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Box py={4}>
        <FormControl style={styles.inputForm}>
          <FormControl.Label>
            <Text color={COLORS.WHITE}>Cedula</Text>
          </FormControl.Label>
          <Input
            value={cedula}
            onChangeText={(text) => setCedula(text)}
            borderColor={COLORS.BLACK}
            backgroundColor={COLORS.WHITE}
            _focus={{
              backgroundColor: COLORS.GRAY,
              borderColor: COLORS.WHITE,
            }}
          />
          <FormControl.ErrorMessage>
            La cedula es incorrecta
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl style={styles.inputForm} isInvalid={!isValidFirstName}>
          <FormControl.Label>
            <Text color={COLORS.WHITE}>Nombre</Text>
          </FormControl.Label>
          <Input
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            borderColor={COLORS.BLACK}
            backgroundColor={COLORS.WHITE}
            _focus={{
              backgroundColor: COLORS.GRAY,
              borderColor: COLORS.WHITE,
            }}
          />
          <FormControl.ErrorMessage>
            {firstNameErrorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
        <Stack p={4}>
          <Button
            isDisabled={!validateForm()}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    paddingHorizontal: 20,
  },
});

export default FormScreen;
