import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => (
  <>
    <Header />
    <Flex w="100%" maxW="1140px" mx="auto" pt="5rem">
      <Hero />
    </Flex>
  </>
)

export default Home
