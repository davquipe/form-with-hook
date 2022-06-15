import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useForm } from '../hooks/useForm'

export const FormCustomHook = () => {

    const { formState, onInputChange, nombre, email, password } = useForm({
        nombre: '',
        email: '',
        password: ''
    })


    console.log(formState);

    // const { nombre, email, password } = formState


  return (
    <Stack direction='row' spacing={4} align='center'>
        <FormControl>

            <FormLabel>
                Nombre
            </FormLabel>

                <Input 
                    type='text'
                    name='nombre'
                    placeholder='David'
                    value={nombre} 
                    onChange={onInputChange} 
                />

            <FormLabel >
                Email
            </FormLabel>

                <Input 
                    type='email' 
                    placeholder='usurio@correo.com'
                    name='email' 
                    onChange={onInputChange} 
                    value={email}
                />

            <FormLabel >
                Contraseña
            </FormLabel>

                <Input 
                    type='password' 
                    placeholder='Contrasenia'
                    value={password} 
                    onChange={onInputChange} 
                    name='password' 
                />

            <Button type='submit' colorScheme='teal' variant='outline' mt='4'>
                Enviar
            </Button>

        </FormControl>
    </Stack>
  )
}
