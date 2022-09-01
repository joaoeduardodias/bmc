import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import {
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export function Footer(): JSX.Element {
  const orientationDivider = useBreakpointValue({
    base: true,
    lg: false,
  })
  const showIcons = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="footer"
      w="100%"
      bg="teal.900"
      h={['auto', 'auto', 'auto', '257px']}
      color="white"
    >
      <Flex
        w={['90%', '90%', '90%', '90%', '100%']}
        py="3"
        maxW="1140px"
        mx="auto"
        h="100%"
        align="center"
        justify="center"
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex
          direction="column"
          align="center"
          h="100%"
          w={['auto', 'auto', 'auto', '30rem']}
          mr={['0', '0', '0', '10']}
          pt={['0', '3', '3', '10']}
        >
          <Heading as="strong" fontSize={['1.8rem', '1.8rem', '3xl']} mb="1rem">
            Sobre nós
          </Heading>
          <Text textAlign={['center', 'center', 'center', 'justify']}>
            A BMC brinquedos surgiu com a missão de levar alegria e segurança
            para nossas crianças, através de brinquedos que são feitos de forma
            artesanal proporcionando um cuidado maior com a segurança e
            durabilidade de nossos produtos.
          </Text>
        </Flex>
        {orientationDivider ? (
          <Divider orientation="horizontal" borderColor="gray.400" mt="4" />
        ) : (
          <Divider orientation="vertical" borderColor="gray.400" />
        )}

        <Flex
          direction="column"
          align="center"
          h="100%"
          w={['98%', '98%', '98%', '30rem']}
          ml={['0', '0', '0', '5']}
          pt={['2', '3', '3', '10']}
        >
          <Heading as="strong" fontSize={['1.8rem', '1.8rem', '3xl']} mb="1rem">
            Contato
          </Heading>
          <Flex direction="column" ml={['0', '0', '0', '3rem']}>
            <Flex
              fontSize="1.4rem"
              justify={['center', 'center', 'center', 'initial']}
            >
              {showIcons && <Icon as={FaWhatsapp} mr="3" />}
              <Text as="small">(67) 98151-4265</Text>
            </Flex>
            <Flex
              fontSize="1.4rem"
              justify={['center', 'center', 'center', 'initial']}
            >
              {showIcons && <Icon as={BiMessageSquareDetail} mr="3" />}
              <Text as="small">amario30459@gmail.com</Text>
            </Flex>
            <Flex
              fontSize="1.4rem"
              justify={['center', 'center', 'center', 'initial']}
            >
              {showIcons && <Icon as={FaMapMarkerAlt} mr="3" />}
              <Text
                as="small"
                textAlign={['center', 'center', 'center', 'initial']}
              >
                Avenida Presidente Vargas, 5480 Bairro Vilas Boas
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
