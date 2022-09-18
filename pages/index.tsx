import { Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'



const Home: NextPage = () => {
  return (
    <VStack spacing={20}>
      <Stack>
        <VStack spacing={3} alignItems='flex-start'>
          <HStack spacing={3}>
            <Heading size='lg' >Hi, Im Alexander Harris!</Heading>
          </HStack>
          <Text>
            I'm an aspiring <strong>full-stack engineering</strong>! I work as a <span style={{backgroundColor: 'black', color: 'black' } }>Secret Squirrel Stuff</span> in the United States Air Force. In my free time I run an <strong>auto detailing business</strong> and in my free time's free time I study coding... Idle hands get in trouble, amiright? Feel free to explore my site and don't forget to <strong>sign the guest book</strong>!
          </Text>
        </VStack>
      </Stack>
    </VStack>
  )
}

export default Home
