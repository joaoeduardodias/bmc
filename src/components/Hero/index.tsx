import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

export function Hero(): JSX.Element {
  return (
    <Grid
      as="section"
      bg="white"
      w="100%"
      h="23rem"
      pl="4"
      templateColumns="repeat(2,1fr)"
      templateAreas={`"title images"
                      "text images"`}
      boxShadow="xl"
      rounded="md"
    >
      <GridItem
        area="title"
        display="flex"
        alignItems="center"
        color="blue.700"
      >
        <Heading as="h1" fontSize="6xl" fontWeight="extrabold">
          Brinquedos de Alta Duração
        </Heading>
      </GridItem>
      <GridItem area="text" color="black">
        <Text fontWeight="extrabold" fontSize="2xl">
          Nossos brinquedos são construídos com madeiras de alta qualidade
          proporcionando uma longa duração aos nossos produtos.
        </Text>
      </GridItem>
      <GridItem area="images">
        <Image
          src="madeiras.svg"
          alt="Madeiras usadas para construir os nossos brinquedos"
        />
      </GridItem>
    </Grid>
  )
}
