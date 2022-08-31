import { Grid } from '@chakra-ui/react'

import { Product } from '../Product'

export function SectionProducts(): JSX.Element {
  return (
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
  )
}
