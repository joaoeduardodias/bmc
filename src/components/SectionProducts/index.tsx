import { Divider, Flex, Grid, Heading } from '@chakra-ui/react'

import { Product } from '../Product'

export function SectionProducts(): JSX.Element {
  return (
    <>
      <Flex w="100%" align="center" justify="center" mt="5rem">
        <Divider border="1px" borderColor="black" />
        <Heading fontSize="3xl" w="56%" textAlign="center">
          Principais Produtos
        </Heading>
        <Divider border="1px" borderColor="black" />
      </Flex>
      <Grid
        mb="4rem"
        mt="5rem"
        w="100%"
        maxW="1140px"
        mx="auto"
        templateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)', 'repeat(4,1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
      >
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
        <Product
          title="Curral Pequeno"
          price={20}
          description="Curral peq, medidas: 60X80"
        />
      </Grid>
    </>
  )
}
