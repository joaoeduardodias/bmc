import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
})
