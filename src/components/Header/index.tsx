import { Flex, Image } from '@chakra-ui/react'

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      w="100%"
      h="24"
      bg="teal.300"
      align="center"
      justify="center"
    >
      <Image
        src="/logo.svg"
        alt="Logo, BMC brinquedos"
        objectFit="cover"
        w={['120px', '130px', '140px', '150px']}
      />
    </Flex>
  )
}
