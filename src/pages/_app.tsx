/* eslint-disable import/no-unresolved */
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/slide.css'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
