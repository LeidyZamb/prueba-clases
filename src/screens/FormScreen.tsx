/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../config/colors';
import { Box, Button, FormControl, Input, Stack, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { useUserForm } from '../hooks/useUserForm';

const FormScreen = () => {
  const { cedula, setCedula, firstNameErrorMessage, firstName, setFirstName, isValidFirstName, validateForm } = useUserForm();
  console.log('cedula: ', cedula);

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
