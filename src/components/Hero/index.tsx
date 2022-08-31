import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export function Hero(): JSX.Element {
  const showImageArea = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Grid
      as="section"
      bg="white"
      w="100%"
      h="auto"
      minH="20rem"
      pr={['3', '3', '3', '0']}
      pl={['3', '3', '3', '4']}
      templateColumns="repeat(2,1fr)"
      templateAreas={[
        `"title title"
         "text text"`,
        `"title title"
         "text text"`,
        `"title title"
         "text text"`,

        `"title images"
         "text images"`,
      ]}
      boxShadow="xl"
      rounded="md"
    >
      <GridItem
        area="title"
        display="flex"
        alignItems="center"
        justifyContent={['center', 'center', 'center', 'initial']}
        color="blue.700"
      >
        <Heading
          as="h1"
          fontSize={['4xl', '4xl', '5xl', '6xl']}
          fontWeight="extrabold"
          textAlign={['center', 'center', 'center', 'left']}
        >
          Brinquedos de Alta Duração
        </Heading>
      </GridItem>
      <GridItem area="text" color="black">
        <Text
          fontWeight="extrabold"
          fontSize={['xl', '2xl']}
          textAlign={['center', 'center', 'center', 'left']}
        >
          Nossos brinquedos são construídos com madeiras de alta qualidade
          proporcionando uma longa duração aos nossos produtos.
        </Text>
      </GridItem>
      {showImageArea && (
        <GridItem area="images">
          <Image
            src="/madeiras.svg"
            alt="Madeiras usadas para construir os nossos brinquedos"
          />
        </GridItem>
      )}
    </Grid>
  )
}
