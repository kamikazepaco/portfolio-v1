// Setup for making GIF image thingy. either doing this or an onHover img change
// Simply cxhange image to gif and it **SHOULD** work (and remove blur)

import NextImage from 'next/image'
import { AspectRatio, Box } from '@chakra-ui/react';

import Paco from './paco.jpg'
import Image from '@/components/image'

const HeroImage = () => {
return (

    <AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
        <Box>
            <Image  src={Paco} alt="it's me!" placeholder="blur" rounded='full' />
        </Box>
    </AspectRatio>
)   
};

export default HeroImage