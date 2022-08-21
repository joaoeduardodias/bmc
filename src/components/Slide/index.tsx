import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export function Slide(): JSX.Element {
  return (
    <Flex mt="5rem" w="100%" h="35rem">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{
          width: '100%',
          flex: '1',
          height: '100%',
          borderRadius: '5px',
        }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide.png)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/line/farm">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Linha Rural
                </Heading>
                <Text
                  w="45rem"
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '1.3rem']}
                  mt={['2', '4']}
                >
                  Na nossa linha rural, nós temos currais e fazendinhas de
                  vários estilos e tamanhos, temos os modelos prontos e também
                  construímos sob encomenda do seu gosto.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide.png)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/line/farm">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Linha Rural
                </Heading>
                <Text
                  w="45rem"
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '1.3rem']}
                  mt={['2', '4']}
                >
                  Na nossa linha rural, nós temos currais e fazendinhas de
                  vários estilos e tamanhos, temos os modelos prontos e também
                  construímos sob encomenda do seu gosto.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide.png)"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
            color="white"
          >
            <Link passHref href="/line/farm">
              <a>
                <Heading fontSize={['3xl', '4xl', '5xl']} fontWeight="bold">
                  Linha Rural
                </Heading>
                <Text
                  w="45rem"
                  fontWeight="bold"
                  fontSize={['0.8rem', '1xl', '1.3rem']}
                  mt={['2', '4']}
                >
                  Na nossa linha rural, nós temos currais e fazendinhas de
                  vários estilos e tamanhos, temos os modelos prontos e também
                  construímos sob encomenda do seu gosto.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
