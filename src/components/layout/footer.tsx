import { Divider, HStack, SimpleGrid, VStack, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { GITHUB_PROFILE, LINKEDIN_PROFILE, TWITTER_PROFILE } from '../../theme/constraints'

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
        href: GITHUB_PROFILE,
        label: 'GitHub',
    },
    {
        href: LINKEDIN_PROFILE,
        label: 'LinkedIn',
    }
]


const Footer = () => {
    const { pathname } = useRouter();

    return (
      <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
        <Divider />
        <Stack
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={{ base: 2, md: 8 }}
        >
          <VStack alignItems="flex-start">
            {firstGroup.map(({ href, label }) => (
              <NextLink key={href} href={href} passHref>
                <Link
                  color={pathname === href ? 'purple.500' : 'gray.500'}
                  isExternal={href.startsWith('http')}
                >
                  {label}
                </Link>
              </NextLink>
            ))}
          </VStack>
          <VStack alignItems="flex-start">
            {secondGroup.map(({ href, label }) => (
              <NextLink key={href} href={href} passHref>
                <Link
                  color="gray.500"
                  isExternal={href.startsWith('http')}
                  target="_blank"
                >
                  {label}
                </Link>
              </NextLink>
            ))}
          </VStack>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          gridRowGap={4}
          w="full"
          spacing={0}
        >
        </Stack>
      </VStack>
    );
  };

export default Footer
