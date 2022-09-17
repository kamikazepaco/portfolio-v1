import { Heading, HStack, IconButton, useColorMode, Button, Link } from "@chakra-ui/react";
import { IoMoon, IoSunny } from 'react-icons/io5';
import NextLink from "next/link";

import React from 'react'

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack 
        as='nav'
        width="full" 
        justifyContent="space-between" 
        alignItems="center" 
        py={3}>
        <Heading size="sm">Paco.Designs</Heading>
        <HStack alignItems="center" spacing={2}> 
            <NextLink href="/projects" passHref>
                <Button as={Link} size="sm" variant="ghost">Projects</Button>
            </NextLink>
            <NextLink href="/inspirations" passHref>
                <Button as={Link} size="sm" variant="ghost">Inspirations</Button>
            </NextLink>
            <NextLink href="/blog" passHref>
                <Button as={Link} size="sm" variant="ghost">Blog</Button>
            </NextLink>
            <IconButton 
                aria-label="toggle theme" 
                icon={colorMode === 'light' ? <IoMoon /> : <IoSunny color="yellow"/>} 
                variant="ghost"
                size="sm"
                onClick={toggleColorMode} /> 
        </HStack>
    </HStack>
  )
}

export default Header;