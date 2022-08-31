import { Divider, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { SectionProducts } from '../components/SectionProducts'
import { Slide } from '../components/Slide'

const Home: NextPage = () => (
  <>
    <Header />
    <Flex
      w="100%"
      maxW="1140px"
      mx="auto"
      pt="5rem"
      direction="column"
      mb="2rem"
    >
      <Hero />
      <Slide />
    </Flex>
    <Flex w="100%" align="center" justify="center" mt="5rem">
      <Divider border="1px" borderColor="black" />
      <Heading fontSize={['xl', '3xl']} w={['100%', '56%']} textAlign="center">
        Principais Produtos
      </Heading>
      <Divider border="1px" borderColor="black" />
    </Flex>
    <SectionProducts />
    {/* <Footer /> */}
  </>
)

export default Home
