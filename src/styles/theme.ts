import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
  colors: {
    blue: {
      '700': '#02239F',
    },
    teal: {
      '900': '#001620',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
})
