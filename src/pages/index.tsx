import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Footer } from '../components/Footer'
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
    <SectionProducts />
    <Footer />
  </>
)

export default Home
