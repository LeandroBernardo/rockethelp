import { HStack, IconButton, Heading, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native'

import { useNavigation } from '@react-navigation/native'


type Props = StyledProps & {
    title: string;
}

export function Header({ title, ...rest }: Props) {

    const navigation = useNavigation()

    const { colors } = useTheme()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pb={6}
            pt={12}
            {...rest}
        >
            <IconButton
                onPress={handleGoBack}
                icon={<CaretLeft color={colors.gray[200]} size={24} />}
            />

            <Heading flex={1} ml={-6} color="gray.100" textAlign="center" fontSize="lg"  >
                {title}
            </Heading>

        </HStack>
    );
}