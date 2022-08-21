import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import { Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'

export function Footer(): JSX.Element {
  return (
    <Flex as="footer" w="100%" bg="teal.900" h="257px" color="white">
      <Flex
        w="100%"
        py="3"
        maxW="1140px"
        mx="auto"
        h="100%"
        align="center"
        justify="center"
      >
        <Flex
          direction="column"
          align="center"
          h="100%"
          w="30rem"
          mr="10"
          pt="10"
        >
          <Heading as="strong" fontSize="3xl" mb="1rem">
            Sobre nós
          </Heading>
          <Text textAlign="justify">
            A BMC brinquedos surgiu com a missão de levar alegria e segurança
            para nossas crianças, através de brinquedos que são feitos de forma
            artesanal proporcionando um cuidado maior com a segurança e
            durabilidade de nossos produtos.
          </Text>
        </Flex>
        <Divider orientation="vertical" borderColor="gray.400" />
        <Flex
          direction="column"
          align="center"
          h="100%"
          w="30rem"
          ml="5"
          pt="10"
        >
          <Heading as="strong" fontSize="3xl" mb="1rem">
            Contato
          </Heading>
          <Flex direction="column" ml="3rem">
            <Flex fontSize="1.4rem">
              <Icon as={FaWhatsapp} mr="3" />
              <Text as="small">(67) 98151-4265</Text>
            </Flex>
            <Flex fontSize="1.4rem">
              <Icon as={BiMessageSquareDetail} mr="3" />
              <Text as="small">amario30459@gmail.com</Text>
            </Flex>
            <Flex fontSize="1.4rem">
              <Icon as={FaMapMarkerAlt} mr="3" />
              <Text as="small">
                Avenida Presidente Vargas, 5480 Bairro Vilas Boas
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
