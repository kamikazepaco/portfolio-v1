import { Button, Heading, HStack, Icon, Stack, Text, VStack, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

import { Link as LinkType } from '@types/link'
import { GITHUB_PROFILE, LINKEDIN_PROFILE, TWITTER_PROFILE } from 'src/constants';
import HeroImage from '@/components/hero-image';

type SocialLink = LinkType & { color: string };

const socialLinks:  SocialLink[] = [
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
    color: '#1EA1F1'
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    color: 'gray.700'
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    color: 'purple.600'
  },
];

const IndexPage = () => {
  return (
    <VStack spacing={20}>
      <Stack alignItems='center' spacing={12} direction={{ base: 'column-reverse', md: 'row'}}>
        <VStack spacing={3} alignItems='flex-start'>
          <HStack spacing={3}>
            <Heading size='lg' >Hi, Im Alexander Harris!</Heading>
          </HStack>
          <Text lineHeight='175%'>
            I'm an aspiring <strong>full-stack engineering</strong>! I work as a <span style={{backgroundColor: 'black', color: 'black' } }>Secret Squirrel Stuff</span> in the United States Air Force. In my free time I run an <strong>auto detailing business</strong> and in my free time's free time I study coding... Idle hands get in trouble, amiright? Feel free to explore my site and don't forget to <strong>sign the guest book</strong>!
          </Text>
          <HStack spacing={3}>
            {socialLinks.map(({ href, label, color}) => (
              <Button 
                key={href} 
                href={href}
                target='_blank'
                as={Link} 
                color={color} 
                rightIcon={<Icon as={FiArrowUpRight}/>}
                variant='ghost'
              >
                {label}
              </Button>
            ))}
          </HStack>
        </VStack>
        <HeroImage />
      </Stack>
    </VStack>
  )
}

export default IndexPage
