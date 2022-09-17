import { Divider, HStack, SimpleGrid, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { TWITTER_PROFILE } from '../../theme/constraints'

const firstGroup = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/blog',
        label: 'Blog',
    },
    {
        href: '/colophon',
        label: 'Colohpon',
    },
    {
        href: '/projects',
        label: 'Projects',
    }
]
const secondGroup = [
    {
        href: TWITTER_PROFILE,
        label: 'Twitter',
    },
    {
        href: '/blog',
        label: 'GitHub',
    }
]


const Footer = () => {
    const { pathname } = useRouter();
  return (
    <HStack pb={8} spacing={8} >
        <Divider />
        <SimpleGrid column={{base: 1, md: 3 }} w='full'>
            <VStack alignItems="flex-start">
                {firstGroup.map(({ href, label }) => (
                    <NextLink href={href} passHref key={href}>
                        <Link color={pathname === href ? 'purple.500' : 'gray.500'}>
                            {label}
                        </Link>
                    </NextLink>
                ))}
            </VStack>
            <VStack><h1>2</h1></VStack>
            <VStack><h1>3</h1></VStack>
        </SimpleGrid>
    </HStack>
  )
}

export default Footer