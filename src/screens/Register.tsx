import { VStack } from 'native-base';

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Register() {
    return (
        <VStack flex={1} p={6} bg="gray.600" >
            <Header title='Nova Solicitação' />

            <Input
                placeholder='Número do patrimônio'
                mt={4}
            />

            <Input
                flex={1}
                placeholder='Descrição do problema'
                mt={5}
                multiline
                textAlignVertical='top'
            />

            <Button
                title='Cadastrar'
                mt={5}
            />
        </VStack>

    );
}