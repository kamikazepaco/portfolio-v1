import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/theme'
import Layout from '../src/components/layout'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp  
