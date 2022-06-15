import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FormCustomHook } from './components/FormCustomHook';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={40}>
            {/* <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <Input type='text' placeholder='Nombre' htmlSize={40} width='auto' value={datos.nombre} />
            <Input type='email' placeholder='Nombre' htmlSize={40} width='auto' value={datos.email} />
            <Input type='password' placeholder='Nombre' htmlSize={40} width='auto' value={datos.password} />
            <Button type='submit`' colorScheme='teal' variant='outline' size='lg'>
              Button
            </Button> */}
          <FormCustomHook />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
