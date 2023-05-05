import React from 'react';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../config/colors';
import { Stack, Input, Box, FormControl } from 'native-base';
import Icon from '../components/Icon';

const InputsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Stack space="md" w="2/3" mx="auto">
        <Input size="xs" placeholder="Hola" placeholderTextColor="black"
          _focus={{
            borderColor: 'amber.100',
          }}/>
      </Stack>

      <Box>
        <FormControl isRequired>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              leftElement={<Icon name="lock" type="line" size="20"/>}
              placeholderTextColor="white"
              placeholder="password"
              type="password"
              defaultValue="123"/>
          </Stack>
        </FormControl>
      </Box>
    </SafeAreaView>
  );
};

export default InputsScreen;
