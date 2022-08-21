import { Button, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react'

interface ProductProps {
  title: string
  description: string
  price: number
}

export function Product({
  title,
  description,
  price,
}: ProductProps): JSX.Element {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <GridItem
      borderRadius="4px"
      overflow="hidden"
      _hover={{
        boxShadow: 'dark-lg',
      }}
      transition="0.5s"
    >
      <Image src="/brinquedo.png" alt="imagem brinquedo" h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        roundedBottom="md"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="teal.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {title}
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="red.500">
            {formattedPrice}
          </Text>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {description}
          </Text>
          <Button
            bg="teal.300"
            _hover={{ bg: 'teal.400' }}
            transition="0.5s"
            mt="4"
          >
            Comprar
          </Button>
        </Flex>
      </Flex>
    </GridItem>
  )
}
